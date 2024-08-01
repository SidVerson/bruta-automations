import clsx from 'clsx'
import { CreditCard } from 'lucide-react'
import React from 'react'

type Props = {
  selected: boolean
}

const Payment = ({ selected }: Props) => {
  return (
    <CreditCard/>
  )
}

export default Payment
