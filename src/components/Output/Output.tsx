import React from 'react'
import {
  Input,
  InputProps,
  InputGroup,
  InputRightElement,
  Button,
  Text,
} from '@chakra-ui/react'
import { FaCopy } from 'react-icons/fa'

type Props = InputProps
export const ArmsOutput = (props: Props) => {
  return (
    <InputGroup alignItems="center">
      <Input
        {...props}
        isReadOnly={true}
        variant={'filled'}
        size="lg"
        pr="4rem"
        textOverflow={'ellipsis'}
        overflow="hidden"
      />
      <InputRightElement h="100%" alignItems="center" ml="1" mr="2">
        <Button>
          <Text>
            <FaCopy />
          </Text>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
