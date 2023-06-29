import { base_url, changeVariable } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getMockTestBySubCourse = (course,subject) => {
    return (dispatch) => {
        getMockTestBySubCourseHelper({ course,subject, dispatch })
    }
}

export const getMockTestBySubCourseHelper = async ({ course,subject,dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET",
    }
    const url = base_url + `/mocktest/getquestionbysubcourse/${course}/${subject}`
    try {
        dispatch({
            type: CHANGE_VARIABLE,
            payload: {

                key: "loading",
                value: true

            }
        })
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json)
        if (response_json.status === 200) {
            changeVariable("mocktest_array",[])
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "mocktest_array",
                    value: response_json.data

                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
    
                    key: "loading",
                    value: false
    
                }
            })
        
           
        }
        
        // fetch(url,config).then(response=>response.json()).then(responseJson=>{
        //     console.log(responseJson)
        //     if(responseJson){
        //         dispatch({
        //             type:CHANGE_VARIABLE,
        //             payload:{
        //                 key:"products_array",
        //                 value:responseJson.data
        //             }
        //         })
        //     }



        // })


    }
    catch (err) {
        console.log(err)
    }
}
