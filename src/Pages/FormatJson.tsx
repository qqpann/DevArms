import { Heading, HStack, VStack } from '@chakra-ui/react'
import init, { format_json } from 'arms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsTextarea } from 'src/components/Textarea/Textarea'

export const FormatJson = () => {
  const { source, target, update } = useFormatJson()
  return (
    <PageLayout title={'JSON formatter'}>
      <HStack h="full" w="full">
        <VStack alignItems="start" h="full" w="full">
          <Heading size="md">JSON source</Heading>
          <ArmsTextarea value={source} set={update} />
        </VStack>
        <VStack alignItems="start" h="full" w="full">
          <Heading size="md">JSON formatted</Heading>
          <ArmsTextarea value={target} />
        </VStack>
      </HStack>
    </PageLayout>
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
