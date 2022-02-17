import { Button, Heading, VStack } from '@chakra-ui/react'
import init, { lorem_gen } from 'devarms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsInput } from 'src/components/Input/Input'
import { ArmsTextarea } from 'src/components/Textarea/Textarea'

export const LoremIpsum = () => {
  const { size, text, setSize, create } = useLoremIpsum()
  return (
    <PageLayout title={'Lorem Ipsum'}>
      <VStack alignItems="start">
        <Heading size="md">Params</Heading>
        <ArmsInput value={String(size)} set={(n) => setSize(Number(n))} />
        <Button onClick={create}>Generate</Button>
        <ArmsTextarea value={text} />
      </VStack>
    </PageLayout>
  )
}
const useLoremIpsum = () => {
  const [size, setSize] = useState<number>(3)
  const [text, setText] = useState<string>('')
  useEffect(() => {
    init()
  }, [])
  const create = () => {
    setText(lorem_gen(size))
  }
  return { size, text, setSize, create }
}
