import React, { SyntheticEvent, useEffect, useState } from 'react'
import init, { sha256 } from 'arms'

export const HashGenerator = () => {
  const { source, onChangeSource, sha256str } = useHash()
  return (
    <div>
      <input value={source} onChange={onChangeSource} />
      <span>{sha256str}</span>
    </div>
  )
}

const useHash = () => {
  const [source, setSource] = useState<string>('Hello World')
  const [sha256str, setSha256] = useState<string>(
    'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e'
  )

  useEffect(() => {
    init()
  }, [])

  const update = (txt: string) => {
    setSource(txt)
    setSha256(sha256(txt))
  }

  const onChangeSource = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    update(target.value)
  }

  return { source, onChangeSource, sha256str }
}
