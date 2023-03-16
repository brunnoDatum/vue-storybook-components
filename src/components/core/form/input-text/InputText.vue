<template>
  <div :class="rootClasses">
    <label v-if="$slots.label">
      <slot name="label" />
    </label>

    <slot v-if="$slots.startAdorment" name="startAdorment" />

    <input
      :class="['bt-input-text bt-component', { 'bt-filled': filled }]"
      :value="modelValue"
      @input="onInput"
      v-bind="$attrs"
      ref="input"
    />

    <slot v-if="$slots.endAdorment" name="endAdorment" />

    <span v-if="$slots.helperText" class="caption">
      <slot name="helperText" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots, ref } from 'vue'
import { useFocus } from '@vueuse/core'
import { useInputState } from './../composables'

// Define Events
const emit = defineEmits(['update:modelValue'])

// Define Props
const props = defineProps({
  modelValue: {
    type: [String, Number, Object]
  },
  autofocus: {
    type: Boolean,
    default: false
  }
})

// Declare component attrs and slots
const attrs = useAttrs()
const slots = useSlots()

// Define User Input Event
const onInput = (event: Event) => {
  emit('update:modelValue', (event?.target as HTMLInputElement)?.value)
}

// Define computed property for defining if input is filled
const filled = computed(() => {
  return props.modelValue != null && props.modelValue.toString().length > 0
})

// Define input ref for setting autoFocus
const input = ref()
useFocus(input, { initialValue: props.autofocus })

// Setting reactive classes based on states
const { classes } = useInputState(attrs)

const rootClasses = computed(() => [
  ...classes.value,
  {
    'bt-input-icon-left': slots.startAdorment,
    'bt-input-icon-right': slots.endAdorment
  }
])
</script>

<script lang="ts">
export default {
  name: 'InputText',
  inheritAttrs: false
}
</script>

<style scoped lang="scss">
/* InputGroup */
/* Floating Label */
.bt-input-text {
  margin: 0;
}
.bt-fluid {
  .bt-input-text {
    width: 100%;
  }
  .bt-input-group {
    .bt-input-text {
      flex: 1 1 auto;
      width: 1%;
    }
    .bt-input {
      flex: 1 1 auto;
      width: 1%;
    }
  }
  .bt-input-icon-left {
    display: block;
    width: 100%;
  }
  .bt-input-icon-right {
    display: block;
    width: 100%;
  }
}
.bt-input-group {
  display: flex;
  align-items: stretch;
  width: 100%;
  .bt-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
  }
  .bt-input-text {
    flex: 1 1 auto;
    width: 1%;
  }
  .bt-input-wrapper {
    flex: 1 1 auto;
    width: 1%;
  }
}
.bt-input-group-addon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bt-float-label {
  display: block;
  position: relative;
  label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
  }
  textarea {
    ~ {
      label {
        top: 1rem;
      }
    }
    &:focus {
      ~ {
        label {
          top: -0.75rem;
          font-size: 12px;
        }
      }
    }
  }
  input {
    &:focus {
      ~ {
        label {
          top: -0.75rem;
          font-size: 12px;
        }
      }
      &::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
      }
    }
    &::placeholder {
      opacity: 0;
      transition-property: all;
      transition-timing-function: ease;
    }
  }
  input.bt-filled {
    ~ {
      label {
        top: -0.75rem;
        font-size: 12px;
      }
    }
  }
  textarea.bt-filled {
    ~ {
      label {
        top: -0.75rem;
        font-size: 12px;
      }
    }
  }
  .bt-input-wrapper-focus {
    ~ {
      label {
        top: -0.75rem;
        font-size: 12px;
      }
    }
  }
  .bt-input-wrapper-filled {
    ~ {
      label {
        top: -0.75rem;
        font-size: 12px;
      }
    }
  }
  .input {
    &:-webkit-autofill {
      ~ {
        label {
          top: -20px;
          font-size: 12px;
        }
      }
    }
  }
  .bt-placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
  }
  .bt-input-text {
    &::placeholder {
      opacity: 0;
      transition-property: all;
      transition-timing-function: ease;
    }
    &:focus {
      &::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
      }
    }
  }
  .bt-focus {
    .bt-placeholder {
      opacity: 1;
      transition-property: all;
      transition-timing-function: ease;
    }
  }
}
.bt-input-icon-left {
  position: relative;
  display: inline-block;
  > i {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
}
.bt-input-icon-right {
  position: relative;
  display: inline-block;
  > i {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
  }
}
</style>
