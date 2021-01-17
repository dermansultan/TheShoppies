import styled from "styled-components";

function MovieModal({
  handleModal,
  displayModal,
  modalContent,
  setModalContent,
  setDisplayModal,
}) {
  const modalClose = () => {
    setDisplayModal(false);
    console.log("modal was closed!");
  };

  // Styled Components

  const ModalWrapper = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
  `;

  const ModalContent = styled.div`
    padding-left: 20px;
    position: relative;
    background-color: #232733;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    max-height: 90vh;
  `;

  const ModalTitle = styled.h1`
    color: white;
  `;

  const ModalHeader = styled.h2`
    color: ${(props) => (props.primary ? "white" : "#6F6C7C")};
  `;

  const ModalP = styled.p`
    color: #6f6c7c;
    width: ${(props) => (props.bodyText ? "90%" : "")};
  `;

  const Btn = styled.button`
    color: red;
  `;

  if (displayModal) {
    console.log("modal was opened!");
    return (
      <ModalWrapper onClick={modalClose}>
        <Btn onClick={modalClose}>X</Btn>
        <ModalContent>
          <ModalTitle>{modalContent.Title}</ModalTitle>
          <ModalHeader>{modalContent.Year}</ModalHeader>
          <ModalHeader primary>Plot</ModalHeader>
          <ModalP bodyText>{modalContent.Plot}</ModalP>
          <ModalP>Director {modalContent.Director}</ModalP>
          <ModalP>Featuring {modalContent.Actors}</ModalP>
        </ModalContent>
      </ModalWrapper>
    );
  }
  // Modal is closed
  if (!displayModal) {
    return null;
  }
}

export default MovieModal;
