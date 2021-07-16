import 'jest';
import { Hello } from '../src/main';
describe('Calculator tests', () => {
  test('new Hello return Hello world', () => {
    // arrange and act
    const hello = new Hello({ word: 'Hello world' });
    var result = hello.sayword();

    // assert
    expect(result).toMatch('Hello world');
  });
});