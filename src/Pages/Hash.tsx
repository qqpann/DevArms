import React, { SyntheticEvent, useEffect, useState } from 'react'
import init, { sha256 } from 'arms'
import { ArmsInput } from '../components/Input/Input'
import { ArmsOutput } from '../components/Output/Output'
import { Heading, VStack } from '@chakra-ui/react'

export const HashGenerator = () => {
  const { source, onChangeSource, sha256str } = useHash()
  return (
    <VStack alignItems="start" w="full">
      <Heading size="md">Input</Heading>
      <ArmsInput value={source} onChange={onChangeSource} />
      <Heading size="md">SHA256</Heading>
      <ArmsOutput value={sha256str} />
    </VStack>
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
