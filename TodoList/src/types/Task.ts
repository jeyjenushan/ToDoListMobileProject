export type Task = {
    id: number;
    title: string;
    note: string;
    completed: boolean;
  };


  export type TaskItemProps = {
    task: Task;
    confirmDelete: (id: number) => void;
    startEditing: (task: Task) => void;
    toggleComplete: (id: number, completed: boolean) => void;
    toggleExpand: (id: number) => void;
    selectedTaskId: number | null;
    handleSocialModel: () => void;
    cancelEditing:()=>void
  };