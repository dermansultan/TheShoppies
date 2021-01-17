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

  const ModalWrapper = styled.div``;
  const ModalContent = styled.div``;

  const ModalTitle = styled.h1`
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
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
          <h2>{modalContent.Year}</h2>
          <h2>Plot</h2>
          <p>{modalContent.Plot}</p>
          <p>Director: {modalContent.Director}</p>
          <p>Featuring {modalContent.Actors}</p>
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
