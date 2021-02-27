export function requireSafe(path: string) {
  try {
    return require(path)
  } catch (e) {
    console.error(`unable to require ${path}`, e)
  }
}
