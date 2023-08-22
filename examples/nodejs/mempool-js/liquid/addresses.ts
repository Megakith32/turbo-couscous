import mempoolJS from "./../../../../src/index";

const init = async () => {
  try {
    const {
      liquid: { addresses },
    } = mempoolJS();
    
    const address = 'Go65t19hP2FuhBMYtgbdMDgdmEzNwh1i48';
    
    const myAddress = await addresses.getAddress({ address });
    console.log(myAddress);
    
    const addressTxs = await addresses.getAddressTxs({ address });
    console.log(addressTxs);
    
    const addressTxsChain = await addresses.getAddressTxsChain({ address });
    console.log(addressTxsChain);
    
    const addressTxsMempool = await addresses.getAddressTxsMempool({ address });
    console.log(addressTxsMempool);
    
    const addressTxsUtxo = await addresses.getAddressTxsUtxo({ address });
    console.log(addressTxsUtxo);
  } catch (error) {
    console.log(error);
  }
};
init();
