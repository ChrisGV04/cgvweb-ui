import type { TransitionProps } from 'vue';

export type UiTransition = {
  enterActive?: string;
  enterFrom?: string;
  enterTo?: string;
  leaveActive?: string;
  leaveFrom?: string;
  leaveTo?: string;
};

/** Converts our simplified transition props into <Transition> props */
export function uiToTransitionProps(transition: UiTransition): TransitionProps {
  return {
    enterActiveClass: transition.enterActive,
    enterFromClass: transition.enterFrom,
    enterToClass: transition.enterTo,
    leaveActiveClass: transition.leaveActive,
    leaveFromClass: transition.leaveFrom,
    leaveToClass: transition.leaveTo,
  };
}
