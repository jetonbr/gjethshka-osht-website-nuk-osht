import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRadioHouse() {
  const [value, setValue] = React.useState('this')

  return (
    <Form>
      {/* <Form.Field>
        Selected value: <b>{value}</b>
      </Form.Field> */}
      <Form.Field>
        <Checkbox
          radio
          label='No Kids'
          name='checkboxRadioGroup'
          value='this'
          checked={value === 'this'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Living at home'
          name='checkboxRadioGroup'
          value='that'
          checked={value === 'that'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Don`t live in my household'
          name='checkboxRadioGroup'
          value='val'
          checked={value === 'val'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
    </Form>
  )
}

export default CheckboxExampleRadioHouse
