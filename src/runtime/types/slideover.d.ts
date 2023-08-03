export interface UiSlideoverConfig {
  wrapper: string;
  inner: string;
  container: string;
  padding: string;
  base: string;
  background: string;
  ring: string;
  rounded: string;
  shadow: string;
  width: string;
  overlay: {
    base: string;
    background: string;
    transition: {
      enter: string;
      enterFrom: string;
      enterTo: string;
      leave: string;
      leaveFrom: string;
      leaveTo: string;
    };
  };
  transition: {
    enter: string;
    leave: string;
  };
}
