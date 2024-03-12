import Image from "next/image";

export default function Banner() {
  return (
    <div className="mt-2 flex items-center xl:h-36 mb-4 rounded bg-[#008B5D] p-8">
      <Image
        className="hidden lg:block tw-object-cover tw-object-center mx-4"
        src="/images/banner-image.png"
        alt="/images/banner-image.png"
        width={72}
        height={72}
        priority={true}
      />
      <div className="text-white">
        <h1 className="text-[24px] font-[gilroy-semibold]">Premium Account</h1>
        <p className="text-[15px]">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
}
