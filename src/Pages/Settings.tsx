import { Image, Heading, VStack, Text, Spacer, Flex } from '@chakra-ui/react'
import React from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ColorModeSwitcher } from 'src/components/ColorModeSwitcher/ColorModeSwitcher'

export const Settings = () => {
  return (
    <PageLayout title={'Settings'}>
      <Flex direction="column" h="full">
        <VStack alignItems="start" mb="8">
          <Heading size="md">Color mode</Heading>
          <ColorModeSwitcher />
          <Heading size="md">Updates</Heading>
          {/* Use _blank to open default browser from Tauri */}
          <a
            href="https://github.com/qqhann/DevArms/releases"
            target="_blank"
            rel="noreferrer"
          >
            Check for updates
          </a>
        </VStack>
        <Spacer />
        <VStack>
          <Image src={'/logo512.png'} maxW={48} />
          <Text>DevArms ver 0.1.0</Text>
          <Text>&copy; 2022 Qiushi Pan</Text>
        </VStack>
      </Flex>
    </PageLayout>
  )
}
