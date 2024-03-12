import { Card } from "@material-tailwind/react";
import Link from "next/link";

export default function DeleteAccount() {
  return (
    <Card
      className="mt-6 w-full p-6 border-2 border-solid border-gray[900] shadow-none"
      placeholder=""
    >
      <h5 className="text-[17px] mb-4">Delete account</h5>
      <p className="mb-4">
        If you delete your account you’ll be permanently removing it from our
        systems - you can’t undo it.
      </p>
      <p className="pt-2">
        <Link href="#" className="text-red-400 ">
          Yes, Delete my account
        </Link>
      </p>
    </Card>
  );
}
