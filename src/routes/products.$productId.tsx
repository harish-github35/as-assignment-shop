import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import catalog from '../data/data.json'
import type { CatalogItem } from '#/types'
import { slugify } from '#/utils'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetails,
})

function ProductDetails() {
  const { productId } = Route.useParams()
  const items = catalog as CatalogItem[]
  const item = items.find((i) => slugify(i.itemname) === productId)

  if (!item) {
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
            Product not found
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            We couldn’t find a product matching this link.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <div className="text-xs text-zinc-500">{item.category}</div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <div className="relative aspect-16/10 bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.itemname}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h1 className="text-2xl font-semibold tracking-tight">
                {item.itemname}
              </h1>
              <p className="mt-2 text-sm text-zinc-600">
                Specs pulled from the catalog.
              </p>

              {item.itemprops.length > 0 ? (
                <div className="mt-6">
                  <div className="text-sm font-semibold text-zinc-900">
                    Highlights
                  </div>
                  <dl className="mt-3 divide-y divide-zinc-100 rounded-2xl border border-zinc-100">
                    {item.itemprops.map((p) => (
                      <div
                        key={p.label}
                        className="flex items-start justify-between gap-4 px-4 py-3"
                      >
                        <dt className="text-sm font-medium text-zinc-700">
                          {p.label}
                        </dt>
                        <dd className="text-sm text-zinc-900">{p.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}

              <div className="mt-6">
                <Link
                  to="/"
                  hash={slugify(item.category)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                >
                  Explore more in {item.category}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
