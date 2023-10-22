import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import * as S from './styled'

function MainLayout() {
  return (
      <S.MainLayout>
        <S.Content>
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </S.Content>
      </S.MainLayout>
  )
}

export default MainLayout
