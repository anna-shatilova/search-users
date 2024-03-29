import { Link } from 'react-router-dom'
import { Button } from '../../App.styles'
import * as S from './NotFound.styles'

export const NotFound = () => {
  return (
    <S.CenterBlock>
      <S.ParagraphImg src={'/not-found.png'}></S.ParagraphImg>
      <S.Title>404</S.Title>
      <S.TitleText>Страница не найдена</S.TitleText>
      <S.ParagraphText>
        Возможно, она была удалена <br /> или перенесена на другой адрес
      </S.ParagraphText>

      <Link to={`/`}>
        <Button>Вернуться на главную</Button>
      </Link>
    </S.CenterBlock>
  )
}
