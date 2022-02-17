import { Heading, VStack } from '@chakra-ui/react'
import init, { html_decode, html_encode } from 'arms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsInput } from 'src/components/Input/Input'

export const HtmlEncDec = () => {
  const { decoded, encoded, updateDec, updateEnc } = useHtmlEncDec()
  return (
    <PageLayout title={'HTML percent encoding'}>
      <VStack alignItems="start">
        <Heading size="md">Decoded</Heading>
        <ArmsInput value={decoded} set={updateDec} />
        <Heading size="md">Encoded</Heading>
        <ArmsInput value={encoded} set={updateEnc} />
      </VStack>
    </PageLayout>
  )
}

const useHtmlEncDec = () => {
  const [decoded, setDecoded] = useState<string>('a > b && a < c')
  const [encoded, setEncoded] = useState<string>('a &gt; b &amp;&amp; a &lt; c')
  useEffect(() => {
    init()
  }, [])

  const updateDec = (txt: string) => {
    setEncoded(html_encode(txt))
    setDecoded(txt)
  }
  const updateEnc = (txt: string) => {
    setEncoded(txt)
    setDecoded(html_decode(txt))
  }
  return { decoded, encoded, updateDec, updateEnc }
}
