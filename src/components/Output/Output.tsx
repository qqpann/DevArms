import {
  Input,
  InputProps,
  InputGroup,
  InputRightElement,
  Button,
  useClipboard,
  Fade,
} from '@chakra-ui/react'
import React from 'react'
import { FaCheck, FaCopy } from 'react-icons/fa'

type Props = InputProps & {
  value: string
}
export const ArmsOutput = ({ value, ...rest }: Props) => {
  const { hasCopied, onCopy } = useClipboard(value)
  return (
    <InputGroup alignItems="center">
      <Input
        {...rest}
        isReadOnly={true}
        variant={'filled'}
        size="lg"
        pr="4rem"
        textOverflow={'ellipsis'}
        overflow="hidden"
        value={value}
      />
      <InputRightElement h="100%" alignItems="center" ml="1" mr="2">
        <Button onClick={onCopy}>
          <Fade in={hasCopied} unmountOnExit>
            <FaCheck
              style={{
                top: 'calc(50% - 8px)',
                left: 'calc(50% - 8px)',
                width: '16px',
                height: '16px',
                position: 'absolute',
              }}
            />
          </Fade>
          <Fade in={!hasCopied} unmountOnExit>
            <FaCopy
              style={{
                top: 'calc(50% - 8px)',
                left: 'calc(50% - 8px)',
                width: '16px',
                height: '16px',
                position: 'absolute',
              }}
            />
          </Fade>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
