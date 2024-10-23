import React from 'react'
import { Spinner } from '@/components/global/loader/spinner'


type Props = {}

function AuthLoading({}: Props) {
  return (
    <div className='flex h-screen w-full justify-center '>
        <Spinner />
    </div>
  )
}

export default AuthLoading;