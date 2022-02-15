import { Heading, VStack } from '@chakra-ui/react'
import init, { url_decode, url_encode } from 'arms'
import React, { useEffect, useState } from 'react'
import { ArmsInput } from 'src/components/Input/Input'

export const UrlEncDec = () => {
  const { decoded, encoded, updateDec, updateEnc } = useUrlEncDec()
  return (
    <VStack>
      <Heading size="md">Decoded</Heading>
      <ArmsInput value={decoded} set={updateDec} />
      <Heading size="md">Encoded</Heading>
      <ArmsInput value={encoded} set={updateEnc} />
    </VStack>
  )
}

const useUrlEncDec = () => {
  const [decoded, setDecoded] = useState<string>(
    'https://github.com/qqhann/DevArms'
  )
  const [encoded, setEncoded] = useState<string>(
    'https%3A%2F%2Fgithub%2Ecom%2Fqqhann%2FDevArms'
  )
  useEffect(() => {
    init()
  }, [])

  const updateDec = (txt: string) => {
    setEncoded(url_encode(txt))
    setDecoded(txt)
  }
  const updateEnc = (txt: string) => {
    setEncoded(txt)
    setDecoded(url_decode(txt))
  }
  return { decoded, encoded, updateDec, updateEnc }
}
