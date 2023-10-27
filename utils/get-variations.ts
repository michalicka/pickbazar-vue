export function getVariations(variations: object | undefined) {
  if (!variations) return {};
  return _groupBy(variations, "attribute.slug");
}
