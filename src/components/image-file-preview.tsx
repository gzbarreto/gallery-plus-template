import { tv } from "tailwind-variants"

export const imageFilePreviewVariants = tv({
  base: `
  rounded-lg overflow-hidden 
  `,
})

export const imageFilePreviewimageVariants = tv({
  base: `
  w-full h-full object-cover
  `,
})

interface ImageFilePreviewProps extends React.ComponentProps<"img"> {
  imageClassName?: string
}

export default function ImageFilePreview({
  imageClassName,
  className,
  ...props
}: ImageFilePreviewProps) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img
        {...props}
        className={imageFilePreviewimageVariants({ className: imageClassName })}
      />
    </div>
  )
}
