import { useParams } from "react-router"
import Text from "../components/text"
import Container from "../components/container"
import type { Photo } from "../contexts/photos/models/photo"
import Skeleton from "../components/skeleton"
import PhotosNavigator from "../contexts/photos/components/photos-navigator"
import ImagePreview from "../components/image-preview"
import Button from "../components/button"
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable"

export default function PagePhotoDetails() {
  const { id } = useParams()
  //const apenas para teste do mock
  const isLoadginPhoto = false
  const photo = {
    id: "aaaaaa",
    title: "hello world",
    imageId: "portrait-tower.png",
    albums: [
      { id: "123", title: "hello" },
      { id: "456", title: "world" },
      { id: "789", title: "cat" },
    ],
  } as Photo

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadginPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotosNavigator />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadginPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}
          {!isLoadginPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>

          <AlbumsListSelectable
            photo={photo}
            loading={isLoadginPhoto}
            albums={[
              { id: "123", title: "hello" },
              { id: "456", title: "world" },
              { id: "789", title: "cat" },
            ]}
          />
        </div>
      </div>
    </Container>
  )
}
