import bisqJS from "./../../../src/index-bisq";

const init = async () => {
  try {
    const { transactions } = bisqJS();
    
    const txid = '4b5417ec5ab6112bedf539c3b4f5a806ed539542d8b717e1c4470aa3180edce5';
    
    const tx = await transactions.getTx({ txid });
    console.log(tx);
    
    const txs = await transactions.getTxs({ index: 0, length: 1 });
    console.log(txs);
  } catch (error) {
    console.log(error);
  }
};
init();
