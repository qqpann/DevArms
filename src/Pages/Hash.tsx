import { Heading, VStack } from '@chakra-ui/react'
import init, { sha256 } from 'devarms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsInput } from 'src/components/Input/Input'
import { ArmsOutput } from 'src/components/Output/Output'

export const HashGenerator = () => {
  const { source, update, sha256str } = useHash()
  return (
    <PageLayout title={'Hash'}>
      <VStack alignItems="start">
        <Heading size="md">Input</Heading>
        <ArmsInput value={source} set={update} />
        <Heading size="md">SHA256</Heading>
        <ArmsOutput value={sha256str} />
      </VStack>
    </PageLayout>
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
