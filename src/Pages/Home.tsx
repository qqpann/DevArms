import React from 'react'
import { PageLayout } from 'src/Layouts/PageLayout'
import { ToolCard } from 'src/components/ToolCard/ToolCard'

import { ToolPage } from '.'

export const Home = ({ toolPages }: { toolPages: ToolPage[] }) => {
  return (
    <PageLayout title={'Home'}>
      {toolPages.map((page) => (
        <ToolCard page={page} key={page.path} />
      ))}
    </PageLayout>
  )
}
