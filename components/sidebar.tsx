"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Home, Bell, ShoppingBag, MessageSquare, Wallet, Ticket, User, Settings, LogOut, Menu } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  const { logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/login")
    } catch (error) {
      console.error("Failed to log out", error)
    }
  }

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Shop", href: "/shop", icon: ShoppingBag },
    { name: "Conversation", href: "/conversation", icon: MessageSquare },
    { name: "Wallet", href: "/wallet", icon: Wallet },
    { name: "Subscription", href: "/subscription", icon: Ticket },
    { name: "My Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="relative">
      {/* Hamburger button for mobile only */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 mt-2">
        {isOpen ? <span className="h-6 w-6">✖</span> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar for mobile */}
      {isOpen && (
        <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed z-50 lg:hidden">
          <div className="p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center justify-center">
              <span className="text-xl font-bold">LOGO</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2 px-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 text-sm rounded-md ${
                        isActive ? "text-primary border-l-4 border-primary bg-primary/5" : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="p-12 border-t border-gray-200">
            {isOpen && (
              <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-full">
                <LogOut className="h-5 w-5 mr-3" />
                Log out
              </button>
            )}
            <div className="mt-4 text-xs text-gray-500 text-center">
              © 2023 Design Studio
              <div className="mt-1">Powered by Next.js</div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex w-64 h-screen bg-white border-r border-gray-200 flex-col">
        <div className="p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center justify-center">
            <span className="text-xl font-bold">LOGO</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 text-sm rounded-md ${
                      isActive ? "text-primary border-l-4 border-primary bg-primary/5" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 w-full"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Log out
          </button>
          <div className="mt-4 text-xs text-gray-500 text-center">
            © 2023 Design Studio
            <div className="mt-1">Powered by Next.js</div>
          </div>
        </div>
      </div>
    </div>
  )
}


