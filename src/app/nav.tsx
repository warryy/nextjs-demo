'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const navList = [
    {name: '首页', href: '/'},
    {name: '关于', href: '/about'},
    // {name: '联系', href: '/contact'},
    {name: '仪表盘', href: '/dashboard'},
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <div className="flex justify-between py-2 px-4 container mx-auto shadow-sm border">
        <div>我是标题</div>
        <div className="flex gap-2">
            {navList.map(item => (
                <Link key={item.name} href={item.href} className={pathname === item.href ? 'text-blue-500 font-bold' : ''}>{item.name}</Link>
            ))}
        </div>
    </div>

  )
}
