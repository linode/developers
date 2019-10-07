const accumulator = (or, ov) => {
  return Object.keys(or).reduce((acc, currentKey) => {
    if (!!ov[currentKey]) {
      acc[currentKey] = ov[currentKey];
    } else {
      acc[currentKey] = or[currentKey];
    }
    return acc;
  }, {});
};

export const allOf = (origin, override) => {
  const data = accumulator(origin, override);
  return data
    ? `{
        ${Object.keys(data)
          .filter(dp4 => data[dp4] !== null)
          .map(e3 => {
            const dps3 = data[e3];
            return dps3 && dps3.type !== "array"
              ? `"${e3}": ${JSON.stringify(dps3.example ? dps3.example : "")}`
              : dps3.type === "array"
              ? `"${e3}": []`
              : "";
          })}}`
    : "";
};
