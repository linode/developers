const printName = (name) => {
  return ' ' + name;
}

const handleNested = (fieldsPath, fieldType) => {
  const fields = recursiveQuery(fieldsPath);
  return fields
    ? ` ${fieldType} { ${fields} }`
    : '';
}

const _query = property => {
  // Special cases (nested values)
  if (property.name === 'allOf') {
    if (property.type.ofType) {
      return handleNested(property.type.ofType.fields, 'allOf');
    }

    return handleNested(property.type.fields, 'allOf');
  }

  if (property.name === 'oneOf') {
    if (property.type.ofType) {
      return handleNested(property.type.ofType.fields, 'oneOf');
    }
    return handleNested(property.type.fields, 'oneOf');
  }

  // Base cases

  if (!property.type) {
    return printName(property.name);
  }

  if (property.type && !property.type.fields) {
    // Base case
    return printName(property.name);
  }

  // Normal recursion

  if (property.type && property.type.fields) {
    return `${printName(property.name)} { ${recursiveQuery(property.type.fields)} }`;
  }

  if (property.type && property.type.typeOf && property.type.typeOf.fields) {
    return `${printName(property.name)} { ${recursiveQuery(property.type.typeOf.fields)} }`;
  }

  // If we reach this point, there's a problem.
  throw new Error('No cases matched.');
}

const recursiveQuery = properties => {
  if (properties === null) { return; }
  return properties.map(property => _query(property));
}

module.exports = { rawQuery, recursiveQuery };
