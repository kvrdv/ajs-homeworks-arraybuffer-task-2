import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';

test('Тестируем метод load(). Если объекты совпадают - sucess', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('Тестируем метод toString(). Если строки совпадают - sucess', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
  const receivedString = ArrayBufferConverter.toString();
  const exampleString = '{"data":{"user":{"id":1,"name":"Dave","level":17}}}';
  expect(receivedString).toBe(exampleString);
});
