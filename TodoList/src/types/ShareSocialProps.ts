import { Task } from "./Task";

export interface ShareSocialProps {
  visible: boolean;
  closeModal: () => void;
  onShare?: (platform: string, taskId: number | null, tasks: any[]) => void;
  selectedTaskId: number | null;
  tasks: Task[]
}