require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note mushroom provide harvest clinic obscure system'; 
let testAccounts = [
"0x184d7a808c67e40c5f16f168001d627e1178a2e10b4065f45557a8ccfa0950bf",
"0x587d46e19242c8e18a3cd4edbd7f81aedf613119317b3c67cf2ebe7853666073",
"0xdee51df1cde9f97e83dc2d473d02bc1886faab4e7ef9242cf9f69820c2bb227a",
"0x25b285b999e2ac26fb6662ee46561eb0988f82ddc9558e23bb20f70ac8d81f64",
"0xe7816415341774c3cfc4d68adef891a7b21b28b4a089caf858f3fe545a83163f",
"0xfc330b61a7ac55fbb83f5fa36a2341c017e7ab514f4b73e9759233107f9d1ab7",
"0x31bde2e3a023eacf64837d2b21f670f738b067388c9d5d7b60b4b71c66954c34",
"0xa26a4f8afe16122a9d280e9d1965aa3a42ae99d0727420e092804d35cd601e92",
"0x26631ccd4667c6dad959f33038a86ebf9ddf3a1d55cbf2e8a2ebf90eae0b4b79",
"0xd7c77acdff315a1ccfd5e310783dc4f90a50931cb81e8dc1c69a7566d4d62b3e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


