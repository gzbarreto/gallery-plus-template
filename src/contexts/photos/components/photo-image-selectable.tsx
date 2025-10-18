import { tv } from "tailwind-variants"
import ImagePreview from "../../../components/image-preview"
import { useState } from "react"
import InputCheckbox from "../../../components/input-checkbox"

export const PhotoImageSelectableVariants = tv({
  base: "cursor-pointer relative rounded-lg",
  variants: {
    selected: {
      true: "outline-2 outline-accent-brand",
    },
  },
})

interface PhotoImageSelectableProps
  extends React.ComponentProps<typeof ImagePreview> {
  selected?: boolean
  onSelectImage?: (selected: boolean) => void
}

export default function PhotoImageSelectable({
  onSelectImage,
  className,
  ...props
}: PhotoImageSelectableProps) {
  const [isSelected, setIsSelected] = useState(false)

  function handleSelect() {
    const newValue = !isSelected
    setIsSelected(newValue)
    onSelectImage?.(newValue)
  }

  return (
    //a label permite que todo o componente execute a função do checkbox
    <label
      className={PhotoImageSelectableVariants({
        className,
        selected: isSelected,
      })}
    >
      <InputCheckbox
        size="sm"
        checked={isSelected}
        onChange={handleSelect}
        className="absolute top-1 left-1"
      />
      <ImagePreview {...props} />
    </label>
  )
}
