import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
export default function UserAccount() {
  return (
    <div className="flex w-full items-center px-5 py-4 border-black-900 border-solid border-t-2 bg-white">
      <div className="w-[32px] h-[32px] rounded-full overflow-hidden ">
        <Image
          width={32}
          height={32}
          src="/images/user.png"
          alt="Customer Photo"
          className="object-cover w-full h-full "
        />
      </div>

      <p className="ml-2">Carla</p>
      <FontAwesomeIcon width={16} icon={fas.faGear} className="ml-auto" />
    </div>
  );
}
