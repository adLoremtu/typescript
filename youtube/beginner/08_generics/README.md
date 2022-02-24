## 型を抽象化するジェネリック型
型の種類は異なるが同じデータの構造・・・共通化できそう

```ts
const stringReduce = (array: string[], initialValue: string): string => {}
const numberReduce = (array: number[], initialValue: number): number => {}
```

#### ジェネリック型パラメーター
- 型をパラメータ化（後から実パラメータを渡す）
- T, U, V, Wなどがよく使われる

```ts
type Reduce<T> = {
    (array: T[], initialValue: T): T
}

const reduce: Reduce<string> = (array, initialValue) => {}
```


## ジェネリックの宣言方法
「呼び出しシグネチャの記法」と「ジェネリック型の割り当て範囲」によって異なる

```ts
// 完全な呼び出しシグネチャ（シグネチャ全体にジェネリック方を割り当てる）
type Genericreduce<T> = {
    (array: t[], initialValue: T): T
}

//　完全な呼び出しシグネチャ（ここのシグネチャにジェネリック方を割り当てる
type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
}

// 呼び出しシグネチャの省略記法
type GenericReduce3<T> = (array: T[], initialValue: T) => T
type GenericReduce4 = <T>(array: T[], initialValue: T) => T
```


## ポリフォーフィズム
多様性・多相性 = 色々な形に変化できること

ジェネリック型を用いると・・・
- 型を抽象化して共通化できる
- 呼び出す時に具体的な型を渡す

