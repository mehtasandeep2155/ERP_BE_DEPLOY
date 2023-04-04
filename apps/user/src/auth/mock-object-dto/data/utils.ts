/***
 * param obj
 * param keys
 * returns deleted key from object
 */
export const filterKeysFromObject = ({
  obj,
  keys,
}: {
  obj: object;
  keys: [string];
}) => {
  keys.forEach((key) => {
    delete obj[key];
  });

  return obj;
};
