import { Heading, VStack } from '@chakra-ui/react'
import init, { base64enc, base64dec } from 'devarms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsInput } from 'src/components/Input/Input'

export const Base64Converter = () => {
  const { source, base64, updateSource, updateBase64 } = useBase64()
  return (
    <PageLayout title={'Base64'}>
      <VStack alignItems="start">
        <Heading size="md">Plain text</Heading>
        <ArmsInput value={source} set={updateSource} />
        <Heading size="md">Base64</Heading>
        <ArmsInput value={base64} set={updateBase64} />
      </VStack>
    </PageLayout>
  )
}

const useBase64 = () => {
  const [source, setSource] = useState<string>('Hello World')
  const [base64, setBase64] = useState<string>('SGVsbG8gV29ybGQ=')

  useEffect(() => {
    init()
  }, [])

  const updateSource = (txt: string) => {
    setSource(txt)
    setBase64(base64enc(txt))
  }
  const updateBase64 = (txt: string) => {
    setBase64(txt)
    setSource(base64dec(txt))
  }

  return { source, base64, updateSource, updateBase64 }
}
