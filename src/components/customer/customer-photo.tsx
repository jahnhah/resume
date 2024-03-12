import Image from "next/image";
export interface CustomerPhotoProps {
  url: string;
}
export default function CustomerPhoto({ url }: CustomerPhotoProps) {
  return (
    <div className="w-[144px] h-[144px] rounded-full overflow-hidden ">
      <Image
        width={144}
        height={144}
        src={url}
        alt="Customer Photo"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
