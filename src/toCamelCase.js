import { o } from 'ramda';
import toPascalCase from './toPascalCase';
import toLowerFirst from './toLowerFirst';

/**
 * Converts string into camelCase.
 *
 * @category String
 *
 * @example
 *
 * 		toCamelCase('hello-world') // 'helloWorld'
 * 		toCamelCase('hello- world') // 'helloWorld'
 * 		toCamelCase('  hello-/ world/ ') // 'helloWorld'
 *
 * @sig String -> String
 *
 */
export default o(toLowerFirst, toPascalCase);
