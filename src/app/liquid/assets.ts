import { AxiosInstance } from 'axios';
import { Asset, AssetsInstance } from '../../interfaces/liquid/assets';

export const useAssets = (api: AxiosInstance): AssetsInstance => {
  const getAsset = async (params: { asset_id: string }) => {
    const { data } = await api.get<Asset>(`/asset/${params.asset_id}`);
    return data;
  };

  const getAssetTxs = async (params: {
    asset_id: string;
    is_mempool: boolean;
  }) => {
    const paramsMempools = params.is_mempool === true ? '/mempool' : '/chain';
    const { data } = await api.get<Asset>(
      `/asset/${params.asset_id}/txs${paramsMempools}`
    );
    return data;
  };

  const getAssetSupply = async (params: {
    asset_id: string;
    decimal: boolean;
  }) => {
    const paramDecimal = params.decimal === true ? '/decimal' : '';
    const { data } = await api.get<Asset>(
      `/asset/${params.asset_id}/supply${paramDecimal}`
    );
    return data;
  };

  return {
    getAsset,
    getAssetTxs,
    getAssetSupply,
  };
};
