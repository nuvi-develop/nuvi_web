import React from "react";

import { renderEmail } from "react-html-email";

import UpdatePassword from "./UpdatePassword";

const updatePasswordHtml = renderEmail(<UpdatePassword />);

export { updatePasswordHtml };
