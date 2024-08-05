import React, { useState } from "react";
import { Tooltip } from "reactstrap";

function TooltipComponent(args, children, message) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      {...children}
      <Tooltip
        {...args}
        isOpen={tooltipOpen}
        target="TooltipExample"
        toggle={toggle}
      >
        {message}
      </Tooltip>
    </div>
  );
}

export default TooltipComponent;
