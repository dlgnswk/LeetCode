/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  const addressList = [...address];
  for (let i = 0; i < addressList.length; i++) {
    if (addressList[i] === '.') {
      addressList[i] = '[.]';
    }
  }
  return addressList.join('');
};