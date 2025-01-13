export function kebabize(cameCaseString: string) {
  return cameCaseString
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase();
}
