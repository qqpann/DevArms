import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ToolCard } from 'src/components/ToolCard/ToolCard'

import { ToolPage } from '.'

export const Home = ({ toolPages }: { toolPages: ToolPage[] }) => {
  return (
    <PageLayout title={'Home'}>
      <SimpleGrid minChildWidth={140} spacing={2}>
        {toolPages.map((page) => (
          <ToolCard page={page} key={page.path} />
        ))}
      </SimpleGrid>
    </PageLayout>
  )
}
