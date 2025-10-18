import Container from "../components/container"
import AlbumsFilter from "../contexts/albums/components/albums-filter"
import useAlbums from "../contexts/albums/hooks/use-albums"
import PhotosList from "../contexts/photos/components/photos-list"

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums()

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: "aaaaaa",
            title: "hello world",
            imageId: "portrait-tower.png",
            albums: [
              { id: "123", title: "hello" },
              { id: "456", title: "world" },
              { id: "789", title: "cat" },
            ],
          },

          {
            id: "12345",
            title: "foto test",
            imageId: "portrait-tower.png",
            albums: [
              { id: "123", title: "cat" },
              { id: "456", title: "tower" },
              { id: "789", title: "azul" },
            ],
          },
        ]}
      />
    </Container>
  )
}
