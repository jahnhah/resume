import { Checkbox } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

export default function ShowProfile() {
  const [checked, setChecked] = useState(true);
  const onChange = () => {
    setChecked((checked) => !checked);
    console.log("checked", checked);
  };
  const label = (
    <span className="ml-4">
      Show my profile to serious employers on{" "}
      <Link href="#" className="text-blue-500">
        hirethesbest.io
      </Link>{" "}
      for free
    </span>
  );
  return (
    <Checkbox
      className="m-[-10px]"
      label={label}
      checked={checked}
      onChange={onChange}
      color="light-blue"
      id="checkbox"
      crossOrigin={undefined}
    />
  );
}
