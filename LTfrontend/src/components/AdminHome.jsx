import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminAdd from './AdminAdd'


const AdminHome = () => {
  const [data, setData] = useState([]);
  const [updation, setUpdation] = useState(false);
  const [singleval, setSingleval] = useState([]);
  const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"))
  const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));

  const fetchDatafromAPI = () => {
    axios.get("http://localhost:5000/api/getudata/" +userToken,+userRole )
      .then((response) => {
        console.log("data from get", response.data);
        setData(response.data);
      })
      .catch(err => console.log(err));
  }

  const updateUser = (val) => {
    setUpdation(true);
    setSingleval(val);
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/deludata/${id}`)
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
    <div className="container w-75 mt-5 pt-5">
      <a href="/aadd" className="text-decoration-none"><button className="btn btn-success d-flex">Add Users</button></a>
      <br></br>
      <br></br>
      <table className="table table-responsive table-hover table-striped">
        <thead>
          <tr className='table-dark'>
            <th>Name</th>
            <th>Email ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Role</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return <tr>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.username}</td>
              <td>{value.password}</td>
              <td>{value.role}</td>
              <td><button className="btn btn-success" onClick={() => updateUser(value)}><ion-icon name="create"></ion-icon></button></td>
              <td><button className="btn btn-danger" onClick={() => deleteUser(value._id)}><ion-icon name="close-circle"></ion-icon></button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>

  if (updation) finalJSX = <AdminAdd method='put' data={singleval} />
  return (
    finalJSX
  )
}

export default AdminHome