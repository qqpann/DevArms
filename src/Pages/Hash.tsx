import { Heading, VStack } from '@chakra-ui/react'
import init, { sha256 } from 'arms'
import React, { useEffect, useState } from 'react'

import { ArmsInput } from '../components/Input/Input'
import { ArmsOutput } from '../components/Output/Output'


export const HashGenerator = () => {
  const { source, update, sha256str } = useHash()
  return (
    <VStack alignItems="start" w="full">
      <Heading size="md">Input</Heading>
      <ArmsInput value={source} set={update} />
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

  return { source, update, sha256str }
}
