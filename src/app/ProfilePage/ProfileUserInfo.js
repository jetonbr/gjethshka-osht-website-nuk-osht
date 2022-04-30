import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRadioGroup() {
  const [value, setValue] = React.useState('this')

  return (
    <Form>
      {/* <Form.Field>
        Selected value: <b>{value}</b>
      </Form.Field> */}
      <Form.Field>
        <Checkbox
          radio
          label='Something serious'
          name='checkboxRadioGroup'
          value='this'
          checked={value === 'this'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Lets see what happens'
          name='checkboxRadioGroup'
          value='that'
          checked={value === 'that'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='New friends or chats'
          name='checkboxRadioGroup'
          value='not'
          checked={value === 'not'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Something casual'
          name='checkboxRadioGroup'
          value='notbut'
          checked={value === 'notbut'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Live streams'
          name='checkboxRadioGroup'
          value='live'
          checked={value === 'live'}
          onChange={(e, data) => setValue(data.value)}
        />
      </Form.Field>
    </Form>
  )
}

export default CheckboxExampleRadioGroup



// Something serious

// Let's see what happens

// New friends or chats

// Something casual

// Live streams