import React from "react";
import { useDispatch } from "react-redux";

import Modal from "./index";
import { actions } from "data";

export default function ApplyRegister() {
  const dispatch = useDispatch();
  return (
    <Modal
      modalInfo={{
        onClick: () => {
          dispatch(actions.modal.clearModal());
          dispatch(actions.user.toggleAuthMode("login"));
        },
        contents: (
          <>
            신청되었습니다. <br></br>확인후 관리자로 등록 됩니다.
          </>
        ),
        buttonName: "확인"
      }}
    />
  );
}
