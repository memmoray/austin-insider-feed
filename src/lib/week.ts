const TZ = "America/Chicago";

/** Monday (Austin time) of the week containing `now`, as a UTC-noon Date. */
export function weekStart(now = new Date()): Date {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ, year: "numeric", month: "numeric", day: "numeric", weekday: "short",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)!.value;
  const d = new Date(Date.UTC(+get("year"), +get("month") - 1, +get("day"), 12));
  const dow = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(get("weekday"));
  d.setUTCDate(d.getUTCDate() - dow);
  return d;
}

export function addDays(d: Date, n: number) {
  const c = new Date(d);
  c.setUTCDate(c.getUTCDate() + n);
  return c;
}

export function weekNumber(monday: Date) {
  return Math.floor(monday.getTime() / (7 * 864e5));
}

export const fmtDay = (d: Date) =>
  d.toLocaleDateString("en-US", { timeZone: "UTC", weekday: "short", month: "short", day: "numeric" });

export const fmtShort = (d: Date) =>
  d.toLocaleDateString("en-US", { timeZone: "UTC", month: "short", day: "numeric" });
