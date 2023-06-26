import { useState } from "react";

const useShowModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal);
  };
  return {
    isShowModal,
    setIsShowModal,
    handleClickShowModal,
  };
};

export default useShowModal;
