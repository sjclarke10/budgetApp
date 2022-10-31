
import './App.css';
import { Container, Button, Header, Statistic, Segment, Grid, Icon, Form} from 'semantic-ui-react'; 
function App() {
  return (
    <Container>
      <Header as ='h1'>Budget</Header>
      <Statistic size='small'>
          <Statistic.Label>Your Balance: </Statistic.Label>
          <Statistic.Value>2,500.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size = 'tiny' color='green'>
                  <Statistic.Label style = {{textAlign:'left'}}>Income:</Statistic.Label>
                  <Statistic.Value>1,145</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
              <Statistic size = 'tiny' color = 'red'>
              <Statistic.Label style = {{textAlign:'left'}}>Expenses:</Statistic.Label>
                  <Statistic.Value>500</Statistic.Value>
              </Statistic>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Segment>


      <Header as = 'h3'> History</Header>
      <Segment color = 'red'>
        <Grid columns = {3} textAlign = 'right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Description</Grid.Column>
            <Grid.Column width={3} textAlign = 'right'>3,000</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name= 'edit'></Icon>
              <Icon name = 'trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>
      <Segment color = 'green'>
        <Grid columns = {3} textAlign = 'right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Description</Grid.Column>
            <Grid.Column width={3} textAlign = 'right'>100</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name= 'edit'></Icon>
              <Icon name = 'trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color = 'red'>
        <Grid columns = {3} textAlign = 'right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Description</Grid.Column>
            <Grid.Column width={3} textAlign = 'right'>200</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name= 'edit'></Icon>
              <Icon name = 'trash'></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as = 'h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input label= 'Description' icon = 'tags' width = {12} placeholder= 'NewInput'></Form.Input>
          <Form.Input label= 'Value' icon = 'dollar' width = {4} placeholder= "10"></Form.Input>
        </Form.Group>

        <Button.Group style = {{marginTop: 20}}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button primary>Submit</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
