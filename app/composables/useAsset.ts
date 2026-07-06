export function useAsset(path: string) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const baseURL = useRuntimeConfig().app.baseURL;
  return baseURL + path.replace(/^\//, '');
}
