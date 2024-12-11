"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function FAQSection() {
  const faqs = [
    {
      question: "仮想通貨でいくら稼いだら、確定申告を支払う必要がありますか？",
      answer:
        "サラリーマンなら20万円超で確定申告が必要です。個人事業主や主婦・学生の場合、48万円を超える場合は、確定申告が必要になる可能性がありますので詳細な損益計算を行って確認するようにしましょう。",
      link: {
        text: "詳細はこちら",
        href: "#",
      },
    },
    {
      question:
        "仮想通貨の損益計算で使用される『総平均法』と『移動平均法』とは？",
      answer:
        "総平均法は、1年間の取引全てを集めて平均取得価格を計算する方法で、移動平均法は、取得が発生する都度、平均取得価格を計算する方法です。個人の場合、e-taxまたは納税地税務署へ申請しない限りは総平均法となります。クリプタクトは両方の計算方法に対応しています。",
      link: {
        text: "詳細はこちら",
        href: "#",
      },
    },
    {
      question: "海外取引所での取引も課税対象ですか？",
      answer:
        "海外取引所で発生した利益も原則として課税対象となります。ただし国によっては税制が異なりますので、専門家へ確認をおすすめします。",
      link: {
        text: "詳細はこちら",
        href: "#",
      },
    },
    {
      question: "年を跨いで仮想通貨を利確や損切したらどうなりますか？",
      answer:
        "基本的に確定申告は年度ごとに行われるため、年度を跨いだ損益は翌年の申告対象となります。損失が発生した場合は繰越控除を行うことで翌年以降の税負担を軽減できます。",
      link: {
        text: "詳細はこちら",
        href: "#",
      },
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    // 各コンテンツのスクロール高さを取得
    const newHeights = faqs.map((_, i) => {
      const el = contentRefs.current[i];
      return el?.scrollHeight || 0;
    });
    setHeights(newHeights);
  }, [faqs]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-3 py-1 mb-2">
              サポート
            </span>
            <h2 className="text-3xl font-bold text-gray-900 leading-relaxed">
              仮想通貨の確定申告においてよくある質問
            </h2>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">
              クリプタクトをご検討中の、確定申告が初めての方からよくいただく質問をまとめました。
            </p>
          </div>

          <div className="space-y-6 mt-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const maxHeight = isOpen ? heights[index] : 0;

              return (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-none"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg font-medium text-gray-900 leading-relaxed">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    // アニメーションを滑らかにするため、opacityとtransformを組み合わせる
                    // 開閉時に透明度と位置を変えてふわっと出現させる
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                    style={{ maxHeight: maxHeight }}
                  >
                    <div className="mt-4 text-lg text-gray-700 leading-relaxed space-y-3">
                      <p>{faq.answer}</p>
                      {faq.link && (
                        <Link
                          href={faq.link.href}
                          className="text-blue-600 hover:text-blue-800 inline-flex items-center text-lg font-medium transition-colors duration-200 leading-relaxed"
                        >
                          {faq.link.text} &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
