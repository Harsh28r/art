"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import PostCard from "@/components/post-card"
import ArtistCard from "@/components/artist-card"

// Sample data
const posts = [
  {
    id: "1",
    user: {
      id: "101",
      name: "Lara Leones",
      username: "theartist1",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IkwMvl1Bu0vbj5hehdD4FyY7y2dgPa.png",
    likes: 98,
    comments: 84,
    shares: 72,
    timestamp: "2h ago",
  },
  {
    id: "2",
    user: {
      id: "102",
      name: "Thomas J",
      username: "streetartmaster",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More",
    image: "/placeholder.svg?height=400&width=600",
    likes: 45,
    comments: 12,
    shares: 8,
    timestamp: "4h ago",
  },
]

const artists = [
  {
    id: "101",
    name: "James Edward",
    username: "jamesedward",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "102",
    name: "Carla Smith",
    username: "carlasmith",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "103",
    name: "Elaine Jones",
    username: "elainejones",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "104",
    name: "Jessica Williams",
    username: "jessicawilliams",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("Artists")

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile, shown on larger screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 transition duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main feed */}
              <div className="lg:col-span-2">
                {posts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>

              {/* Right sidebar */}
              <div className="space-y-6 lg:block hidden">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="flex border-b border-gray-200">
                    <button
                      className={`flex-1 py-3 text-center font-medium ${activeTab === "Artists" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
                      onClick={() => setActiveTab("Artists")}
                    >
                      Artists
                    </button>
                    <button
                      className={`flex-1 py-3 text-center font-medium ${activeTab === "Photographers" ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}
                      onClick={() => setActiveTab("Photographers")}
                    >
                      Photographer
                    </button>
                  </div>

                  <div className="p-4 space-y-4">
                    {artists.map((artist) => (
                      <ArtistCard key={artist.id} {...artist} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

