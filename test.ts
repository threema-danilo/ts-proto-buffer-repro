import {BytesHolder} from './messages';

console.log('> Encoding BytesHolder message containing Uint8Array');
const encoded = BytesHolder.encode({
    foo: new Uint8Array([1, 2, 3, 4]),
}).finish();;

console.log('> Decoding BytesHolder message');
const decoded = BytesHolder.decode(encoded);

console.log('> Message contents:');
console.log(decoded);

if (decoded.foo instanceof Buffer) {
    console.error('Error: BytesHolder field type is `Buffer`, not `Uint8Array`!');
} else if (decoded.foo instanceof Uint8Array) {
    console.log('BytesHolder field type is `Uint8Array`, good!');
} else {
    console.log('BytesHolder field type is unknown');
}
