import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { toolPages } from './Pages'

const App = () => {
  return (
    <Flex w="full" h="full" id="abc">
      <Sidebar links={toolPages} />
      <Routes>
        {toolPages.map((page) => (
          <Route
            path={page.path}
            element={<page.Component />}
            key={page.path}
          />
        ))}
      </Routes>
    </Flex>
  )
}

export default App
