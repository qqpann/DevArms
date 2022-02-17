import { Box, Container, Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { toolPages } from 'src/Pages'
import { Navbar } from 'src/components/Navbar/Navbar'
import { Sidebar } from 'src/components/Sidebar/Sidebar'

export const PageLayout = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <Flex w="full" h="full">
      <Sidebar links={toolPages} />
      <Box w="full" h="full" overflowY="scroll">
        <Navbar title={title} />
        <Container maxW="8xl">{children}</Container>
      </Box>
    </Flex>
  )
}
