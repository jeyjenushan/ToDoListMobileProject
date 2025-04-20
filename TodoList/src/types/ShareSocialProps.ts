export type ShareSocialProps = {
    visible: boolean;
    closeModal: () => void;
    onIconPress?: (iconId: string) => void; // Optional handler for icon presses
  };