export type TaskModalProps = {
    visible: boolean;
    cancelRequest: () => void;
    cancelEditing: () => void;
    saveChanges: () => void;
    editedTitle: string;
    setEditedTitle: (text: string) => void;
    editedNote: string;
    setEditedNote: (text: string) => void;
  };