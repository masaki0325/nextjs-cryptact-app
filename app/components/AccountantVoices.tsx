// app/components/AccountantVoices.tsx
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function AccountantVoices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold rounded-full px-3 py-1 mb-4">
            税理士・会計士の声
          </span>
          <h2 className="text-3xl font-bold text-gray-900 leading-relaxed">
            専門家からも高く評価される信頼のサービス
          </h2>
          <p className="text-lg text-gray-600 mt-2 leading-relaxed max-w-2xl">
            多くの税理士・会計士から、煩雑かつ複雑な仮想通貨の損益計算を簡単に行えると評価いただいています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* 左の口コミカード */}
          <div className="bg-white shadow rounded-2xl p-6 relative">
            <div className="flex items-center mb-4">
              {/* アイコンで代用 */}
              <UserCircleIcon className="w-12 h-12 text-gray-400 mr-4" />
              <div>
                <p className="text-gray-900 font-bold text-sm">村上 裕一 様</p>
                <p className="text-gray-600 text-sm">
                  村上裕一公認会計士事務所
                </p>
              </div>
            </div>

            <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line space-y-4">
              <p>
                クリプタクトは国内外の多くの取引所に自動対応しているだけでなく、多くの取引所からAPI連携による取引履歴の読み込みが可能であり、さらに非常に多くの仮想通貨の時価情報も自動で集計されます。
              </p>
              <p>
                これまでほぼの方法で取引所ごとに異なるフォーマットにある情報をかき集め、計算していた方にとっては、取引履歴や時価情報の取得と反映にかかる手間を大幅に削減できるかと思います。
              </p>
              <p>
                また、日々市場が大きくなっているDeFiやNFT取引についてもウォレットアドレスを接続するだけでデータの取り込みが可能です。自動識別機能もあるので、煩雑な取引をしている方にとっては非常に使いやすいサービスであるように感じます。
              </p>
              <p>
                日々取引履歴ファイルの新規対応や、既存の運用状況の把握や年末に向けてどのような運用を行っていけばよいかといった点を検討することも容易になると思います。
              </p>
            </div>
          </div>

          {/* 右の口コミカード */}
          <div className="bg-white shadow rounded-2xl p-6 relative">
            <div className="flex items-center mb-4">
              {/* アイコンで代用 */}
              <UserCircleIcon className="w-12 h-12 text-gray-400 mr-4" />
              <div>
                <p className="text-gray-900 font-bold text-sm">田辺 拓也 様</p>
                <p className="text-gray-600 text-sm">コインタックス株式会社</p>
              </div>
            </div>

            <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line space-y-4">
              <p>
                仮想通貨取引の損益計算は非常に複雑です。特に複数の取引所を利用し、海外取引所での取引や異なる通貨（円やドルなど）、仮想通貨同士の交換を行った場合、その計算はさらに難しくなります。クリプタクトを利用すれば、取引履歴から自動的に実に膨大な価格データを基準に日本円に転換し計算してくれるため、円に変換する手間や実際の取引と利益が大きく変わる心配もありません。
              </p>
              <p>
                リリース時から利用していますが、対応取引所や対応通貨、操作性も日々向上しており、できることが増えていることを実感しています。
              </p>
              <p>
                仮想通貨の損益計算は今なお難しい部分がありますが、クリプタクトは国固有の事情に応じた様々な方法で計算され、おかしな数値はコラー表示されるため、計算ミスが起こりにくいのも非常におすすめです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
