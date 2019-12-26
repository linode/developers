/* 
  __TODO__ May need rework
  1. We worked out what allOfs and oneOfs are supposed to do, but did not get a chance to get to it
     This component has more complexion we need to address
  2. We need to handle more recursion here, deep nested data may not show
*/

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
