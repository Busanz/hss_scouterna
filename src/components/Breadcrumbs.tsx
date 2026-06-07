'use client'

import Link from "next/link"
import { ChevronRight, TentTreeIcon } from "lucide-react"
import { BreadcrumbsProps } from "../types/BreadcrumbTypes"

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className={`w-full ${className}`}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  className="h-4 w-4 shrink-0 text-slate-400"
                  aria-hidden="true"
                />
              )}

              {index === 0 && (
                <TentTreeIcon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              )}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-md px-1 py-0.5 transition-colors duration-200 hover:text-slate-900 hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="rounded-md px-1 py-0.5 font-medium text-slate-900"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs