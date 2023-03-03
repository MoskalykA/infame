export const convertObjectIdsToStrings = (obj: any): any => {
  for (const key in obj) {
    if (key == "_id" && obj[key].toHexString) {
      obj[key] = obj[key].toHexString();
    } else if (typeof obj[key] == "object") {
      obj[key] = convertObjectIdsToStrings(obj[key]);
    }
  }

  return obj;
};
