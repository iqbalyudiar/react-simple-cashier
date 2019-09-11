export function getPriceForOrderType(type, types) {
  return types.find(t => t.type === type).price;
}

export function getLabelForOrderType(type, types) {
  return types.find(t => t.type === type).label;
}
