import {useEffect, useMemo, useState} from 'react';
import * as queryString from "query-string";

import Header from './components/header';
import DataTable from './components/table';
import {addGroup, getGroup, listGroups, updateGroup} from "./services/groups";

import {ALERT_TYPES, TABS_LIST} from './constants';
import AppLoader from "./components/loader";
import AppSnackbar from "./components/snackbar";
import Footer from "./components/footer";
import {generateStudent, INITIAL_GROUP} from "./utils/table-helper";
import {sentenceToCamelCase} from "./utils/helpers";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [tab, setTab] = useState(TABS_LIST[0].value);
  const [alert, setAlert] = useState(undefined);
  const [apiKey, setApiKey] = useState('');
  const [groupData, setGroupData] = useState(undefined);
  const {isAdmin} = useMemo(() => {
    const {admin} = queryString.parse(window.location.search);
    return {
      isAdmin: admin === process.env.REACT_APP_ADMIN
    };
  }, []);

  const getGroupData = (groupName) => getGroup(groupName).then(data => setGroupData(Array.isArray(data) ? data : INITIAL_GROUP));

  useEffect(() => {
    listGroups()
    .then((groups) => {
      setGroups(groups);
      setGroup(groups[0])
      getGroupData(groups[0]);
    });
  }, []);

  const handleCreateNewGroup = () => {
    const exists = groups.includes(newGroupName);

    if(exists) return setAlert({ severity: ALERT_TYPES.ERROR, message: 'Group already exists' });
    if(!newGroupName.length) return setAlert({ severity: ALERT_TYPES.ERROR, message: 'Name should not be empty' });
    if(newGroupName.includes('.')) return setAlert({ severity: ALERT_TYPES.ERROR, message: 'Name should not have .[period]' });

    addGroup(newGroupName)
    .then(res => {
      setAlert({ severity: ALERT_TYPES.SUCCESS, message: res.message })
      setNewGroupName('');
      listGroups().then(setGroups);
    })
    .catch(err => {
      console.error(err)
      setAlert({ severity: ALERT_TYPES.ERROR, message: err?.data?.message })
    });
  }
  const handleGroupChange = (e) => {
    setGroupData(undefined);
    setGroup(e.target.value);
    getGroupData(e.target.value);
  }
  const handleTableChange = (value) => setGroupData(value);
  const handleAddStudent = (studentName) => {
    if(!studentName.length) return setAlert({ severity: ALERT_TYPES.ERROR, message: 'Name should not be empty' });

    setGroupData(prevData => [...prevData, generateStudent(studentName)]);
  }
  const handleTaskAdd = (taskName) => {
    if(!taskName.length) return setAlert({ severity: ALERT_TYPES.ERROR, message: 'Name should not be empty' });

    setGroupData(prevData => prevData.map(item => ({...item, [sentenceToCamelCase(taskName)]: ''})));
  }
  const handleSave = () => {
    updateGroup(group, { groupData, apiKey })
    .then(res => setAlert({ severity: ALERT_TYPES.SUCCESS, message: res.message }))
    .catch(err => {
      console.error(err)
      setAlert({ severity: ALERT_TYPES.ERROR, message: err?.data?.message })
    });
  }

  return (
    <div className='app'>
      <Header tabs={TABS_LIST}
              isAdmin={isAdmin}
              selectedTab={tab}
              setSelectedTab={setTab}
              group={group}
              setGroup={handleGroupChange}
              groups={groups}
              newGroupName={newGroupName}
              handleCreateNewGroup={handleCreateNewGroup}
              setNewGroupName={setNewGroupName}/>

      {
        groupData === undefined ?
          <AppLoader/> : (
            <>
              <DataTable isAdmin={isAdmin} data={groupData} onChange={handleTableChange}/>
              {isAdmin && <Footer onStudentAdd={handleAddStudent}
                                  onTaskAdd={handleTaskAdd}
                                  onSave={handleSave}
                                  apiKey={apiKey}
                                  apiKeyChange={setApiKey}/>}
            </>
          )
      }
      <AppSnackbar error={alert} resetError={() => setAlert(null)}/>
    </div>
  );
}

export default App;
