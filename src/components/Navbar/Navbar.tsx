import {
  Box,
  Flex,
  useColorModeValue,
  Heading,
  Spacer,
  IconButton,
} from '@chakra-ui/react'
import React from 'react'
import { GoGear } from 'react-icons/go'
import { ColorModeSwitcher } from 'src/components/ColorModeSwitcher/ColorModeSwitcher'

export const Navbar = ({ title }: { title: string }) => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} h={20} px={4} mb={8}>
      <Flex alignItems={'center'} justifyContent={'space-between'} h="full">
        <Heading>{title}</Heading>
        <Spacer />
        <Flex alignItems={'center'}>
          <ColorModeSwitcher />
          <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            icon={<GoGear />}
            aria-label={'Open settings'}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
