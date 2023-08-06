import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const TrainerAdd = (props) => {
    console.log("props data", props.data);
    const [inputs, setInputs] = useState(props.data);
    const navigate = useNavigate();

    const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"))
    const [userID, setUserID] = useState(sessionStorage.getItem("userId"))
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs, [name]: value
        });
    }

    const submitHandler = () => {
        let data = {
            userId: userID,
            token: userToken,
            learnerid: inputs.learnerid,
            name: inputs.name,
            course: inputs.course,
            project: inputs.project,
            batch: inputs.batch,
            cstatus: inputs.cstatus,
            pstatus: inputs.pstatus

        }

        //console.log("button clicked",inputs);

        if (props.method === "post") {
            axios.post(`http://localhost:5000/api/postldata`, data)
                .then((response) => {
                    if (response.data.message === "Posted successfully") {
                        console.log("response post", response);
                        alert(response.data.message);
                        navigate('/thome');
                    }
                    else {
                        alert(response.data.message);
                    }
                })
                .catch((err) => { console.log(err) })
        }
        if (props.method === "put") {
            axios.put(`http://localhost:5000/api/putldata/${inputs._id}`, inputs)
                .then((response) => {
                    if (response.data.message === "Updated successfully") {
                        alert(response.data.message);
                        window.location.reload(false);
                    }
                    else {
                        alert(response.data.message);
                    }
                })
                .catch((err) => { console.log(err) })
        }
    }
    return (
        <div>
            <div className="container w-50 mt-5 pt-5  bg-secondary-subtle rounded">
                <h3>Learner's form</h3>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-2">
                            {/* LearnerId */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="learnerid" className="form-label">Learner Id:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <input type="text"
                                            id="learnerid"
                                            className="form-control"
                                            name="learnerid"
                                            value={inputs.learnerid}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Name of learner */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <input type="text"
                                            id="name"
                                            className="form-control"
                                            name="name"
                                            value={inputs.name}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Course  */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="course" className="form-label">Course :</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <select className="form-select"
                                            aria-label="Default select example"
                                            name="course"
                                            value={inputs.course}
                                            onChange={inputHandler}>
                                            <option defaultValue>-Select-</option>
                                            <option value="FSD">FSD</option>
                                            <option value="DSA">DSA</option>
                                            <option value="ML-AI">ML-AI</option>
                                            <option value="RPA">RPA</option>
                                            <option value="ST">ST</option>
                                            <option value="CSA">CSA</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* Project  */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="project" className="form-label">Project :</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <select className="form-select"
                                            aria-label="Default select example"
                                            name="project"
                                            value={inputs.project}
                                            onChange={inputHandler}>
                                            <option defaultValue>-Select-</option>
                                            <option value="ICTAK">ICTAK</option>
                                            <option value="KKEM">KKEM</option>
                                            <option value="NORKA">NORKA</option>
                                            <option value="ABCD">ABCD</option>
                                            <option value="KDISC">KDISC</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* Batch  */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="batch" className="form-label">Batch :</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <select className="form-select"
                                            aria-label="Default select example"
                                            name="batch"
                                            value={inputs.batch}
                                            onChange={inputHandler}>
                                            <option selected>-Select-</option>
                                            <option value="May_22">May_22</option>
                                            <option value="Jun_22">Jun_22</option>
                                            <option value="Jul_22">Jul_22</option>
                                            <option value="Aug_22">Aug_22</option>
                                            <option value="Dec_22">Dec_22</option>
                                            <option value="Mar_23">Mar_23</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Course  Status*/}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="course" className="form-label">Course Status:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <select className="form-select"
                                            aria-label="Default select example"
                                            name="cstatus"
                                            value={inputs.cstatus}
                                            onChange={inputHandler}>
                                            <option defaultValue>-Select-</option>
                                            <option value="Qualified">Qualified</option>
                                            <option value="Incompetent">Incompetent</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Button*/}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    {/* offset */}
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                    </div>
                                    {/* Button Submit*/}
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <button className="btn btn-success" onClick={submitHandler}>Submit</button>
                                    </div>
                                    {/* Button */}
                                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-3">
                                        <a href="/thome"><button className="btn btn-warning">Back to Dashboard</button></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerAdd