import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { setProdutos } from './features/shop/shopSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((data) => dispatch(setProdutos(data)))
      .catch((error) =>
        console.error('Houve um erro ao buscar os produtos:', error)
      )
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
