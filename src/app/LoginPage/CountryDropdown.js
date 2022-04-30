import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'de', value: 'de', flag: 'de', text: 'Deutschland' },
  { key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland' },
  { key: 'au', value: 'al', flag: 'au', text: 'Austria' },
]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder='Select Country'
    fluid
    selection
    options={countryOptions}
  />
)

export default DropdownExampleSearchSelection
