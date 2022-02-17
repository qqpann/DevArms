import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { toolPages } from './Pages'
import { Home } from './Pages/Home'
import { Settings } from './Pages/Settings'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home toolPages={toolPages} />} />
      <Route path={'/settings'} element={<Settings />} />
      {toolPages.map((page) => (
        <Route path={page.path} element={<page.Component />} key={page.path} />
      ))}
    </Routes>
  )
}

export default App
