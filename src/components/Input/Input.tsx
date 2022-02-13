import React from 'react'
import {
  Input,
  InputProps,
  InputGroup,
  InputRightElement,
  Button,
  Text,
} from '@chakra-ui/react'
import { FaPaste } from 'react-icons/fa'

type Props = InputProps
export const ArmsInput = (props: Props) => {
  return (
    <InputGroup>
      <Input {...props} size="lg" pr="4rem" />
      <InputRightElement h="100%" alignItems="center" ml="1" mr="2">
        <Button>
          <Text>
            <FaPaste />
          </Text>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
