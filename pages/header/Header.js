import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
const router = useRouter();
    return (
        <header>
            <nav>
                <ul>
                    <li className={(router.pathname === '/') ? 'active': 'ok'}><Link href="/"> Home </Link></li>
                    <li className={(router.pathname === '/todo-items') ? 'active': 'ok'}><Link href="/todo-items"> TodoList </Link> </li>
                    <li className={(router.pathname === '/about') ? 'active': 'ok'}><Link href="/about"> About </Link> </li>
                    <li className={(router.pathname === '/users') ? 'active': 'ok'}><Link href="/users"> Users </Link> </li>
                    <li className={(router.pathname === '/blogs') ? 'active': 'ok'}><Link href="/blogs"> Blogs </Link> </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header
