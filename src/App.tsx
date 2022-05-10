import { useState } from 'react'
import logo from '/public/logo.svg'
import './styles/main.scss'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'

export default function App() {
  return (
    <body>
      <Header />
      <Footer />
    </body>
  )
}