import Container from "../components/container"
import PhotoWidget from "../contexts/photos/components/photo-widget"
import type { Photo } from "../contexts/photos/models/photo"

export default function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "aaaaaa",
            title: "hello world",
            imageId: "portrait-tower.png",
            albums: [
              { id: "123", title: "hello" },
              { id: "456", title: "world" },
              { id: "789", title: "cat" },
            ],
          }}
        />

        <PhotoWidget photo={{} as Photo} loading />
      </div>
    </Container>
  )
}
