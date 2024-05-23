import type { FormFieldProps } from '#ui/types';

import UiFormField from '#ui/components/forms/FormField.vue';

export const getUiFormFieldProps = (props: any): FormFieldProps => {
  const keys = Object.keys(UiFormField.props);

  return keys.reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {}) as FormFieldProps;
};
