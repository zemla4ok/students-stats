import { v4 as uuidv4 } from 'uuid';
import {camelCaseToSentence} from "./helpers";

export const getCols = ([record], editable) => {
  return Object.keys(record)
  .filter(record => record !== 'id')
  .map(field => ({
    field,
    headerName: camelCaseToSentence(field),
    editable
  }));
};

export const generateStudent = (name = '') => ({
  id: uuidv4(),
  name,
})

export const INITIAL_GROUP = [generateStudent()];