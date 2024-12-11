// Footer.jsx
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* 上部コンテンツ: ロゴ＆説明＆SNS、ナビゲーション */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          {/* 左カラム：ロゴ・説明・SNS */}
          <div className="flex-1">
            <div className="mb-6">
              {/* ロゴ部分（仮） */}
              <div className="text-white text-2xl font-bold mb-4">
                YourBrand
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                仮想通貨の確定申告、もっと簡単に。
                <br />
                確定申告に必要な仮想通貨の損益を自動で計算。
                <br />
                ポートフォリオ管理も、これひとつで。
              </p>
            </div>
            {/* SNSアイコン例 */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              >
                <XMarkIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              >
                <FaceSmileIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              >
                <PlayCircleIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* 右カラム：複数のリンクセクション */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 lg:max-w-4xl">
            {/* メニュー */}
            <div>
              <h3 className="text-white font-semibold mb-4">メニュー</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    特長
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    料金
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    税理士向けプラン
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    ニュース
                  </a>
                </li>
              </ul>
            </div>

            {/* お役立ち情報 */}
            <div>
              <h3 className="text-white font-semibold mb-4">お役立ち情報</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    ブログ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    ヘルプセンター
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    対応コイン一覧
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    対応取引所&ブロックチェーン一覧
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    仮想通貨の税金シミュレーション
                  </a>
                </li>
              </ul>
            </div>

            {/* ポリシー */}
            <div>
              <h3 className="text-white font-semibold mb-4">ポリシー</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    サポーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    特定商取引法に基づく表記
                  </a>
                </li>
              </ul>
            </div>

            {/* その他のサービス */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                その他のサービス
              </h3>
              <ul className="space-y-2 text-sm mb-4">
                <li>
                  <a href="#" className="hover:text-white transition">
                    ディファイタクト
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    フィンタクト
                  </a>
                </li>
              </ul>
              <h4 className="text-white font-semibold mb-2">運営会社</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    株式会社pafin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* フッター下部 */}
        <div className="mt-16 flex flex-col md:flex-row md:justify-between items-start md:items-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          <p className="mb-4 md:mb-0">© pafin Inc. 2024</p>
          <div>
            <button className="bg-gray-800 text-gray-300 py-2 px-4 rounded hover:bg-gray-700 transition flex items-center space-x-2">
              <span>日本語</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.707 1.707l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
