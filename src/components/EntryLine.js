import React from 'react'; 
import {Segment, Grid, Icon} from 'semantic-ui-react'
function EntryLine({isExpense = false, description, value}){
    let color = 'green'
    if (isExpense){
        color = 'red'
    }
    return (
        <Segment color = {color}>
        <Grid columns = {3} textAlign = 'right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3} textAlign = 'right'>${value}</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name= 'edit'></Icon>
              <Icon name = 'trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default EntryLine; 