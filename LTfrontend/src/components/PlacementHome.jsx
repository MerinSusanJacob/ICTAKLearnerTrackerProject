import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PlacementAdd from './PlacementAdd';




const PlacementHome = () => {
  const [data, setData] = useState([]);
  const [updation, setUpdation] = useState(false);
  const [singleval, setSingleval] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);

  const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"))
  const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));

  const pageSize = 5;//Number of item per page

  console.log(userRole);

  const fetchDatafromAPI = (pageNumber) => {
    return axios
      .get("http://localhost:5000/api/getldata/" + userToken)
      .then((response) => {
        console.log("data from get", response.data);
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedData = response.data.slice(startIndex, endIndex);
        setData(paginatedData);
        setTotalPages(Math.ceil(response.data.length / pageSize));
      })
      .catch(err => console.log(err));
  };

  const updateLearner = (val) => {
    setUpdation(true);
    setSingleval(val);
  }

 

  useEffect(() => {
    fetchDatafromAPI(currentPage)
      .then(() => setLoading(false)) // Set loading to false after the API call finishes
      .catch((error) => console.log(error)); // Handle any errors during the API call
  }, [currentPage]);

  useEffect(() => {
    fetchDatafromAPI(currentPage);
  }, [currentPage]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) { 
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  let finalJSX =

    <div className="container w-75 mt-5 pt-5">

      {/* <a href="/tadd"><button className="btn btn-success d-flex"><ion-icon name="person-add-outline" size="large"></ion-icon></button></a> */}
      {loading ?
        (<p>Loading data..</p>
        ) :
        data && data.length > 0 ? ( // Check if data is not undefined and has some elements
          <>
            <Table responsive bordered hover>
              <thead>
                <tr class="table-success">
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

                      <td><Button className="btn btn-success" onClick={() => updateLearner(value)}>
                        <ion-icon name="create"></ion-icon>
                      </Button>
                      </td>
                    )}
                  </tr>
                })}
              </tbody>
            </Table>
            <div className='d-flex justify-content-center'>
              <Pagination>
                <Pagination.Prev onClick={handlePreviousPage} disabled={currentPage === 1} />
                {[...Array(totalPages).keys()].map((pageNumber) => (
                  <Pagination.Item
                    key={pageNumber}
                    active={pageNumber + 1 === currentPage}
                    onClick={() => handlePagination(pageNumber + 1)}
                  >
                    {pageNumber + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
              </Pagination>

            </div>
          </>
        ) : (<p>No data available...</p>)}
    </div>
  if (updation) finalJSX = <PlacementAdd method='put' data={singleval} />
  return (

    finalJSX
  )
};

export default PlacementHome