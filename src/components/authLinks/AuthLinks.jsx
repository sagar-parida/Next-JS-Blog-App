"use client"
import React, { useState } from 'react'
import styles from './authlinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const status = "notauthenticated"
    return (
        <div className={styles.container}>
            {
                status === "notauthenticated"
                    ? <Link href="/" className={styles.link}>Login</Link>
                    : <>
                        <Link href="/" className={styles.link}>Write</Link>
                        <Link href="/" className={styles.link}>Logout</Link>
                    </>
            }
            <div className={styles.burger} onClick={() => setOpen(prev => !prev)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                open && (
                    <div className={styles.responsiveMenu}>
                        <Link href="/" >Home</Link>
                        <Link href="/"  >Contact</Link>
                        <Link href="/" >About</Link>
                    </div>
                )
            }
        </div>
    )
}

export default AuthLinks