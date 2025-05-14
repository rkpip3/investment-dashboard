// src/components/Sidebar.jsx
import Link from 'next/link'
import { useRouter } from 'next/router'

const sideTabs = [
    { label: 'PHA', href: '/pha' },
    { label: 'Fund Analysis', href: '/fund-analysis' },
    { label: 'Holdings', href: '/holdings' },
    { label: 'Transactions', href: '/transactions' }
]

export default function Sidebar() {
    const { pathname } = useRouter()

    return (
        <aside>
            {sideTabs.map(tab => (
                <Link
                    key={tab.href}
                    href={tab.href}
                    className={`tab ${pathname === tab.href ? 'active' : ''}`}
                >
                    {tab.label}
                </Link>
            ))}
        </aside>
    )
}
