import { curry, compose, isEmpty, intersection } from 'ramda';

/**
 * Returns `true` if any of the items from first array is not the second array.
 *
 * @category List
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array is not in the second array.
 *
 * @example
 *
 *  	containsNone(['e', 'f'], ['a', 'b', 'c']) // true
 *   	containsNone(['a', 'f'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 */
export default curry(compose(isEmpty, intersection));