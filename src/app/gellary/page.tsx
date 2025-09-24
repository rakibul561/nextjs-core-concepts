import Image from 'next/image'
import image from '../../../public/next js image.png'
 
export default function Page() {
  return (
    <Image
    className=' mx-auto mt-20'
      src={image}
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}