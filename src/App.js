import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';
import { useState } from 'react';

const item = [
  {
    name: 'Totomato',
    done: false
  },
  {
    name: 'Patato',
    done: false
  }
]
function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <div style={{ width: '50%', margin: 'auto', 'textAlign': 'center' }}>
      <h3 className='mt-4'>Tooday's Todo</h3>
      <AddItem setItemList={setItemList} />
      <TodoList itemList={itemList} setItemList={setItemList} />
    </div>
  );
}

export default App;
