import React, { useEffect, useState } from 'react'
import init, { json_to_yaml } from 'arms'
import { Box, Stack, VStack } from '@chakra-ui/react'
import { ArmsOutput } from '../components/Output/Output'
import { ArmsInput } from '../components/Input/Input'

export const JsonYaml = () => {
  const { json, yaml, updateJson } = useJsonYaml()

  return (
    <Stack>
      <Box>
        <ArmsInput value={json} set={updateJson} />
      </Box>
      <Box>
        <ArmsOutput value={yaml} />
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
