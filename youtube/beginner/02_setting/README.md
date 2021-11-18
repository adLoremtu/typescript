# tsconfigとWebpackの設定を理解して環境構築
## 単語集
- webpack
  - モジュールバンドラ
    - 複数のファイルを1つにまとめるもの
    - 依存関係を考慮しながらjavascriptを1ファイルにまとめる
- TypeScript
  - コンパイラを使う
    - コンパイラとは変換器のようなもの
  - TypeScriptで書いたコードをJavascriptに変換
  - 新しい公文を古いブラウザでも動かせる

## ビルドの仕組み
.ts -> コンパイルをする -> .js -> webpackでバンドル -> 1ファイルにまとめる

## 各パッケージの役割
- typescript
  - TypeScript構文をJavaScript構文に変換するコンパイラ
- ts-loader
  - Webpackと連動してTypeScriptコンパイラを起動
- webpack
  - 複数のファイルを1つにまとめる
- webpack-cli
  - コマンドラインでWebpackを使う
- webpack-dev-server
  - webpackのビルド
  - 開発用Webサーバの起動
  - ホットリロード（ファイル変更の自動検知とブラウザ更新）

## tsconfigの基本的な設定項目
- 最初から有効
  - target: 初期値はes5
    - コンパイル後のJavascriptのバージョン
  - module: 初期値はcommonjs
    - どの方式でモジュール関連のコードを使うか
    - node.jsでモジュール関連のコードを扱うような設定になる
  - strict: 初期値はtrue
    - TypeScriptの基本的なチェックを全てtrueにするか
  - esModuleInterop: 初期値はtrue
    - import文を使って読み込めるようにするか
  - forceConsistentCasingInFileNames: 初期値はtrue
    - ファイル名の大小を区別するか
- 最初は無効
  - allowJs: 初期値はtrue
    - JavaScriptファイルを許容するか
  - jsx: 初期値は"preserve"
    - JSXをどのようにコンパイルするか
  - lib: 初期値は[]
    - 使用するJSライブラリ
    - 基本的にはtargetで指定した環境で使用可能なライブラリは自動で使える
    - それをより明示的に宣言したい場合記述する
  - ourDir: 初期値は"./"
    - ビルド結果の出力先
  - baseUrl: 初期値は"./"
    - 開発環境のBaseUrlを指定する