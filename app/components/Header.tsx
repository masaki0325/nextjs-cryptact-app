// app/components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="text-xl font-bold text-blue-600">MyCryptact</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/features" className="text-gray-700 hover:text-gray-900">
            機能
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            価格
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
            ブログ
          </Link>
        </nav>

        {/* Right side (Login / Sign up) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-gray-900">
            ログイン
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            登録
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="px-4 py-2 space-y-2">
            <Link
              href="/features"
              className="block text-gray-700 hover:text-gray-900"
            >
              機能
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-gray-900"
            >
              価格
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-gray-900"
            >
              ブログ
            </Link>
            <hr className="my-2" />
            <Link
              href="/login"
              className="block text-gray-700 hover:text-gray-900"
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
            >
              登録
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
