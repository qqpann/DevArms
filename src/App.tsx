import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { toolPages } from './Pages'

function App() {
  return (
    <div className="App">
      <nav>
        {toolPages.map((page) => (
          <Link to={page.path} key={page.path}>
            {page.name}
          </Link>
        ))}
      </nav>
      <Routes>
        {toolPages.map((page) => (
          <Route
            path={page.path}
            element={<page.Component />}
            key={page.path}
          />
        ))}
      </Routes>
    </div>
  )
}

export default App
