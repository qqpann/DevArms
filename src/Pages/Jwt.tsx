import { Heading, VStack } from '@chakra-ui/react'
import init, { jwt_decode, DecodedJWT } from 'arms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsInput } from 'src/components/Input/Input'
import { ArmsOutput } from 'src/components/Output/Output'

export const Jwt = () => {
  const { secret, encoded, decoded, updateSecret, updateEncoded } = useJwt()
  return (
    <PageLayout title={'JWT'}>
      <VStack alignItems="start">
        <Heading size="md">Secret</Heading>
        <ArmsInput value={secret} set={updateSecret} />
        <Heading size="md">Encoded</Heading>
        <ArmsInput value={encoded} set={updateEncoded} />
        <Heading size="md">Decoded</Heading>
        <ArmsOutput value={decoded?.header ?? ''} />
        <ArmsOutput value={decoded?.payload ?? ''} />
      </VStack>
    </PageLayout>
  )
}

const useJwt = () => {
  const [secret, setSecret] = useState<string>('')
  const [encoded, setEncoded] = useState<string>('')
  const [decoded, setDecoded] = useState<DecodedJWT>()
  useEffect(() => {
    init()
  }, [])
  const updateSecret = (txt: string) => {
    setSecret(txt)
    const decoded = jwt_decode(txt, encoded)
    setDecoded(decoded)
  }
  const updateEncoded = (txt: string) => {
    setEncoded(txt)
    const decoded = jwt_decode(secret, txt)
    setDecoded(decoded)
  }

  return { secret, encoded, decoded, updateSecret, updateEncoded }
}
