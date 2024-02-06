import styles from "../styles/Note.module.css";
import styleUtils from "../styles/utils.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";
import { formatDate } from "../utils/formatDate";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

interface NoteProps {
  note: NoteModel,
  onNoteClicked: (note: NoteModel) => void,
  onDeleteNoteClicked: (note: NoteModel) => void,
  className?: string,
}

const Note = ({ note, onNoteClicked, onDeleteNoteClicked, className }: NoteProps) => {

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShowConfirmModal = () => setShowConfirmModal(true);
  const handleCloseConfirmModal = () => setShowConfirmModal(false);

  const handleConfirmDelete = () => {
    onDeleteNoteClicked(note);
    handleCloseConfirmModal();
  }

  const {
    title,
    text,
    createdAt,
    updatedAt
  } = note;

  let createdUpdatedText: string;
  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated: " + formatDate(updatedAt);
  } else {
    createdUpdatedText = "Created: " + formatDate(createdAt);
  }

  return (
    <>
      <Card
        className={`${styles.noteCard} ${className}`}
        onClick={() => onNoteClicked(note)}>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styleUtils.flexCenter}>
            {title}
            <MdDelete
              className="text-muted ms-auto"
              onClick={(e) => {
                e.stopPropagation();
                handleShowConfirmModal();
              }}
            />
          </Card.Title>
          <Card.Text className={styles.cardText}>
            {text}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {createdUpdatedText}
        </Card.Footer>
      </Card>

      <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmModal}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default Note;
