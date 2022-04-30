import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRadioSmoke() {
  const [value, setValue] = React.useState('this')

  return (
    <Form>
      {/* <Form.Field>
        Selected value: <b>{value}</b>
      </Form.Field> */}
      <Form.Field>
        <Checkbox
          radio
          label='Non-Smoker'
          name='checkboxRadioGroup'
          value='this'
          checked={value === 'this'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Ex-Smoker'
          name='checkboxRadioGroup'
          value='that'
          checked={value === 'that'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Occasional Smoker'
          name='checkboxRadioGroup'
          value='tep'
          checked={value === 'tep'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Smoker'
          name='checkboxRadioGroup'
          value='yep'
          checked={value === 'yep'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
    </Form>
  )
}

export default CheckboxExampleRadioSmoke
