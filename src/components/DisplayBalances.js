import React from 'react'; 
import DisplayBalance from './DisplayBalance';
import {Segment, Grid} from 'semantic-ui-react'

function DisplayBalances() {

return (
    <Segment textAlign='center'>
    <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title = 'Income' value = '1,000' numberColor = 'green'/>
          </Grid.Column>
          <Grid.Column>
          <DisplayBalance title = 'Expenses' value = '500' numberColor = 'red'/>
        </Grid.Column>
        </Grid.Row>
    </Grid>
  </Segment>

)
}

export default DisplayBalances; 