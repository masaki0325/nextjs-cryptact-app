// app/components/CtaSection.tsx

export default function CtaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-50 to-blue-200 rounded-3xl shadow-lg p-10 flex flex-col md:flex-row items-center">
          {/* 左カラム */}
          <div className="flex-1 mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              クリプタクトを今すぐ始めよう！
            </h2>
            <p className="text-gray-700 mb-2">クレジットカード登録不要。</p>
            <p className="text-gray-700 mb-6">
              メールアドレス登録だけで、無料でご利用いただけます。
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white text-sm font-medium px-5 py-3 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              サービスに移動する
            </a>
          </div>

          {/* 右カラム（アイコンエリア） */}
          <div className="w-24 h-24 md:w-36 md:h-36 bg-white flex items-center justify-center rounded-2xl shadow-lg">
            {/* 仮のアイコン（Tailwindのプレースホルダ） 
            実際にはロゴ画像やSVGを配置する */}
            <svg
              className="w-16 h-16 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {/* 仮の形状 */}
              <path d="M2 2h8v8H2V2zm0 10h8v8H2v-8zm10 0h8v8h-8v-8zM10 2h8v8h-8V2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
