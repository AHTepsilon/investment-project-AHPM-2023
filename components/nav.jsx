"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

import '@styles/components/nav.scss'


const nav = () => {
  const userIsLoggedIn = false;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setProviders();
  }, [])

  return (
    <nav className = 'nav'>
      <ul className = 'nav-ul'>
        <li className = 'nav-ul-li'><Link href='/access/signUp'>Sign Up</Link></li>
        <li className = 'nav-ul-li'><Link href='/access/logIn'>Log In</Link></li>
      </ul>
    </nav>
  )
}

export default nav