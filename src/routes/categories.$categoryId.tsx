import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import catalog from '../data/data.json'
import type { CatalogItem } from '#/types'
import { slugify } from '#/utils'
import { ProductCard } from '#/components/common/product-card'

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryPage,
})

function CategoryPage() {
  const { categoryId } = Route.useParams()
  const items = catalog as CatalogItem[]

  const categories = Array.from(new Set(items.map((i) => i.category)))
  const category = categories.find((c) => slugify(c) === categoryId)
  const list = category ? items.filter((i) => i.category === category) : []

  if (!category) {
    return (
      <div className="min-h-dvh bg-zinc-50 px-4 py-12 text-zinc-950">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">
            Category not found
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            We couldn’t find a category matching this link.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-950">
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {category}
            </h1>
            <p className="mt-2 text-sm text-zinc-600">{list.length} products</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((item, index) => {
            return <ProductCard key={index} item={item} />
          })}
        </div>
      </main>
    </div>
  )
}
