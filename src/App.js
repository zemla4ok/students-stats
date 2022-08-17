import {useEffect, useMemo, useState} from 'react';
import * as queryString from "query-string";

import Header from './components/header';
import DataTable from './components/table';
import {addGroup, getGroup, listGroups, updateGroup} from "./services/groups";

import {ALERT_TYPES, TABS, TABS_LIST} from './constants';
import AppLoader from './components/loader';
import AppSnackbar from './components/snackbar';
import Login from "./components/login";
import useLogin from "./utils/auth";

const App = () => {
  const {isAuthenticated} = useLogin();
console.log(isAuthenticated());

  // const TABS_MAPPER = {
  //   [TABS.HOME_TASKS]: (
  //     <>
  //       <DataTable isAdmin={isAdmin} data={groupData} onChange={handleTableChange}/>
  //       {isAdmin && <Footer onStudentAdd={handleAddStudent}
  //                           onTaskAdd={handleTaskAdd}
  //                           onSave={handleSave}
  //                           apiKey={apiKey}
  //                           apiKeyChange={setApiKey}/>}
  //     </>
  //   ),
  //   [TABS.LEADERBOARD]: <LeadersBoard/>
  // }

  return (
    <div className='app'>
      <Login/>


      {/*<Header tabs={TABS_LIST}*/}
      {/*        isAdmin={isAdmin}*/}
      {/*        selectedTab={tab}*/}
      {/*        setSelectedTab={setTab}*/}
      {/*        group={group}*/}
      {/*        setGroup={handleGroupChange}*/}
      {/*        groups={groups}*/}
      {/*        newGroupName={newGroupName}*/}
      {/*        handleCreateNewGroup={handleCreateNewGroup}*/}
      {/*        setNewGroupName={setNewGroupName}/>*/}

      {/*{groupData === undefined ? <AppLoader/> : TABS_MAPPER[tab]}*/}
      {/*<AppSnackbar error={alert} resetError={() => setAlert(null)}/>*/}
    </div>
  );
}

export default App;
