import styled from "styled-components";

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
  width: 50%;
    justify-content: space-evenly;
    min-height: 30vh;
}
  @media (max-width: 768px) {
    width: 80%;
    min-height: 25vw;
  }
`;

const ModalDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.h1`
  color: white;
  font-size: clamp(14px, 2.5vw, 25px);
`;

const ModalHeader = styled.h2`
  color: ${(props) => (props.primary ? "white" : "#6F6C7C")};
  font-size: clamp(14px, 2.5vw, 20px);
`;

const ModalP = styled.p`
  color: #6f6c7c;
  font-size: clamp(14px, 2.5vw, 18px);
  width: ${(props) => (props.bodyText ? "90%" : "")};
`;

function MovieModal({
  handleModal,
  displayModal,
  modalContent,
  setModalContent,
  setDisplayModal,
}) {
  const modalClose = () => {
    setDisplayModal(false);
  };

  if (displayModal) {
    return (
      <ModalWrapper onClick={modalClose}>
        <ModalContent>
          <ModalDetailsWrapper>
            <ModalTitle>{modalContent.Title}</ModalTitle>
            <ModalHeader>{modalContent.Year}</ModalHeader>
          </ModalDetailsWrapper>
          <ModalDetailsWrapper>
            <ModalHeader primary>Plot</ModalHeader>
            <ModalP bodyText>{modalContent.Plot}</ModalP>
          </ModalDetailsWrapper>
          <ModalDetailsWrapper>
            <ModalP>Director {modalContent.Director}</ModalP>
            <ModalP>Featuring {modalContent.Actors}</ModalP>
          </ModalDetailsWrapper>
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
