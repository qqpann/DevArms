import { Box, BoxProps, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { ToolPage } from 'src/Pages'

type Props = BoxProps & {
  page: ToolPage
}
export const ToolCard = ({ page, ...rest }: Props) => {
  return (
    <Box
      as="button"
      {...rest}
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
  )
}
