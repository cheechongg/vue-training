export const findById = (resources, resourceId) => {
  return resources.find((v) => v.id === resourceId);
};
