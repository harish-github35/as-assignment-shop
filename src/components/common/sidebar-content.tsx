import { CATEGORIES, formatCategoryId } from '#/utils'
import { Link } from '@tanstack/react-router'
import { ChevronRight, X } from 'lucide-react'
import type { FC } from 'react'

interface Props {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

export const SidebarContent: FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <aside
      className={[
        'fixed inset-y-0 left-0 z-80 w-[85vw] max-w-sm border-r border-zinc-200 bg-white shadow-2xl transition-transform duration-300 md:hidden',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
      ].join(' ')}
      aria-label="Categories menu"
    >
      <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4">
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950 text-sm font-bold text-white">
            AS
          </span>
          <span className="text-base">AutoShop</span>
        </Link>

        <div className="w-10" />
      </div>

      <nav className="px-4 py-5">
        <ul className="space-y-1">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <Link
                to="/categories/$categoryId"
                params={{ categoryId: formatCategoryId(cat) }}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                <span>{cat}</span>
                <ChevronRight className="h-5 w-5 text-zinc-500 transition group-hover:text-zinc-800" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-6 w-full rounded-xl border border-zinc-200 px-4 py-3 text-left text-lg font-medium text-zinc-900 transition hover:bg-zinc-50"
        >
          Sign in
        </button>
      </nav>
    </aside>
  )
}
