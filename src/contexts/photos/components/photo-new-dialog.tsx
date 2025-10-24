import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../../components/dialog"
import Button from "../../../components/button"
import InputText from "../../../components/input-text"
import Alert from "../../../components/alert"
import InputSingleFile from "../../../components/input-single-file"
import ImagePreview from "../../../components/image-preview"
import Text from "../../../components/text"
import Skeleton from "../../../components/skeleton"
import { useForm } from "react-hook-form"
import useAlbums from "../../albums/hooks/use-albums"
import { photoNewFormSchema, type PhotoNewFormSchema } from "../schemas"
import { zodResolver } from "@hookform/resolvers/zod"

interface PhotoNewDialogProps {
  trigger: React.ReactNode
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const form = useForm<PhotoNewFormSchema>({
    resolver: zodResolver(photoNewFormSchema),
  })
  const { albums, isLoadingAlbums } = useAlbums()

  const file = form.watch("file")
  const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined

  function handleSubmit(payload: PhotoNewFormSchema) {
    console.log(payload)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Adicionar Foto</DialogHeader>
          <DialogBody className="flex flex-col gap-5">
            <InputText
              error={form.formState.errors.title?.message}
              placeholder="Adicione um título"
              maxLength={255}
              {...form.register("title")}
            />
            <Alert>
              Tamanho máximo: 500MB.
              <br />
              Formatos aceitos: .jpg, .jpeg, .png.
            </Alert>

            <InputSingleFile
              error={form.formState.errors.file?.message}
              form={form}
              allowedExtensions={["png", "jpg", "jpeg"]}
              maxFileSizeInMB={50}
              replaceBy={<ImagePreview src={fileSrc} className="w-full h-56" />}
              {...form.register("file")}
            />

            <div className="space-y-3">
              <Text variant="label-small">Selecionar álbum</Text>
              <div className="flex flex-wrap gap-3">
                {!isLoadingAlbums &&
                  albums.length > 0 &&
                  albums.map((album) => (
                    <Button
                      key={album.id}
                      className="truncate"
                      variant="ghost"
                      size="sm"
                    >
                      {album.title}
                    </Button>
                  ))}

                {isLoadingAlbums &&
                  Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                      key={`album-loaging-${index}`}
                      className="w-20h-7"
                    />
                  ))}
              </div>
            </div>
          </DialogBody>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
