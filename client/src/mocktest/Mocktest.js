import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { checkMockTest, mockTestFetchBySubCourse } from "../actions";
import { changeVariable } from "../actions/variables";
import MockTestQuestion from "./MockTestQuestion";
import Result from "./Result";

const Mocktest = ({
  mocktest_array,
  mocktest_answer_array,
  resultData,

  mockTestFetchBySubCourse,
  checkMockTest,changeVariable
}) => {

  const { course_id, subject_id } = useParams()
  useEffect(() => {
    console.log(resultData,"resultData")
    mockTestFetchBySubCourse({ course_id, subject_id })
  }, [])

  const [showAnswer, setShowAnswer] = useState(false)

  const checkMockFunc = ()=>{
    console.log("chekc")
    checkMockTest(mocktest_answer_array)
    changeVariable("resultData","")
  }

  return (
    <div className="container  lg:mx-auto pt-28    ">
      <h1 className="text-center lg:text-7xl text-4xl font-medium   ">{resultData?"RESULT":"MOCK TEST"}</h1>
      <div className="mock p-5 lg:flex flex-row-reverse lg:flex-col  lg:w-full  lg:justify-between  ">
        <div className="mock-img mt-9 lg:w-[30%] hidden relative lg:flex    ">
          {/* <img
            className="picture lg:h-96 h-44  mt-10 ml-auto  "
            src="https://www.ncacpa.org/wp-content/uploads/2020/11/shutterstock_1463537591.png"
            alt=""
          /> */}
        </div>
        {!resultData&&
        <div className="lg:w-[60%]  lg:pt-12 ">
          {mocktest_array && mocktest_array.map((value, index) => {
            return <MockTestQuestion key={index} data={value} showAnswer={showAnswer} />
          })}



        </div>}
        
        {!resultData &&!showAnswer &&<button className="px-5 lg:px-7 w-72 py-2 lg:py-4 lg:text-xl bg-amber-400 text-white hover:bg-amber-500 mt-10" onClick={()=>{checkMockFunc()}} >Submit</button>}
        {showAnswer&&<Link to={"/"} className="px-5 lg:px-7 w-72 py-2 lg:py-4 lg:text-xl bg-amber-400 text-white hover:bg-amber-500 mt-10" >Back To Home</Link>}
      </div>
      
      {resultData&&<Result setShowAnswer={setShowAnswer} mocktest_array_length={mocktest_array.length} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    mocktest_array,
    mocktest_answer_array,
    resultData
  } = state.variables
  return {
    mocktest_array,
    mocktest_answer_array,
    resultData
  }
}

const mapActionsToProps = {
  mockTestFetchBySubCourse,
  checkMockTest,changeVariable
}

export default connect(mapStateToProps, mapActionsToProps)(Mocktest);
