import { computed, watchEffect } from 'vue'
import type { InputAttrs } from '../../../../../types/inputs'

export default (attrs: InputAttrs) => {
  // const { focused, classes: fClasses } = useInputFocused();
  // const { hovered, classes: hClasses } = useInputHovered();
  // const { required, classes: rClasses } = useInputRequired(attrs.required);
  // const { disabled, classes: dClasses } = useInputDisabled(attrs.disabled);
  // const { classes: sClasses } = useInputStyle(attrs.customClass);

  watchEffect(() => {
    //   disabled.value = Boolean(attrs.disabled);
    //   required.value = Boolean(attrs.required);
  })

  const classes = computed(() => [
    'bt-field',
    //   "w-full",
    {
      'bt-error': Boolean((attrs.class as string)?.includes('bt-invalid'))
      // ...fClasses.value,
      // ...hClasses.value,
      // ...rClasses.value,
      // ...dClasses.value,
      // ...sClasses.value,
    }
  ])

  return {
    // required,
    // disabled,
    // focused,
    // hovered,
    classes
  }
}
