import Container from "../components/container"
import AlbumsFilter from "../contexts/albums/components/albums-filter"
import PhotosList from "../contexts/photos/components/photos-list"

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        // loading
        albums={[
          { id: "123", title: "hello" },
          { id: "456", title: "world" },
          { id: "789", title: "cat" },
        ]}
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
