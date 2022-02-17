import { Box } from '@chakra-ui/react'
import React from 'react'
import { ToolCard } from 'src/components/ToolCard/ToolCard'

import { ToolPage } from '.'

export const Home = ({ toolPages }: { toolPages: ToolPage[] }) => {
  return (
    <Box w="full" h="full" overflowY="scroll">
      {toolPages.map((page) => (
        <ToolCard page={page} key={page.path} />
      ))}
    </Box>
  )
}
