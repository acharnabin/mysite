import Checkbox from "@material-ui/core/Checkbox";

import React from "react";

const MyCheckBox = (props) => {
  return (
    <Checkbox
      disableRipple
      style={{
        color: "#673AB7",
      }}
      {...props}
    />
  );
};

export default MyCheckBox;
