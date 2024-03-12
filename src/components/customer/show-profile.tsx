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
    <span>
      Show my profile to serious employers on{" "}
      <Link href="#" className="text-blue-500">
        hirethesbest.io
      </Link>{" "}
      for free
    </span>
  );
  return (
    <Checkbox
      label={label}
      checked={checked}
      onChange={onChange}
      color="light-blue"
      id="checkbox"
      crossOrigin={undefined}
    />
  );
}
