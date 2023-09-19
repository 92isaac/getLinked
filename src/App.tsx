import { lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoadingSpinner from './utils/LoadingSpinner';

const TimeLine =lazy(()=>import('./routes/Timeline'));



function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
    <Routes>
      <Route path='/' element={<TimeLine />} />
    </Routes>
    </Suspense>
  )
}

export default App
