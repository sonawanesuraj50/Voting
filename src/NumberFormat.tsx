import { useState } from "react";
import NumberFormat from "react-number-format";

const ParseNumber = (props: any) => {
  const [number, setNumber] = useState("");
  return (
    <NumberFormat
      isNumericString={true}
      value={number}
      onValueChange={(val: any) => setNumber(val.value)}
      decimalScale={2}
      allowNegative={false}
      {...props}
    />
  );
};

export default ParseNumber;
