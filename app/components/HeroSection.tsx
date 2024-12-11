// app/components/HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          暗号資産の取引管理を簡単に
        </h1>
        <p className="text-gray-600 mb-8">
          取引履歴を簡潔にまとめ、税務申告用の書類作成をサポート
        </p>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 inline-block"
        >
          今すぐ始める
        </Link>
      </div>
    </section>
  );
}
