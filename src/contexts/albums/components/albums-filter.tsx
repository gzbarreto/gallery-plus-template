import Button from "../../../components/button"
import Skeleton from "../../../components/skeleton"
import Text from "../../../components/text"
import type { Album } from "../models/album"
import cx from "classnames"

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
  albums: Album[]
  loading?: boolean
}

export default function AlbumsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbumsFilterProps) {
  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        {!loading ? (
          <>
            <Button size="sm" className="cursor-pointer" variant="primary">
              Todos
            </Button>

            {albums.map((album) => (
              <Button
                key={album.id}
                size="sm"
                className="cursor-pointer"
                variant="ghost"
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={`album-loading-${index}`} className="h-7 w-28"/>
          ))
        )}
      </div>
    </div>
  )
}
