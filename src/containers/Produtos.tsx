import { useSelector } from 'react-redux'

import Produto from '../components/Produto'
import * as S from './styles'
import { RootState } from '../reducers'

const ProdutosComponent = () => {
  const produtos = useSelector((state: RootState) => state.shop.produtos)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
