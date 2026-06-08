"use client"

import { usePathname } from "next/navigation"
import { BreadcrumbItem } from "../types/BreadcrumbTypes"
import { getLabelForSegment } from "@/types/routeLabels"
import Breadcrumbs from "./Breadcrumbs"

const AutoBreadcrumbs = (props?: { className?: string }) => {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const items: BreadcrumbItem[] = [
    { label: "Startsida", href: "/" },
  ]

  segments.forEach((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")

    const isLast = index === segments.length - 1

    items.push({
      label: getLabelForSegment(segment),
      href: isLast ? undefined : href,
    })
  })

  return <Breadcrumbs items={items} className={props?.className} />
}

export default AutoBreadcrumbs