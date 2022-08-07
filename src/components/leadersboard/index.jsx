import { Chart } from 'react-charts'
import {useMemo} from "react";


const LeadersBoard = () => {
  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [1, 2, 4, 5 ,6, 7]
      },
      {
        label: 'Series 2',
        data: [1, 2, 3, 6, 7, 9]
      }
    ],
    []
  )

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default LeadersBoard;