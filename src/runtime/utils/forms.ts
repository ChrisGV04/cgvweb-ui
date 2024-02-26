import UiFormField from '#ui/components/forms/FormField.vue';
import type { FormFieldProps } from '#ui/types';

export const getUiFormFieldProps = (props: any): FormFieldProps => {
  const keys = Object.keys(UiFormField.props);

  return keys.reduce((acc, key) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {}) as FormFieldProps;
};
