## Type AliasとInterfaceの誤読
型エイリアス（type）の方が機能が少ない
　→2021年時点でのバージョンでは大差なし

全てのソフトウェアは拡張的であるべきなのでinterfaceを使うべき
　→本当にそうか？
　ライブラリ・・・不特定多数が利用するので拡張性を持つべき
　アプリケーション・・・全ての型が拡張性を持つとバグを生む

## interfaceの基本用法と宣言のマージ
- `interface`宣言しで定義
- `type Alias`と違って「=」は不要
``` ts
interface Bread {
    calories: number
}
```

- 同名の`interface`を宣言すると型が追加（マージ）される
- 宣言のマージ：同じ名前を共有する複数の宣言を自動的に結合
```ts
interface Bread {
    type: string
}

const francePan: Bread = {
    calories: 350,
    type: 'hard'
}
```


## Interfaceの拡張
- extendsを使うことで継承したサブインターフェースを作れる
- Type Aliasをextendsすることもできる

```ts
interface Book {
    page: number,
    title: string
}

interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
    cycle: 'weekly',
    page: 300,
    title: '週刊少年ジャンプ'
}
```


## Interfaceでclassに型を定義する
- implementsを使ってclassに型を定義できる

```ts
interface Book {
    page: number
    title: string
}

class Comic implements Book {
    page: number
    title: string
    
    constructor(page: number, title: string) {
        this.page = page
        this.title = title
    }
}

const popularComic = new Comic(200, '鬼滅の刃')
```


