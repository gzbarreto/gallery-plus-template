import Button from "../../../components/button"
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../../components/dialog"
import InputText from "../../../components/input-text"
import Text from "../../../components/text"
import type { Photo } from "../../photos/models/photo"
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react"
import Skeleton from "../../../components/skeleton"
import ImagePreview from "../../../components/image-preview"

interface AlbumNewDialogProps {
  trigger: React.ReactNode
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  //TODO: mock de dados
  const photos: Photo[] = [
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
  ]
  const isLoadingPhotos = false

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar Álbum</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" />

          <div className="space-y-3">
            <Text as="div" variant="label-small" className="mb-3">
              Fotos cadastradas
            </Text>

            {!isLoadingPhotos && photos.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                  <ImagePreview
                    key={photo.id}
                    src={`/images/${photo.imageId}`}
                    title={photo.title}
                    className="w-20 h-20 rounded"
                  />
                ))}
              </div>
            )}

            {isLoadingPhotos && (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={`photo-loading-${index}`}
                    className="w-20 h-20 rounded"
                  />
                ))}
              </div>
            )}

            {!isLoadingPhotos && photos.length == 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <SelectCheckboxIllustration />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto disponível para seleção
                </Text>
              </div>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Criar álbum</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
