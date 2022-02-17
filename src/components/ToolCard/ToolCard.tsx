import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ToolPage } from 'src/Pages'

export const ToolCard = ({ page }: { page: ToolPage }) => {
  return (
    <Link to={page.path}>
      <Box
        as="button"
        borderWidth={1}
        borderColor={'gray'}
        borderRadius={16}
        w={140}
        h={200}
      >
        <Flex direction="column" alignItems="center" h="full" p={8}>
          <Box p={8}>
            <page.Icon size={32} />
          </Box>
          <Heading size="xs">{page.name}</Heading>
        </Flex>
      </Box>
    </Link>
  )
}
