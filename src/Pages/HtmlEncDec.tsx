import { Heading, VStack } from '@chakra-ui/react'
import init, { html_decode, html_encode } from 'arms'
import React, { useEffect, useState } from 'react'
import { ArmsInput } from 'src/components/Input/Input'

export const HtmlEncDec = () => {
  const { decoded, encoded, updateDec, updateEnc } = useHtmlEncDec()
  return (
    <VStack alignItems="start">
      <Heading size="md">Decoded</Heading>
      <ArmsInput value={decoded} set={updateDec} />
      <Heading size="md">Encoded</Heading>
      <ArmsInput value={encoded} set={updateEnc} />
    </VStack>
  )
}

const useHtmlEncDec = () => {
  const [decoded, setDecoded] = useState<string>('')
  const [encoded, setEncoded] = useState<string>('')
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
