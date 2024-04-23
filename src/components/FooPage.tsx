import * as React from 'react';
import { Button, Flex, Modal, ModalVariant } from '@patternfly/react-core';

type CreateProjectModalProps = { closeModal: () => void };
const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal isOpen variant={ModalVariant.medium} onClose={closeModal}>
      <Flex direction={{ default: 'column' }}>This is my modal.</Flex>
      <div>
        <Button key="confirm" variant="primary">
          Confirm
        </Button>
        <Button key="cancel" variant="link">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;