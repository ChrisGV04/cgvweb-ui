type TransitionProps = {
  enter: string;
  enterFrom: string;
  enterTo: string;
  leave: string;
  leaveFrom: string;
  leaveTo: string;
};

export interface UiDialogConfig {
  wrapper: string;
  inner: string;
  container: string;
  padding: string;
  base: string;
  overlay: {
    base: string;
    background: string;
    transition: TransitionProps;
  };
  background: string;
  ring: string;
  rounded: string;
  shadow: string;
  width: string;
  height: string;
  transition: TransitionProps;
}
