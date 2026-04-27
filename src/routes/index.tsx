import { createFileRoute } from '@tanstack/react-router'
import catalog from '../data/data.json'
import { CATEGORIES } from '#/utils'
import { HeroSection } from '#/components/landing/hero'
import type { CatalogItem } from '#/types'
import { CategoryPreviewSection } from '#/components/landing/category-preview'
import { CategoryBentoGridSection } from '#/components/landing/category-bento-grid'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const items = catalog as CatalogItem[]

  const itemsByCategory = new Map<string, CatalogItem[]>()
  for (const item of items) {
    const current = itemsByCategory.get(item.category)
    if (current) current.push(item)
    else itemsByCategory.set(item.category, [item])
  }

  return (
    <div id="top" className="min-h-dvh bg-zinc-50 text-zinc-950">
      {/* --- header --- */}

      <main>
        <HeroSection />

        <CategoryBentoGridSection itemsByCategory={itemsByCategory} />

        <section className="mx-auto max-w-6xl px-4 py-10">
          {CATEGORIES.map((cat) => {
            const list = itemsByCategory.get(cat) ?? []
            if (list.length === 0) return null

            return <CategoryPreviewSection key={cat} cat={cat} list={list} />
          })}
        </section>
      </main>
    </div>
  )
}
