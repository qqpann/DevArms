import { Heading, VStack } from '@chakra-ui/react'
import init, { number_base_convert } from 'arms'
import React, { useEffect, useState } from 'react'
import { ArmsInput } from 'src/components/Input/Input'

export const NumberBase = () => {
  const nb = useNumberBase()
  return (
    <VStack>
      <Heading>Source</Heading>
      <ArmsInput value={nb.deci} set={nb.updateDeci} />
      <Heading>Hexadecimal</Heading>
      <ArmsInput value={nb.hexa} set={nb.updateHexa} />
      <Heading>Octal</Heading>
      <ArmsInput value={nb.octa} set={nb.updateOcta} />
      <Heading>Binary</Heading>
      <ArmsInput value={nb.bina} set={nb.updateBina} />
    </VStack>
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
  const updateDeci = (txt: string) => {
    update(txt, 10)
  }
  const updateHexa = (txt: string) => {
    update(txt, 16)
  }
  const updateOcta = (txt: string) => {
    update(txt, 8)
  }
  const updateBina = (txt: string) => {
    update(txt, 2)
  }

  return {
    deci,
    hexa,
    octa,
    bina,
    updateDeci,
    updateHexa,
    updateOcta,
    updateBina,
  }
}
