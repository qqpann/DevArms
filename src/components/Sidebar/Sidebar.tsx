import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToolPage } from 'src/Pages'

export const Sidebar = ({ links }: { links: ToolPage[] }) => {
  return <SidebarContent links={links} />
}

const SidebarContent = ({ links }: { links: ToolPage[] }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', sm: 80 }}
      h="full"
      overflowY="scroll"
      // pos="fixed"
      display={{ base: 'none', sm: 'block' }}
    >
      <Flex
        alignItems="center"
        h="20"
        w="full"
        px="8"
        position="sticky"
        top={0}
        bg={'inherit'}
      >
        <Link to={'/'}>
          <Flex>
            <Image src={'/logo128.png'} w={8} alt="DevArms Home" mr={2} />
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              DevArms
            </Text>
          </Flex>
        </Link>
      </Flex>
      {links.map((page) => (
        <NavItem page={page} key={page.path} />
      ))}
    </Box>
  )
}

const NavItem = ({ page }: { page: ToolPage }) => {
  const location = useLocation()
  const isOpen = location.pathname === page.path
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
        bg={isOpen ? 'cyan.600' : undefined}
        color={isOpen ? 'white' : undefined}
      >
        <page.Icon />
        <Text ml={2}>{page.name}</Text>
      </Flex>
    </Link>
  )
}
