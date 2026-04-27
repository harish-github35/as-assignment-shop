import { CATEGORIES, formatCategoryId } from '#/utils'
import { Link } from '@tanstack/react-router'
import { Menu, Search, ShoppingBag, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SidebarContent } from './sidebar-content'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 font-semibold tracking-tight"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950 text-sm font-bold text-white">
              AS
            </span>
            <span className="text-base">AutoShop</span>
          </Link>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 shadow-sm">
              <Search className="h-4 w-4 text-zinc-500" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                placeholder="Search"
                aria-label="Search products"
              />
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-white"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          <nav className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
          </nav>
        </div>

        <div className="mx-auto hidden max-w-6xl px-4 pb-3 md:block">
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-zinc-700">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                to="/categories/$categoryId"
                params={{ categoryId: formatCategoryId(cat) }}
                className="rounded-md px-2 py-1 font-medium hover:bg-zinc-100"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div
        className={[
          'fixed inset-0 z-70 bg-black/40 transition-opacity duration-300 md:hidden',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <SidebarContent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}
