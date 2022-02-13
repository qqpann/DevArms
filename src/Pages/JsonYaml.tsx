import { Heading, HStack, VStack } from '@chakra-ui/react'
import init, { json_to_yaml } from 'arms'
import React, { useEffect, useState } from 'react'

import { ArmsTextarea } from '~/components/Textarea/Textarea'

export const JsonYaml = () => {
  const { json, yaml, updateJson } = useJsonYaml()

  return (
    <HStack w="full" h="full">
      <VStack w="full" h="full" alignItems="start">
        <Heading size="md">JSON</Heading>
        <ArmsTextarea value={json} set={updateJson} />
      </VStack>

      <VStack w="full" h="full" alignItems="start">
        <Heading size="md">YAML</Heading>
        <ArmsTextarea value={yaml} />
      </VStack>
    </HStack>
  )
}

const useJsonYaml = () => {
  const [json, setJson] = useState<string>('')
  const [yaml, setYaml] = useState<string>('')

  useEffect(() => {
    init()
  }, [])

  const updateJson = (nextJson: string) => {
    setJson(nextJson)
    console.log(nextJson)
    setYaml(json_to_yaml(nextJson))
    console.log(json_to_yaml(nextJson))
  }

  return { json, yaml, updateJson }
}
