import React from 'react'; 

import{ Form } from 'semantic-ui-react'

import ButtonSaveOrCancel from './ButtonSaveOrCancel';
function NewEntryForm() {

    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input label= 'Description' icon = 'tags' width = {12} placeholder= 'NewInput'></Form.Input>
          <Form.Input label= 'Value' icon = 'dollar' width = {4} placeholder= "10"></Form.Input>
        </Form.Group>
       <ButtonSaveOrCancel/>
      </Form>
    )
  
}

export default NewEntryForm; 