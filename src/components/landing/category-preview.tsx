import type { CatalogItem } from '#/types'
import { formatCategoryId } from '#/utils'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { ProductCard } from '../common/product-card'

interface Props {
  cat: string
  list: CatalogItem[]
}

export const CategoryPreviewSection: FC<Props> = ({ cat, list }) => {
  return (
    <div key={cat} className="py-8" id={formatCategoryId(cat)}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-display font-semibold tracking-tight">
            {cat}
          </h2>
          <p className="mt-1 text-base text-zinc-600">
            {list.length} products in this category
          </p>
        </div>

        <Link
          to="/categories/$categoryId"
          params={{ categoryId: formatCategoryId(cat) }}
          className="text-base font-medium text-blue-700 hover:text-blue-800"
        >
          View all
        </Link>
      </div>

      <div className="mt-5 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {list.slice(0, 4).map((item, index) => {
          return (
            <ProductCard
              key={index}
              item={item}
              className="group block w-72 shrink-0 rounded-2xl bg-transparent transition sm:w-76 lg:w-66"
            />
          )
        })}
      </div>
    </div>
  )
}
