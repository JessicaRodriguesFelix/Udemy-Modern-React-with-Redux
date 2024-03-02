import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        lobortis eros, non congue nisl. Donec aliquet felis nec laoreet
        convallis. Sed libero tortor, fermentum id nulla quis, sollicitudin
        varius tellus. Donec maximus dignissim ante, in maximus eros pharetra a.
        Nulla facilisi. Fusce sollicitudin sit amet lectus ut laoreet. Cras ut
        convallis nisl. Maecenas mollis tincidunt nulla imperdiet eleifend. In
        hac habitasse platea dictumst. Sed sagittis ornare quam efficitur
        porttitor. Proin sit amet libero ac enim fringilla porta. Ut orci urna,
        ultricies ac sodales nec, pretium consectetur leo. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed sit amet lobortis eros, non
        congue nisl. Donec aliquet felis nec laoreet convallis. Sed libero
        tortor, fermentum id nulla quis, sollicitudin varius tellus. Donec
        maximus dignissim ante, in maximus eros pharetra.
      </p>
    </div>
  );
}

export default ModalPage;
