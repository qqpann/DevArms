import React, { useEffect, useState } from 'react'
import init, { json_to_yaml } from 'arms'
import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import { ArmsTextarea } from '../components/Textarea/Textarea'

export const JsonYaml = () => {
  const { json, yaml, updateJson } = useJsonYaml()

  return (
    <Stack>
      <Heading size="md">JSON</Heading>
      <Box>
        <ArmsTextarea value={json} set={updateJson} />
      </Box>

      <Heading size="md">YAML</Heading>
      <Box>
        <ArmsTextarea value={yaml} />
      </Box>
    </Stack>
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
