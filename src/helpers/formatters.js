/**
 * Converts object to query string
 * @param {object} object Object with to be converted. Ex.: {param1: 'a', param2: 'b'}
 * @param {string} prefix Optional (default: '?')
 */
export function objectToQueryString(object, prefix = '?') {
  let queryString = Object.keys(object).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(object[k])
  }).join('&');

  return prefix + queryString;
}