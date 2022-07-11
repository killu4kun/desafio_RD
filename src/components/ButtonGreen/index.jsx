import React from 'react'
import { GreenButton } from './styles'

export default function PrimaryButton({text,mT}) {
  return (
    <GreenButton mT={mT} >
        {text}
    </GreenButton>
  )
}
