// app/components/LatestNews.tsx
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function LatestNews() {
  const newsData = [
    {
      category: "機能アップデート",
      date: "2024年12月05日",
      title:
        "Kucoinの約定注文（分割注文を表示）ファイル、MEXCの先物取引ファイルの新ヘッダーに対応",
      href: "#",
    },
    {
      category: "プレスリリース",
      date: "2024年12月02日",
      title:
        "ふるさと納税の上限額もわかる「仮想通貨の税金シミュレーションツール」をリリース",
      href: "#",
    },
    {
      category: "ニュース",
      date: "2024年11月28日",
      title:
        "GMOコイン共催セミナー「あなたの暗号資産の損益、税金は!? 年内に知って安心の確定申告のポイント」12/19開催",
      href: "#",
    },
    {
      category: "機能アップデート",
      date: "2024年11月28日",
      title: "Fuelcoの新規対応を開始、Bitbankのファイルのヘッダー変更に対応",
      href: "#",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">最新ニュース</h2>

        <div className="grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
          {/* 左カラム: 上2つ */}
          <div className="space-y-6 border-gray-200 md:border-r md:pr-8">
            {newsData.slice(0, 2).map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">
                    {item.category} ・ {item.date}
                  </p>
                  <Link href={item.href}>
                    <h3 className="text-base font-medium text-gray-900 leading-snug hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <Link
                  href={item.href}
                  className="ml-4 mt-1 flex-shrink-0 text-gray-600 hover:text-gray-800"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          {/* 右カラム: 下2つ */}
          <div className="space-y-6 md:pl-8 border-gray-200">
            {newsData.slice(2, 4).map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">
                    {item.category} ・ {item.date}
                  </p>
                  <Link href={item.href}>
                    <h3 className="text-base font-medium text-gray-900 leading-snug hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <Link
                  href={item.href}
                  className="ml-4 mt-1 flex-shrink-0 text-gray-600 hover:text-gray-800"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 全てのニュースへのリンク */}
        <div className="mt-8 flex justify-end">
          <Link
            href="#"
            className="group inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            全てのニュースを表示する
            <ChevronRightIcon className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
