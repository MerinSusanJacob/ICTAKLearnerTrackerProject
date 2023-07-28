import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TrainerAdd from './TrainerAdd'


const Trainerhead = () => {
  const [data, setData] = useState([]);
  const [updation, setUpdation] = useState(false);
  const [singleval, setSingleval] = useState([]);

  const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"))
  const [userID, setUserID] = useState(sessionStorage.getItem("userId"))

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

  const deleteLearner = (id) => {
    axios.delete(`http://localhost:5000/api/delldata/${id}`)
      .then((response) => {
        if (response.data.message === "Deleted successfully") {
          alert(response.data.message);
          fetchDatafromAPI();
        }
        else {
          alert(response.data.message);
        }
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    fetchDatafromAPI()
  }, []);

  let finalJSX =
    <div className="container w-75 mt-4 pt-4">

      <a href="/tadd"><button className="btn btn-success d-flex"><ion-icon name="person-add-outline" size="large"></ion-icon></button></a>
      <br></br>
      <table className="table table-responsive table-striped">
        <thead>
          <tr>
            <th>Learner Id</th>
            <th>Name</th>
            <th>Course</th>
            <th>Project</th>
            <th>Batch</th>
            <th>Course Status</th>
            <th>Placement Status</th>
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
              <td><button className="btn btn-success" onClick={() => updateLearner(value)}><ion-icon name="create"></ion-icon></button></td>
              <td><button className="btn btn-danger" onClick={() => deleteLearner(value._id)}><ion-icon name="close-circle"></ion-icon></button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>

  if (updation) finalJSX = <TrainerAdd method='put' data={singleval} />
  return (
    finalJSX
  )
}

export default Trainerhead