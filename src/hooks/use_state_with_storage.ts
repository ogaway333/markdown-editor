//カスタムフックの作成
import { useState } from 'react'


/*
init: string は初期値で、useState の引数と同じ。
key: string は localStorage に保存する際のキー。
[string, (s: string) => void] はカスタムフックの戻り値で、useState の戻り値と同じ型。
*/
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

  //useState から取得した関数と localStorage への保存を組み合わせた関数を生成
  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
  }
//最後に useState から取得した値と localStorage への保存を組み合わせた更新関数を返却
  return [value, setValueWithStorage]
}