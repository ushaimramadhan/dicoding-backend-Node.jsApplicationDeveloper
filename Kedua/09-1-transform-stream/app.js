/**
 * @TODO
 * Buatlah fungsi `createBase64TransformStream` yang mengonversi data yang masuk menjadi base64.
 */
const { Transform } = require("stream");

function createBase64TransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      const base64Data = chunk.toString("base64");
      this.push(base64Data);
      callback();
    },
  });
}