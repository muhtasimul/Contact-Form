import React,{Fragment} from 'react'
import {Routes, Route} from 'react-router-dom'
import FormEnquiry from './components/FormEnquiry'
import FormResponse from './components/FormResponse'


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<FormEnquiry/>}/>
        <Route path="/formResponse" element={<FormResponse/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
