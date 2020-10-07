export default class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const bufferView = new Uint16Array(this.buffer);
    let outputString = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      outputString += String.fromCharCode(bufferView[i]);
    }
    return outputString;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Dave","level":17}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
