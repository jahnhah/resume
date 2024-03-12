import Link from "next/link";

export default function Footer() {
  return (
    <div className="pl-64">
      <hr className="mt-5 mx-12 h-[2px] bg-gray-200" />
      <div className="text-gray-500 flex align-center my-5 px-12 text-[14px]">
        <Link href="#" className="pr-8">
          Terms & Conditions
        </Link>
        <Link href="#" className="pr-8">
          Privacy Policy
        </Link>
        <Link href="#" className="pr-8">
          FAQ
        </Link>
        <Link href="#" className="pr-8">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
