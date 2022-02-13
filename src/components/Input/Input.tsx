import {
  Input,
  InputProps,
  InputGroup,
  InputRightElement,
  Button,
  Text,
} from '@chakra-ui/react'
import React, { SyntheticEvent } from 'react'
import { IoCloseCircle } from 'react-icons/io5'

type Props = InputProps & {
  value: string
  set: (txt: string) => void
}
export const ArmsInput = ({ value, set, ...rest }: Props) => {
  const onChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    set(target.value)
  }
  const onClear = () => {
    set('')
  }
  return (
    <InputGroup>
      <Input {...rest} value={value} onChange={onChange} size="lg" pr="4rem" />
      <InputRightElement h="100%" alignItems="center" ml="1" mr="2">
        <Button onClick={onClear} bg="inherit">
          <Text>
            <IoCloseCircle />
          </Text>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
