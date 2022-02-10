## 配列に秩序をもたらす型定義
配列の要素として持つ値の方を定義できる

```ts
const colors: string[] = ['red', 'blue']
colors.push('yellow');  // OK
colors.push(123)        // NG
```

型定義方法: t[]とArray<T>は同義

```ts
const odd: number[] = [1,3,5];
const even: Array<number> = [2,4,6];
```

合併型も使える

```ts
const ids: (string | number)[] = ["ABC", 123]
ids.push("DEF");    // OK
ids.push(456);      // OK
```


## 配列の型推論
アノテーションしなくても型推論される

```ts
const generateSomeArray = () => {
    const _someArray = [];  // any[]
    _someArray.push(123)    // number[]として推論される
    _someArray.push("ABC")  // (number | string)[]として推論される
    
    return _someArray;
}

const someArray = generateSomeArray();
someArray.push(true)    // NG
```

## 厳格な配列（タプル）
#### タプルは配列の各要素の数と型を定義できる
```ts
let response: [number, string] = [200, "OK"];

response = [400, "Bad Request", "Email parameter is missing"];
response = ["400", "Bad Request"]
```

#### 可変長（レストパラメーター）も使える
```ts
const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"];
```


## イミュータブルな配列
#### Javascriptの配列はconstで宣言してもミュータブル（変更可能）
```ts
const mutableNumbers: number[] = [1,2,3];
mutableNumbers[2] = 4;
```


#### readonlyでイミュータブル（書き換え不可）な配列/タプルを作成可能
```ts
const commands: readonly string[] = ["git add", "git commit", "git push"];
commands.push("git fetch");
commands[2] = "git pull";

const numbers: ReadonlyArray<number> = [1,2,3];
const names: Readonly<string[]> = ["Tarou", "kazu"];
```