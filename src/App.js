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
import NewPassword from "./components/new-password";
import {useToastNotification} from "./context/toast-notification";

const App = () => {
  const {message, setMessage} = useToastNotification();
  const {isAuthenticated, getUser} = useLogin();
  const user = getUser();
  console.log(isAuthenticated() ,user);
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
      {!isAuthenticated() && <Login/>}
      {isAuthenticated() && !user?.activated && <NewPassword/>}


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
      <AppSnackbar error={message} resetError={() => setMessage(null)}/>
    </div>
  );
}

export default App;
