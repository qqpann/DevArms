import { Heading, VStack } from '@chakra-ui/react'
import init, { number_base_convert } from 'arms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsInput } from 'src/components/Input/Input'

export const NumberBase = () => {
  const { deci, hexa, octa, bina, factoryUpdate } = useNumberBase()
  return (
    <PageLayout title={'Number Base converter'}>
      <VStack alignItems="start">
        <Heading size="md">Decimal</Heading>
        <ArmsInput value={deci} set={factoryUpdate(10)} />
        <Heading size="md">Hexadecimal</Heading>
        <ArmsInput value={hexa} set={factoryUpdate(16)} />
        <Heading size="md">Octal</Heading>
        <ArmsInput value={octa} set={factoryUpdate(8)} />
        <Heading size="md">Binary</Heading>
        <ArmsInput value={bina} set={factoryUpdate(2)} />
      </VStack>
    </PageLayout>
  )
}

const useNumberBase = () => {
  const [deci, setDeci] = useState<string>('0')
  const [hexa, setHexa] = useState<string>('0')
  const [octa, setOcta] = useState<string>('0')
  const [bina, setBina] = useState<string>('0')
  useEffect(() => {
    init()
  }, [])

  const update = (txt: string, base: number) => {
    setDeci((curr) => number_base_convert(base, 10, txt) ?? curr)
    setHexa((curr) => number_base_convert(base, 16, txt) ?? curr)
    setOcta((curr) => number_base_convert(base, 8, txt) ?? curr)
    setBina((curr) => number_base_convert(base, 2, txt) ?? curr)
  }
  const factoryUpdate = (base: number) => {
    const set = (txt: string) => {
      return update(txt, base)
    }
    return set
  }

  return {
    deci,
    hexa,
    octa,
    bina,
    factoryUpdate,
  }
}
