import type { CatalogItem } from '#/types'
import { cn, slugify } from '#/utils'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

interface Props {
  item: CatalogItem
  className?: string
}

export const ProductCard: FC<Props> = ({ item, className }) => {
  const productId = slugify(item.itemname)

  return (
    <Link
      to="/products/$productId"
      params={{ productId }}
      className={cn(
        'group block shrink-0 rounded-2xl bg-transparent transition',
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-zinc-100">
        <img
          src={item.image}
          alt={item.itemname}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="px-1 pt-3 pb-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="line-clamp-1 text-base font-semibold text-zinc-900">
            {item.itemname}
          </h3>
          {/* <span className="text-sm font-medium text-zinc-500">
            {item.category}
          </span> */}
        </div>
        <p className="mt-0.5 text-sm text-zinc-500">Explore details</p>
      </div>
    </Link>
  )
}
