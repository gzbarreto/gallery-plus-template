import { tv } from "tailwind-variants"

export const imagePreviewVariants = tv({
  base: `
  rounded-lg overflow-hidden 
  `,
})

export const imagePreviewimageVariants = tv({
  base: `
  w-full h-full object-cover
  `,
})

interface ImagePreviewProps extends React.ComponentProps<"img"> {
  imageClassName?: string
}

export default function ImagePreview({
  imageClassName,
  className,
  ...props
}: ImagePreviewProps) {
  return (
    <div className={imagePreviewVariants({ className })}>
      <img
        {...props}
        className={imagePreviewimageVariants({ className: imageClassName })}
      />
    </div>
  )
}
