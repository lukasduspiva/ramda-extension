import { o, equals, split, reject } from 'ramda';
import { emptyString, nonAlphaNumericRegExp } from './internal';

/**
 * Splits string into list. Delimeter is every sequnce of non-alphanumerical values.
 *
 * @category String
 *
 * @example
 *
 * 		splitByNonAlphaNumeric('Hello    world/1'); // ['Hello', 'world', '1']
 *
 * @sig String -> [String]
 *
 */
export default o(reject(equals(emptyString)), split(nonAlphaNumericRegExp));
