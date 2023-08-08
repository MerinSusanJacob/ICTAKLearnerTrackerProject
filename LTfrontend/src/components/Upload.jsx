import React, { useState } from 'react'
import Papa from "papaparse";
import { Table, Button, Segment, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Upload = () => {
  const navigate = useNavigate();
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);
//   const [jsonData, setJsonData] = useState([]);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setParsedData(results.data);
        // console.log("Parsed data:", results.data);
        setTableRows(Object.keys(results.data[0]));
        setValues(results.data.map((row) => Object.values(row)));
      },
    });
  };


  const sendDataToAPI = () => {
    if (parsedData.length > 0) {
    
        axios.post('http://localhost:5000/api/learner/upload', parsedData) 
          .then((response) => {
           
            if (response.data.status === 'OK') {
              Swal.fire({
                title: 'Csv Added Successfully..!',
                showDenyButton: false,
                confirmButtonText: 'Return to home',
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success');
                  navigate('/thome');
                }
              });
            }
          })
          .catch(function (error) {
            console.log(error.toJSON());
          });

    }
    else {
      alert('No data found!');
    }
  };

  return (
    <div>
      <div className="container" align='center' style={{ marginTop: '120px' }}>
        <Segment style={{ border: "none" }}>
          <Form style={{ border: "none", width: "900px", backgroundColor: "lightgray", height: "400px", padding: "40px" }}>
            <Form.Field>
              <label>Upload a CSV File :</label>
              &nbsp;&nbsp;
              <input
                type="file"
                name="file"
                onChange={changeHandler}
                accept=".csv"
             />
            </Form.Field>
            <br></br>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  {tableRows.map((rows, index) => {
                    return (
                      <Table.HeaderCell style={{ backgroundColor: "#581845", color: "#ffffff" }}>{rows}</Table.HeaderCell>)
                  })}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {values.map((value, index) => {
                  return (
                    <Table.Row key={index}>
                      {value.map((val, i) => {
                        return <Table.Cell key={i}>{val}</Table.Cell>
                      })}
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
            
            <Button size='mini' color='grey' type='submit' onClick={sendDataToAPI} style={{ backgroundColor: "#FFC300", color: "#ffffff", fontSize: 15, borderColor: "#FF0000" }} >Submit</Button>
            &nbsp;&nbsp;&nbsp;
            <Link to='/thome' >
              <Button size='mini' style={{ backgroundColor: "#FF0000", color: "#ffffff", fontSize: 15, borderColor: "#FFC300" }}>
                Cancel
              </Button>
            </Link>

            <Form.Field>
              <a href="https://docs.google.com/spreadsheets/d/1lFSa_wh8wRtwZSuyVfRSwRsH2VuUldWJT1mZEM3uLwY/edit?usp=sharing" download style={{ color: "red" }}>Click here to download a sample csv file</a>
            </Form.Field>
          </Form>
        </Segment>
      </div>
    </div>
  )
}

export default Upload;
