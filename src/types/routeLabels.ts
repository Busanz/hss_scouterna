export type RouteLabels = Record<string, string>

export const routeLabels: RouteLabels = {
  avdelningar: "Avdelningar",
  "om-hss": "Om HSS",
  lokaler: "Lokaler",
  "bli-scout": "Bli scout",
  boat: "Våra Båtar",
  historia: "Historia",
  kontakt: "Kontakt",
  sparare: "Spårare",
  upptackare: "Upptäckare",
  aventyrare: "Äventyrare",
  utmanare: "Utmanare",
}

export function getLabelForSegment(segment: string): string {
  const normalized = segment.toLowerCase().replace(/_/g, "-")
  const decoded = decodeURIComponent(segment)

  for (const [key, label] of Object.entries(routeLabels)) {
    if (key === normalized || key.includes(normalized)) return label
  }

  return decoded.replace(/[-_]/g, " ").replace(/\b(\w)/g, (c) => c.toUpperCase())
}