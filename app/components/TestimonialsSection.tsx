// TestimonialsSection.jsx

import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#fdfaf4] py-16">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* 見出しエリア */}
        <div className="text-center mb-12">
          <p className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            お客様からの声
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            10万人以上の方が利用
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            取引の整理や税務申告の負担が軽減できたとの声多数！
          </p>
        </div>

        {/* カードエリア */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* カード1 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* ユーザー情報 */}
            <div className="flex items-center mb-4">
              <UserCircleIcon className="w-10 h-10 text-gray-300 mr-3" />
              <div>
                <p className="font-bold text-gray-800 text-sm">
                  さざなみ＠とんがりコイナー
                </p>
                <p className="text-gray-500 text-sm">@KAGIYA000B</p>
              </div>
            </div>
            {/* コメント */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ガチャガチャやってると、損益がどのくらいなのか感覚的に分からなくなってくるのが総平均法だからね。
              <br />
              cryptact とかツール使わないとキツい
            </p>
            {/* リンクを右寄せするためのdivラップ */}
            <div className="text-right">
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                続きを見る
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* カード2 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <UserCircleIcon className="w-10 h-10 text-gray-300 mr-3" />
              <div>
                <p className="font-bold text-gray-800 text-sm">
                  KMT | 分散投資
                </p>
                <p className="text-gray-500 text-sm">@KMT_ETF</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              暗号資産計算ツールのcryptactが便利でした。
              <br />
              時間を掛けて自分で総平均法で計算して抜け漏れがないか不安だったけど、案の定しっかり漏れが出てきた。
              <br />
              しかもアカウント登録、アップロード、反映までたった数分で。
              <br />
              プランによって固定費が掛かるけど、もう手作業はしたくない。
            </p>
            <div className="text-right">
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                続きを見る
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* カード3 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <UserCircleIcon className="w-10 h-10 text-gray-300 mr-3" />
              <div>
                <p className="font-bold text-gray-800 text-sm">
                  一夜_/ichiya.eth@書道ARTIST
                </p>
                <p className="text-gray-500 text-sm">@ichiyaduke23</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ＠クリプタクトの便利な点は自分のポートフォリオが一目でわかる所です。
              <br />
              持っている通貨
              <br />
              24時間変動
              <br />
              現在価格
              <br />
              一枚あたりの取得価格(ここ重要)
              <br />
              時価
              <br />
              含み損益
              <br />
              いくらで買ったか覚えてなくないですか？
              <br />
              確定申告用だけでなく、損益計算・ポートフォリオとしても優秀！
            </p>
            <div className="text-right">
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center"
              >
                続きを見る
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
