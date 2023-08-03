import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlacementAdd from './PlacementAdd';




const PlacementHome = () => {
  const [data, setData] = useState([]);
  const [updation, setUpdation] = useState(false);
  const [singleval, setSingleval] = useState([]);

  const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"))
  const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
  console.log(userRole)
  const fetchDatafromAPI = () => {
    axios.get("http://localhost:5000/api/getldata/" + userToken)
      .then((response) => {
        console.log("data from get", response.data);
        setData(response.data);
      })
      .catch(err => console.log(err));
  }

  const updateLearner = (val) => {
    setUpdation(true);
    setSingleval(val);
  }

  useEffect(() => {
    fetchDatafromAPI()
  }, []);

  let finalJSX =

    <div className="container w-75 mt-5 pt-5">

      <br></br>
      <table className="table table-responsive table-striped table-hover">
        <thead>
          <tr className='table-dark'>
            <th>Learner Id</th>
            <th>Name</th>
            <th>Course</th>
            <th>Project</th>
            <th>Batch</th>
            <th>Course Status</th>
            <th>Placement Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return <tr>
              <td>{value.learnerid}</td>
              <td>{value.name}</td>
              <td>{value.course}</td>
              <td>{value.project}</td>
              <td>{value.batch}</td>
              <td>{value.cstatus}</td>
              <td>{value.pstatus}</td>
              {userRole != 'traininghead' && (

                <>
                  <td><button className="btn btn-success" onClick={() => updateLearner(value)}><ion-icon name="create"></ion-icon></button></td>
                </>)}
            </tr>
          })}
        </tbody>
      </table>
    </div>

  if (updation) finalJSX = <PlacementAdd method='put' data={singleval} />
  return (

    finalJSX
  )
}

export default PlacementHome