import React from 'react'
import Nav from '@components/nav';
import Link from 'next/link';
import Image from 'next/image';
import '@styles/components/header.scss';

const header = () => {
  return (
    <header>
        <Link href='/'>header</Link>
        <Nav />
    </header>
  )
}

export default header