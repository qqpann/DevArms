import { Heading, VStack } from '@chakra-ui/react'
import init, { text_case_convert, TextCase } from 'arms'
import React, { useEffect, useState } from 'react'
import { ArmsInput } from 'src/components/Input/Input'
import { ArmsOutput } from 'src/components/Output/Output'

export const TextCasePage = () => {
  const { source, target, update } = useTextCase()
  return (
    <VStack alignItems="start">
      <Heading size="md">Text Case Converter</Heading>
      <ArmsInput value={source} set={update} />
      <Heading size="md">Output</Heading>
      <ArmsOutput value={target} />
    </VStack>
  )
}
const useTextCase = () => {
  const [source, setSource] = useState<string>('')
  const [target, setTarget] = useState<string>('')
  useEffect(() => {
    init()
  }, [])
  const update = (txt: string) => {
    setSource(txt)
    setTarget(text_case_convert(txt, TextCase.Snake))
  }
  return { source, target, update }
}
