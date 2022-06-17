import { v4 as uuidv4 } from 'uuid';
import {camelCaseToSentence} from "./helpers";

export const getCols = ([record], editable) => {
  return Object.keys(record)
  .filter(field => field !== 'id')
  .map(field => ({
    field,
    headerName: camelCaseToSentence(field),
    editable,
    width: field === 'name' ? 200 : 80
  }));
};

export const generateStudent = (name = '') => ({
  id: uuidv4(),
  name,
})

export const INITIAL_GROUP = [generateStudent()];