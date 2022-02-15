import { Heading, VStack } from '@chakra-ui/react'
import init, { format_json } from 'arms'
import React, { useEffect, useState } from 'react'
import { ArmsTextarea } from 'src/components/Textarea/Textarea'

export const FormatJson = () => {
  const { source, target, update } = useFormatJson()
  return (
    <VStack alignItems="start">
      <Heading size="md">JSON</Heading>
      <ArmsTextarea value={source} set={update} />
      <ArmsTextarea value={target} />
    </VStack>
  )
}

const useFormatJson = () => {
  const [source, setSource] = useState<string>('')
  const [target, setTarget] = useState<string>('')
  useEffect(() => {
    init()
  }, [])
  const update = (txt: string) => {
    setSource(txt)
    setTarget(format_json(txt))
  }
  return { source, target, update }
}
