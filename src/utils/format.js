export const formatValue = (value) =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const profit = (value) => (value >= 0 ? true : false);
