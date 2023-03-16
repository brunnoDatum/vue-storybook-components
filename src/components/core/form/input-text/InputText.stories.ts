import { ref } from 'vue'
import { InputText } from '.'

export default {
  component: InputText,
  title: 'Core/Form/Input Text',
  args: {
    placeholder: 'Input Text',
    disabled: false,
    required: false,
    label: 'Label',
    helperText: 'Helper/Validation Text'
    // startAdorment: `<i class="pi pi-user"></i>`,
    // endAdorment: `<i class="pi pi-chevron-down"></i>`
  }
}

const Template = (args: {
  label: string
  startAdorment: any
  endAdorment: any
  helperText: string
}) => ({
  components: { InputText },
  setup() {
    const value = ref('')
    return {
      args,
      value
    }
  },
  template: `
      <InputText v-bind="args" v-model="value">
      </InputText>
    `
})
export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}
