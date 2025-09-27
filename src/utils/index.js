export function createPageUrl(title) {
  if (!title) return "/";
  const t = title.toString().trim().toLowerCase();
  if (t === "home") return "/";
  return "/" + t.replace(/\s+/g, "-");
}
