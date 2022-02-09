# 型エイリアスでオブジェクトの型定義
## Object型に意味はない
- Object型はObjectであることを伝えるだけ

```
const a: Object = {
    name: "Torahack",
    age: 28
};
a.name // aというobjectにはnameというプロパティはないというエラーが出力
```

- オブジェクトリテラル記法を使おう
```
let country: {
    language: string,
    name: string
} = {
    language: "Japanese",
    name; "Japan"
};
```

## 特別なプロパティを扱う
- オプショナル(?)のついたプロパティはあってもなくてもOK
- readonlyのついたプロパティは上書きできない

```
let torahack: {
    age: number,
    lastName: string,
    readonly firstName: string,
    gender?: string
} = {
    age: 28,
    lastName: "Yamada",
    firstName: "Tarou"
};

torahack.gender = "male";           // 後から追加も可能
torahack.lastName = "Kamado";       // 上書きできる
torahack.firstName = "Tanjiro";     // 上書き不可
```

## オブジェクトの柔軟な型定義
#### インデックスシグネチャ
- オブジェクトが複数のプロパティを持つ可能性を示す
- [key: T]: Uのように定義する
- keyはstringかnumberのみ

```
const capitals; {
    [countryName: string]: string
} = {
    Japan: 'Tokyo',
    Korea: 'Seoul'
}

capitals.China = 'Beijing'
capitals.Canada = 'Otawa'
```

## 型エイリアスで型定義を再利用
#### 方エイリアスとは
- typeを使って、肩に名前をつけて宣言できる
- 同じ型を何度も定義する必要がない
- 方に名前をつけることで変数の役割を明確化

```
type Country = {
    capital: string
    language: string
    name: string
}

const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan'
}
```


## 合併型（Union）と交差型（intersection）
- 合併型
  - 型Aか型Bどちらかの方を持つ
- 交差型
  - 型Aと型B両方の型を持つ
  - 交差型は「AとBに共通する型」ではない