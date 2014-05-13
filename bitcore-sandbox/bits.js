// load the bitcore lib
var bitcore = require('bitcore');

// create a new BIP32 HD wallet
var bip32 = new bitcore.BIP32();

// log the master public and private keys for good measure (debugging)
console.log(bip32.extendedPublicKeyString());
console.log(bip32.extendedPrivateKeyString());

// save off master private key string
var masterPrivateKeyString = bip32.extendedPrivateKeyString();


// load a new bip32 object from a pre-existing master private key string
var duplicate_bip32 = new bitcore.BIP32(masterPrivateKeyString);

// verify that they're the same (should print true)
console.log(bip32.extendedPublicKeyString() == duplicate_bip32.extendedPublicKeyString());

// key at index m/10
key = bip32.derive('m/10');

// log public key string of address at index m/10
console.log(key.extendedPublicKeyString())

// BIP32 => HierarchicalKey

// var key = bitcore.Key.generateSync();
