import { Heading, VStack } from '@chakra-ui/react'
import init, { sha256 } from 'arms'
import React, { useEffect, useState } from 'react'
import { DropZone } from 'src/components/DropZone/DropZone'
import { ArmsOutput } from 'src/components/Output/Output'

export const Checksum = () => {
  const { curr, prev, update } = useChecksum()
  const onFileAccepted = (f: File) => {
    const reader = new FileReader()
    reader.readAsBinaryString(f)
    reader.onload = () => {
      update(String(reader.result) ?? '')
    }
  }
  return (
    <VStack alignItems="start">
      <Heading size="md">File</Heading>
      <DropZone onFileAccepted={onFileAccepted} />
      <Heading size="md">Current</Heading>
      <ArmsOutput value={curr} />
      <Heading size="md">Previous</Heading>
      <ArmsOutput value={prev} />
    </VStack>
  )
}

const useChecksum = () => {
  const [curr, setCurr] = useState<string>('')
  const [prev, setPrev] = useState<string>('')
  useEffect(() => {
    init()
  }, [])
  const update = (txt: string) => {
    setPrev(curr)
    setCurr(sha256(txt))
  }
  return { curr, prev, update }
}
