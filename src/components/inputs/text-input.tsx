import React from "react";
import { Input } from "@material-tailwind/react";

export default function TextInput(props: any) {
  return (
    <div>
      <Input
        {...props}
        color="lightBlue"
        size="regular"
        outline="true"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        error={props.error}
        success={props.success}
      />
      <span className="text-red-400 text-xs">{props.error}</span>
    </div>
  );
}
