import {Fab, FormControl, Input, InputLabel} from "@mui/material";
import {Add, Save} from "@mui/icons-material";
import {useState} from "react";

import './index.scss';

const Footer = ({onStudentAdd, onTaskAdd, onSave, apiKey, apiKeyChange}) => {
  const [studentName, setStudentName] = useState('');
  const [homeTask, setHomeTask] = useState('');

  const handleStudentNameChange = (event) => setStudentName(event.target.value);
  const handleStudentNameCreate = () => {
    onStudentAdd(studentName);
    setStudentName('');
  }

  const handleNewHomeTaskChange = (event) => setHomeTask(event.target.value);
  const handleNewHomeTaskCreate = () => {
    onTaskAdd(homeTask);
    setHomeTask('');
  }

  return (
    <div className="footer-component">
      <div className='left-footer'>
        <div className='new-student-wrapper'>
          <FormControl error={false}
                       variant="standard"
                       className='field'>
            <InputLabel htmlFor="component-error">New student</InputLabel>
            <Input
              label="New student name"
              variant="standard"
              value={studentName}
              onChange={handleStudentNameChange}/>
          </FormControl>
          <Fab color="secondary"
               onClick={handleStudentNameCreate}
               className='button'
               aria-label="add"
               size='small'>
            <Add />
          </Fab>
        </div>

        <div className='new-lesson-wrapper'>
          <FormControl error={false}
                       variant="standard"
                       className='field'>
            <InputLabel htmlFor="component-error">New home task</InputLabel>
            <Input
              label="New home task"
              variant="standard"
              value={homeTask}
              onChange={handleNewHomeTaskChange}/>
          </FormControl>
          <Fab color="secondary"
               onClick={handleNewHomeTaskCreate}
               className='button'
               aria-label="add"
               size='small'>
            <Add />
          </Fab>
        </div>
      </div>

      <div className='api-key-wrapper'>
        <FormControl error={false}
                     variant="standard"
                     className='field'>
          <InputLabel htmlFor="component-error">key</InputLabel>
          <Input
            label="key"
            variant="standard"
            value={apiKey}
            onChange={(e) => apiKeyChange(e.target.value)}/>
        </FormControl>
        <Fab className='save-btn'
             color="secondary"
             variant="extended"
             onClick={onSave}>
          <Save sx={{ mr: 1 }} />
          SAVE CHANGES
        </Fab>
      </div>
    </div>
  );
}

export default Footer
