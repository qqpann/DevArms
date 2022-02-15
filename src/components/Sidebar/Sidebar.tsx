import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React, { ReactText } from 'react'
import { Link } from 'react-router-dom'

import { ColorModeSwitcher } from '~/ColorModeSwitcher'
import { ToolPage } from '~/Pages'

export const Sidebar = ({ links }: { links: ToolPage[] }) => {
  return <SidebarContent links={links} />
}

const SidebarContent = ({ links }: { links: ToolPage[] }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', sm: 60 }}
      // pos="fixed"
      h="full"
      display={{ base: 'none', sm: 'block' }}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          DevArms
        </Text>
        <ColorModeSwitcher />
      </Flex>
      {links.map((page) => (
        <NavItem page={page} key={page.path}>
          {page.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({
  page,
  children,
}: {
  page: ToolPage
  children: ReactText
}) => {
  return (
    <Link to={page.path}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
      >
        {children}
      </Flex>
    </Link>
  )
}
