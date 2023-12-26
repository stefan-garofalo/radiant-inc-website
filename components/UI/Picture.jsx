import Image from 'next/image'

export default function Picture({ image, ...props }) {
  return (
    <Image
      src={image.url}
      alt={image.alt}
      width={image.dimensions.width}
      height={image.dimensions.height}
      sizes="(max-width: 768px) 100vw, 50vw"
      {...props}
    />
  )
}
