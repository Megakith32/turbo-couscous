import mempoolJS from '../../../src/index';

const init = async () => {
  const {
    liquid: { mempool },
  } = mempoolJS();

  const getMempool = await mempool.getMempool();
  console.log(getMempool);

  const getMempoolRecent = await mempool.getMempoolRecent();
  console.log(getMempoolRecent);

  const getMempoolTxids = await mempool.getMempoolTxids();
  console.log(getMempoolTxids);
};
init();
