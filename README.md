# memex-localstorage-version
このリポジトリは、[memex](https://ja.wikipedia.org/wiki/Memex)を実現するための最初の段階として、Local Storageを使ってブラウザ上にデータを保存する極めてシンプルなメモアプリの実装例です。

## memex開発の動機
開発の動機は2つあります。
1. 一つ目は、人間の脳内にある情報はWeb上に共有されているものより量も質も高く、それらが相互につながれば、誰もが人類の知の総体に容易にアクセスできるようになると考えたからです。
私は、42Tokyo在籍中に「人間はどのように学習するのか」に興味を持ち、学習科学を学ぶ中で「構成主義」という認識論を知りました。構成主義とは、「学ぶことは自分の中に意味を構成すること」と考える立場です。
従来の「客観的に捉えられる知識を誰もが同じプロセスで理解する」という客観主義の学習観とは異なるため、構成主義においては **言葉の翻訳** が必要だと考えます。
「右」という言葉を説明するときに、ある人は「北を向いたときに東の方角」と答え、別の人は「キーボード上のescキーの位置に対してreturnキーがある方向」と答えるかもしれません。
日本では「右」と言いますが、英語圏では"right"という言葉でその概念を表現します。自分と似たような知識の構成を持っている人のmemexから思考をつなぐことで、未知の知識も学習しやすくなるのではないかと仮説を立てました。

2. 二つ目は、テクノロジーへの理解を深めたかったからです。memex実現のためには、テクノロジーが必要不可欠です。
「自分はエンジニアになった後に何をつくりたいのか」という問いを考えるため、しばらくプログラミングやコンピュータ・サイエンスの分野から離れて料理や語学留学をしていました。
そのため、もう一度基礎から学び直そうと思い立ちました。memexの共有にはWebが必要不可欠なので、JavaScriptを学びたいと思いました。
構成主義に則って、学びたいもの(JavaScript)を自分の興味がある対象(memex開発)を通して学ぶことで、効果的に学習が進められるのではないかと考えています。

## 目標
- HTML/CSSの応用
  - 現状(2024年12月現在)、Adobe XDのデザインデータから簡単なLP程度であれば実装できるレベルです。今までの学びを元に自分のビジュアルイメージを形にでき、JavaScriptとのつながりを説明できる状態を目指します。
- JavaScriptの基礎文法習得
  - [The Modern JavaScript Tutorial](https://javascript.info/)をベースに学び、学んだ知識をこのプロジェクトに応用することで基礎文法の読み書きができる状態を目指します。
  - 最低限、変数や関数の扱い、JavaScript特有のもの、DOM操作とイベントの処理についての習得を目指します(非同期処理などは必須目標に入れない->LocalStorageが同期的)。
- ブラウザの仕組みを学ぶ
  - 技術について調べる段階で「Local Strage」を用いると、データベースやサーバーとのやり取りの必要がなく実装できることを知りました。
しかし、それがどういうものなのかまだ理解できていません。なぜ、セキュアではないのかなど「Local Strage」の詳細を学び、実現できること・できないことを技術的に理解した状態を目指します。
  - DOMという言葉の理解も曖昧なレベルなので、ブラウザのレンダリングの流れや各機能について概要を説明できる状態を目指します。

## 機能概要
- メモ追加機能
  - テキストエリアにテキストを入力して、「追加ボタン」を押すと、LocalStorageにデータが保存される機能。
- メモ表示機能
  - 保存済みのメモ(テキストデータ)を最新のものが上部にくるよう一覧で表示する機能。
- メモ削除機能
  - 「削除」ボタンを押すと最新の一件のメモを削除できる機能。

## 更新記録(学んだこと)

## 今後の展望
- indexedDBを用いた実装。
  - より複雑なデータ構造の扱いや検索機能の実装を学ぶため。
- TypeScriptでの実装。
  - 型付けを行うことで、データ構造や関数の引数・戻り値を明確化し、保守性を高めるため。
- ReactやNode.jsなどフレームワークを用いた拡張バージョン。
  - スケーラブルなアプリケーションに拡張するため。
- Docker/GitHub Actions(CI/CD)
- デプロイ

## 実行方法
