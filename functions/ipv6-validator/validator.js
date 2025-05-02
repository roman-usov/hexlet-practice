// @ts-check

// BEGIN (write your solution here)
const isValidAddressGroup = (addressGroup) => {
  if (addressGroup.length > 4) return false;

  const validValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  const characters = addressGroup.split('');

  return characters.every((character) => validValues.includes(character));
};

const isValidIPv6 = (address) => {
  const hasDoubleColumns = address.includes('::');

  let addressWithoutDoubleColumns = address;

  if (hasDoubleColumns) {
    if (address.split('::').length > 2) return false;

    if (address.startsWith('::' || address.endsWith('::'))) {
      addressWithoutDoubleColumns = addressWithoutDoubleColumns.replace(
        '::',
        '',
      );
    } else {
      addressWithoutDoubleColumns = addressWithoutDoubleColumns.replace(
        '::',
        ':',
      );
    }
  }

  if (
    addressWithoutDoubleColumns.startsWith(':')
    || addressWithoutDoubleColumns.endsWith(':')
  ) {
    return false;
  }

  const addressGroups = addressWithoutDoubleColumns.toLowerCase().split(':');

  if (
    (hasDoubleColumns && addressGroups.length >= 8)
    || (!hasDoubleColumns && addressGroups.length !== 8)
  ) {
    return false;
  }

  return addressGroups.every((group) => isValidAddressGroup(group));
};

export default isValidIPv6;
// END
