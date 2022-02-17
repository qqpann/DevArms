import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { toolPages } from './Pages'
import { Home } from './Pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home toolPages={toolPages} />} />
      {toolPages.map((page) => (
        <Route path={page.path} element={<page.Component />} key={page.path} />
      ))}
    </Routes>
  )
}

export default App
