## オブジェクト指向は再利用のために使う
オブジェクト指向ってなんだか難しそう・・・・。上級エンジニアのスキル？
→再利用するための「仕組み」のこと

#### クラスの3つの役割
1. まとめる：ある機能についてのデータと振る舞いをまとめる
2. 隠す：外部から参照・改変できないようにする
3. たくさん作る：同じ機能を持つクローンを量産できる

#### クラスの用語整理
- プロパティ
    - クラスが持つデータのこと。フィールド、メンバ変数とも呼ばれる。

- メソッド
    - クラスで宣言する関数のこと。

- コンストラクタ
    - クラスからインスタンスを作るときに行う初期化

- インスタンス
    - クラスから作られたオブジェクト
    - クラスの機能を持つクローンみたいなイメージ
    
## 将棋をモデル化してみよう
将棋をモデル化する

```ts
class Game {}  // 将棋のゲーム
class Piece {}  // 将棋の駒
class Position {}  // コマの位置

class Osho extends Piece {}
class Hisha extends Piece {}
class Kaku extends Piece {}
class Kin extends Piece {}
class Gin extends Piece {}
class Keima extends Piece {}
class Kyosha extends Piece {}
class Fu extends Piece {}

```


## コマの位置をクラスにする
```ts
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

class Position {
    constructor {
        private suji: Suji,
        private dan: Dan
    } {}
}

```
- private
    - そのクラスでのみアクセス可能
- protected
    - そのクラスとサブクラスでのみアクセス可能
- public
    - どこからでもアクセス可能
    

## 抽象クラスはインスタンス化できない
```ts
abstract class Piece {
    protected position: Position
    
    constructor(
        private readonly player: Player,
        suji: Suji,
        dan: Dan
    ) {
        this.position = new Position(suji, dan)
    }
}

new Piece('first', 5, '1')
```

抽象クラス
- 抽象クラスはインスタンス化できない
- 継承でサブクラスを作るためのクラス（Pieceというクラスを継承して王将を作成するなど）


## コマのサブクラスを宣言する
```js
abstract class Piece {
    // 省略
    
    // パラメータに渡された一へコマを移動するメソッド
    // publicなので、サブクラスでオーバーライド（上書き）が可能
    moveTo(position: Position) {
        this.position = position
    }
    
    // 移動できるかどうか判定するメソッド
    // abstractをつけて宣言しておき、サブクラスで具体的に実装する
    abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
    // 具体的な実装
    canMoveTo(position: Position, player: Player): boolean {
        let distance = this.position.distanceFrom(position)
        return distance.suji < 2 && distance.dan < 2
    }
}
```


## Gameクラスでコマを生成&初期化
``` ts
class Game {
    private pieces = game.makePieces()
    private static makePieces() {
        return [
            new Osho('first', 5, '1'),
            new Osho('second', 5, '9')
        ]
    }
}
```


## 歩と成金を表現する
```ts
class Fu extends Pieces {
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        
        // 移動さきとの距離が前方1マスであれば
        return distance.suji === 0 && distance.dan === 1
    }
}

class Narikin extends Fu {
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        
        // 移動先が1マス以内かつ左後方と右後方には進めない
        return (distance.suji < 2 && distance.dan < 2 && (distance.suji !== 0 && distance.dan === -1))
    }
}
```