import Image from "next/image"
import Link from "next/link"

interface ArtistCardProps {
  id: string
  name: string
  username: string
  image: string
}

export default function ArtistCard({ id, name, username, image }: ArtistCardProps) {
  return (
    <Link href={`/artist/${id}`} className="block group">
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white mr-2">
              <Image src={image || "/placeholder.svg"} alt={name} width={32} height={32} className="object-cover" />
            </div>
            <div>
              <h3 className="text-white font-medium">{name}</h3>
              <p className="text-white/80 text-sm">@{username}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

