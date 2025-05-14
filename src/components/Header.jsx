// src/components/Header.jsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faBell,
    faUserGear,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Mutual Funds', href: '/mutual-funds' },
    { label: 'Tools', href: '/tools' },
    { label: 'Transactions', href: '/transactions' },
]

export default function Header() {
    const { pathname } = useRouter()

    return (
        <header className="header">
            <div className="logo">
                <img src="/assets/logo.png" alt="logo" />
            </div>
            <nav>
                {navItems.map(item => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={pathname === item.href ? 'active' : ''}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className="icons">
                <button className="btn-primary-btn serch-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button className="btn-primary-btn">
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="btn-primary-btn">
                    <FontAwesomeIcon icon={faUserGear} />
                </button>
                <button className="btn-primary-btn">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
            </div>
        </header>
    )
}
