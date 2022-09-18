require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth muscle coast gesture person forget general'; 
let testAccounts = [
"0x774fd34debd972de27b33cfa9a8d627de9846eafd0d55c002c97cfc3a2eb4156",
"0xd1c068a582ef70fbf1a43fcd6b77e9354e5b001aa28efe437306230b1b59e89d",
"0x2cb6ed81526c4b9a8c3fd00ecc86ba960ec477232443202835ebdc3af30e9a2e",
"0xdc7115b4899c2115160f28d1abc1b15759381235e10a61e65d7e512a72fd133b",
"0x5db53cf49db91193c795f8fe447ec45132ab41423e9c42735383119fa121cde7",
"0xc91250831fc6fef5c7e66b5b4b895e8a11e83a87492735bd8d600693336430c8",
"0xac96f13b715ee2e84cdcb58b3e1e49e94f74755da456eae5b78e1c7d1de8b3bc",
"0x8405cc5db04245d764d822ca6bab6816c4425af6e42c1b04f706f571f1b1f036",
"0x240e1d1eeb0ab6914ea33c7c2f3a50544e10723541d5cf658f945520de5fee6f",
"0x8b63750640af72f177df1b1710259ac2d02279b34723266798eb99211766112a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

