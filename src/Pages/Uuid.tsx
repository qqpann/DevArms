import { Button, Heading, VStack } from '@chakra-ui/react'
import init, { uuid_gen } from 'arms'
import React, { useEffect, useState } from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ArmsInput } from 'src/components/Input/Input'
import { ArmsTextarea } from 'src/components/Textarea/Textarea'

export const Uuid = () => {
  const { num, setNum, text, create } = useUuid()
  return (
    <PageLayout title={'UUID generator'}>
      <VStack alignItems="start">
        <Heading size="md">Params</Heading>
        <ArmsInput value={String(num)} set={(n) => setNum(Number(n))} />
        <Button onClick={create}>Generate</Button>
        <Heading size="md">UUID</Heading>
        <ArmsTextarea value={text} />
      </VStack>
    </PageLayout>
  )
}

const useUuid = () => {
  const [num, setNum] = useState<number>(1)
  const [text, setText] = useState<string>('')
  useEffect(() => {
    init()
  }, [])
  const createNum = (num: number) => {
    const res = []
    for (let i = 0; i < num; i++) {
      res.push(uuid_gen())
    }
    setText(res.join('\n'))
  }
  const create = () => {
    createNum(num)
  }
  return { num, setNum, text, create }
}
