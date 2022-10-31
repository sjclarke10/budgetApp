
import './App.css';
import { Container } from 'semantic-ui-react'; 
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine'; 
function App() {
  return (
    <Container>
      <MainHeader title = 'Budget'/>
      <DisplayBalance size = 'small' title = 'Your balance' value = '2,500.53'/>
      <MainHeader title = 'History' type = 'h3'/>
      <DisplayBalances/>
      <EntryLine isExpense description = 'Dinner' value = '100'/>
      <EntryLine description = 'Paycheck November' value = '2,000'/>
      <EntryLine isExpense description = 'Groceries' value = '70'/>
      <MainHeader title = 'Add a new transaction' type = 'h3'/>
      <NewEntryForm/>

    </Container>
  );
}

export default App;
