import type { CatalogItem } from '#/types'
import { CATEGORIES, formatCategoryId } from '#/utils'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

interface Props {
  itemsByCategory: Map<string, CatalogItem[]>
}

export const CategoryBentoGridSection: FC<Props> = ({ itemsByCategory }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 -mt-10 pb-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.slice(0, 4).map((cat, idx) => {
          const image =
            itemsByCategory.get(cat)?.[0]?.image ??
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop'

          const span =
            idx === 0
              ? 'lg:col-span-2 lg:row-span-2'
              : idx === 3
                ? 'lg:col-span-2'
                : ''

          return (
            <Link
              key={cat}
              to={`/categories/$categoryId`}
              params={{ categoryId: formatCategoryId(cat) }}
              className={[
                'group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_20px_60px_-40px_rgba(0,0,0,.75)] backdrop-blur',
                'min-h-40',
                span,
              ].join(' ')}
            >
              <img
                src={image}
                alt={cat}
                className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-black/15 to-black/30" />
              <div className="relative flex h-full flex-col justify-end p-5 text-white">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{cat}</div>
                    <div className="mt-0.5 text-xs text-white/80">
                      {itemsByCategory.get(cat)?.length ?? 0} items
                    </div>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition group-hover:bg-white/20">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
