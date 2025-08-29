import { Modal, Button, Placeholder } from 'rsuite';


const deleteModalComponent = ({handleClose,modalIsOpen}:{handleClose:()=>void,modalIsOpen:boolean}) => {



  return (
    <>
    
      <Modal  keyboard={false} backdrop={"static"} open={modalIsOpen} onClose={handleClose} >
        <Modal.Header>
          <Modal.Title>اعلان حذف شود؟</Modal.Title>
        </Modal.Header>
<Modal.Body/>
        <Modal.Footer className=' flex gap-5'>
          <Button onClick={handleClose} appearance="primary">
            حذف
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            بسته
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default deleteModalComponent