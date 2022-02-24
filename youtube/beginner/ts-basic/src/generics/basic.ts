export default function genericsBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue

    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }

    return result
  }

  console.log('Generics basics sample 1:', stringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue

    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }

    return result
  }

  console.log('Generics basics sample 2:', numberReduce([100, 200, 300], 1000))

  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue

    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }

    return result
  }

  console.log('Generics basics sample 3:', genericStringReduce(['Make ', 'TypeScript ', 'Great ', 'Again '], ''))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue

    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }

    return result
  }

  console.log('Generics basics sample 3:', genericNumberReduce([-100, -200, -300], 1000))

  // 色々なジェネリック型の定義記法
  // 完全な呼び出しシグネチャ（ここのシグネチャにジェネリック方を割り当てる）
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  // 呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
