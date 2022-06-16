import { useState } from 'react';
import './App.css';
import Header from './components/header';
import { TABS_LIST } from './constants';
import DataTable from './components/table';

const App = () => {
  const [tab, setTab] = useState(TABS_LIST[0].value)

  return (
    <div className='app'>
      <Header tabs={TABS_LIST} selectedTab={tab} setSelectedTab={setTab}/>

      <DataTable/>
    </div>
  );
}

export default App;
