import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onOpenChange(): void;
  modalTitle: string;
  videoURL: string;
};

export default function VideoModal({
  isOpen,
  onOpenChange,
  modalTitle,
  videoURL,
}: Props) {
  return (
    <Modal
      size="5xl"
      placement="center"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {modalTitle}
            </ModalHeader>
            <ModalBody>
              <video autoPlay controls muted preload="auto">
                <source src={videoURL} type="video/mp4" />
              </video>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
