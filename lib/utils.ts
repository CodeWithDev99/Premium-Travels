export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
