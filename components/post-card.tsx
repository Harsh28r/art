"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageSquare, Share2, MoreVertical } from "lucide-react"

interface PostCardProps {
  id: string
  user: {
    id: string
    name: string
    username: string
    avatar: string
  }
  content: string
  image: string
  likes: number
  comments: number
  shares: number
  timestamp: string
}

export default function PostCard({
  id,
  user,
  content,
  image,
  likes: initialLikes,
  comments,
  shares,
  timestamp,
}: PostCardProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <Link href={`/user/${user.id}`} className="flex items-center">
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-gray-500 text-sm">@{user.username}</p>
            </div>
          </Link>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3">
          <p className="text-gray-800">{content}</p>
          {content.includes("Read More") && (
            <Link href={`/post/${id}`} className="text-primary text-sm font-medium hover:underline">
              Read More
            </Link>
          )}
        </div>
      </div>

      {image && (
        <div className="relative aspect-w-16 aspect-h-9">
          <Image src={image || "/placeholder.svg"} alt="Post image" fill className="object-cover" />
        </div>
      )}

      <div className="p-4 flex items-center space-x-6">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-1 ${liked ? "text-red-500" : "text-gray-500 hover:text-gray-700"}`}
        >
          <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
          <span>{likes}</span>
        </button>

        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <MessageSquare className="h-5 w-5" />
          <span>{comments}</span>
        </button>

        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <Share2 className="h-5 w-5" />
          <span>{shares}</span>
        </button>
      </div>
    </div>
  )
}

