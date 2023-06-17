"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-3 flex-center">
                <Image 
                    src="/assets/images/logosinfondo.svg"
                    alt="Dazaudio Logo"
                    width={81}
                    height={54}
                    className="object-contain"
                />
                <p className="logo_text mt-4">Dazaudio</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-item" className="black_btn">
                            Crear Mercancía
                        </Link>

                        <button type="button" onClick={signOut} className="outline_btn">
                            Cerrar Sesión
                        </button>

                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider)=>(
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Iniciar Sesión
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation  */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Mi Perfil
                                </Link>
                                <Link
                                    href="/create-item"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Crear Mercancía
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider)=>(
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Iniciar Sesión
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav