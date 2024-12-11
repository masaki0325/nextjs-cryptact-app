// app/components/CoinMarquee.tsx

export default function CoinMarquee() {
  // 色違いの円をコイン代わりに用意
  const baseCoins = [
    { color: "bg-red-500" },
    { color: "bg-yellow-500" },
    { color: "bg-green-500" },
    { color: "bg-blue-500" },
    { color: "bg-pink-500" },
    { color: "bg-purple-500" },
    { color: "bg-indigo-500" },
    { color: "bg-gray-500" },
    { color: "bg-orange-500" },
    { color: "bg-teal-500" },
    { color: "bg-lime-500" },
    { color: "bg-amber-500" },
    { color: "bg-fuchsia-500" },
  ];

  const coins = [...baseCoins, ...baseCoins, ...baseCoins];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          23,691コインに対応！順次拡大中
        </h2>
        <p className="text-gray-700 mb-6">
          次々に登場する新しい仮想通貨に対応し、取引するどんな通貨でも手入力の手間がなく計算が進められます。
        </p>

        <div className="overflow-hidden relative w-full h-24 bg-white">
          <div
            className="absolute whitespace-nowrap flex space-x-8 items-center h-full animate-scroll"
            style={{ animationDelay: "-30s" }} // 半分経過した地点からスタート
          >
            {coins.map((coin, i) => (
              <div
                key={i}
                className={`w-16 h-16 rounded-full shadow flex items-center justify-center ${coin.color}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            すべての対応コインを見る &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
