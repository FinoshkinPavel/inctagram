import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import s from './auth-layout.module.scss'

import { Header } from '@/src/components/Header/Header'

export const AuthLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.main}>{children}</div>
    </div>
  )
}

export const getAuthLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>
