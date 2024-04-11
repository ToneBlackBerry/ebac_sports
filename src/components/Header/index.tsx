import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const carrinho = useSelector((state: RootState) => state.shop.carrinho)
  const favoritos = useSelector((state: RootState) => state.shop.favoritos)

  const valorTotal = carrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
