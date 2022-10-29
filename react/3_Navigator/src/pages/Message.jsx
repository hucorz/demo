import React, {useState} from "react"
import {Link, Outlet, useNavigate} from 'react-router-dom'

export default function Message() {
  const [state] = useState([
    {id:'001', title:"message1", content:'锄禾日当午'},
    {id:'002', title:"message2", content:'汗滴禾下土'},
    {id:'003', title:"message3", content:'谁知盘中餐'},
    {id:'004', title:"message4", content:'粒粒皆辛苦'}
  ])
  const navigate = useNavigate()
  function showDetail(detailObj) {
    navigate('detail', {
      replace: false,
      state: detailObj
    })
  }

  return (
    <div>
      <ul>
        {
          state.map(obj => {
            return (
              <li key='obj.id'>
                <Link to='detail' state={obj}>{obj.title}</Link>
                <button onClick={() => {showDetail(obj)}}>Show Detail</button>
              </li>
            )
          })
        }
      </ul>
      <Outlet/>
    </div>
  );
}
