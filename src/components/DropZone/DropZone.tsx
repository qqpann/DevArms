import { Center, useColorModeValue, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiFillFileAdd } from 'react-icons/ai'

// Thanks: https://github.com/chakra-ui/chakra-ui/issues/457
// Thanks: https://github.com/4ndv/magnets/blob/main/components/dropzone/index.js
export const DropZone = ({
  onFileAccepted,
}: {
  onFileAccepted: (file: File) => void
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFileAccepted(acceptedFiles[0])
    },
    [onFileAccepted]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: ['.txt', '.png', '.*'],
    maxFiles: 1,
    multiple: false,
  })

  const dropText = isDragActive
    ? 'Drop the files here ...'
    : 'Drag and drop any file here, or click to select files'

  const activeBg = useColorModeValue('gray.100', 'gray.600')
  const borderColor = useColorModeValue(
    isDragActive ? 'teal.300' : 'gray.300',
    isDragActive ? 'teal.500' : 'gray.500'
  )

  return (
    <Center
      p={10}
      w="full"
      cursor="pointer"
      bg={isDragActive ? activeBg : 'transparent'}
      _hover={{ bg: activeBg }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="3px dashed"
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Icon as={AiFillFileAdd} mr={2} />
      <Text>{dropText}</Text>
    </Center>
  )
}
