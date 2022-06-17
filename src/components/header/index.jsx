import {useMemo} from 'react';
import {
  AppBar,
  Button, Fab,
  FormControl,
  FormHelperText, Input,
  InputLabel,
  MenuItem,
  Select,
  Toolbar
} from '@mui/material';
import { Add } from '@mui/icons-material';

import './index.scss'

const Header = (
  {
    tabs,
    selectedTab,
    setSelectedTab,
    groups,
    group,
    setGroup,
    isAdmin,
    newGroupName,
    setNewGroupName,
    handleCreateNewGroup
  }) => {
  const newGroupError = useMemo(() => groups.includes(newGroupName) ? "Already exists" : false, [newGroupName]);
  const handleNewGroupNameChange = (event) => {
    setNewGroupName(event.target.value);
  };

  return (
    <div className="header-component">
      <AppBar position="static">
        <Toolbar>
          {
            tabs.map((tab, idx) => {
              const variant = selectedTab === tab.value ? 'outlined' : '';
              return (
                <Button color="inherit"
                        key={idx}
                        variant={variant}
                        onClick={() => setSelectedTab(tab.value)}>
                  {tab.title}
                </Button>
              )
            })
          }
        </Toolbar>

        <div className='right-bar'>
          {
            isAdmin && (
              <div>
                <FormControl error={newGroupError}
                             variant="standard"
                             className='new-group-field'>
                  <InputLabel htmlFor="component-error">New group name</InputLabel>
                  <Input
                    label="New group name"
                    variant="standard"
                    value={newGroupName}
                    onChange={handleNewGroupNameChange}/>
                  <FormHelperText id="component-error-text">{newGroupError}</FormHelperText>
                </FormControl>
                <Fab color="secondary"
                     onClick={handleCreateNewGroup}
                     className='add-new-group-btn'
                     aria-label="add"
                     size='small'>
                  <Add />
                </Fab>
              </div>
            )
          }

          <FormControl className="group-select" variant="standard">
            <InputLabel id="group-name-select-label">Group name</InputLabel>
            <Select
              labelId="group-name-select-label"
              value={group}
              label="Group name"
              onChange={setGroup}
            >
              {
                groups.map(group => (
                  <MenuItem value={group}>{group}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
      </AppBar>
    </div>
  );
}

export default Header
