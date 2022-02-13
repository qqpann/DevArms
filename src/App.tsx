import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { toolPages } from './Pages'

const App = () => {
  return (
    <Flex w="full" h="full">
      <Sidebar links={toolPages} />
      <Container maxW="8xl" p="12">
        <Routes>
          {toolPages.map((page) => (
            <Route
              path={page.path}
              element={<page.Component />}
              key={page.path}
            />
          ))}
        </Routes>
      </Container>
    </Flex>
  )
}

export default App
