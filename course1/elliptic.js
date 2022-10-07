const eip55 = require('eip55')
const keccak256 = require('keccak256')
const EC = require('elliptic').ec;
const curve = new EC('secp256k1');

const dotenv = require("dotenv"); dotenv.config(); // Make sure that .env file contains the variables: PRIVATE_KEY

var keyPair = curve.genKeyPair();
console.log("privateKey:", keyPair.getPrivate().toString('hex'));

var pubPoint = keyPair.getPublic();
console.log("publicKey: ", pubPoint.encode('hex'));

var msg = 'hello world';
console.log("message:", msg);
var msgHash =  keccak256(Buffer.from(msg, 'utf8'));
var signature = keyPair.sign(msgHash.toString('hex'));
console.log("r =", signature.r.toString('hex'));
console.log("s =", signature.s.toString('hex'));
console.log("v =", signature.recoveryParam);
console.log("verify:", keyPair.verify(msgHash, signature.toDER()));

var x = pubPoint.getX(), y = pubPoint.getY();
var keyPair = curve.keyFromPublic({ x: x.toString('hex'), y: y.toString('hex') }, 'hex');
console.log("verify:", keyPair.verify(msgHash, signature));

keyPair = curve.keyFromPrivate(process.env.PRIVATE_KEY, 'hex'); // f4a2b939592564feb35ab10a8e04f6f2fe0943579fb3c9c33505298978b74893
console.log("publicKey: ", keyPair.getPublic().encode('hex')); // 0x04345f1a86ebf24a6dbeff80f6a2a574d46efaa3ad3988de94aa68b695f09db9ddca37439f99548da0a1fe4acf4721a945a599a5d789c18a06b20349e803fdbbe3

x = keyPair.getPublic().getX().toString('hex'), y = keyPair.getPublic().getY().toString('hex');
console.log('04' + x + y);
var pubHash = keccak256(Buffer.from(x + y, 'hex')).toString('hex');
console.log(pubHash)
var address = pubHash.substring(pubHash.length-40);
console.log("address:", eip55.encode(address).toString()); // 0xd5e099c71b797516c10ed0f0d895f429c278

var checksum = keccak256(Buffer.from(address)).toString('hex');
console.log(checksum);
checksum = Array.from(checksum);
for (var i = 0; i < checksum.length && i < address.length; i++) {
    var flag = parseInt(checksum[i], 16) > 8;
    console.log(address[i]+" "+checksum[i]+" "+(flag+" ").substring(0,5)+" "+(flag ? address[i].toUpperCase() : address[i]));
}
