// import { base_url } from "./variables"

import FormData from "form-data"
import axios from "axios"
import { CHANGE_VARIABLE } from "../type"
import { base_url } from "../variables"
import { createToast } from "../toast"

export const uploadPdf = (file) => {

    return (dispatch) => {

        uploadPdfHelper({ file, dispatch })

    }

}
const uploadPdfHelper = async ({ file, dispatch }) => {

    try {
        createToast("uploading pdf","info")
        var formData = new FormData()
        // console.log(file,"gkfdjmgsff,kmfjfjk")
        for (var i = 0; i < file.length; i++) {

            formData.append("files", file[i])

        }
        console.log(formData, "skrjdnhm", file)
        const url = base_url + "/upload"
        const config = {


            // headers: { "content-type": "multipart/form-data" },
            // onUploadProgress: (event) => {

            //     console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total))
            //     const progress = Math.round((event.loaded * 100) / event.total)
            //     dispatch({

            //         type: CHANGE_VARIABLE,
            //         payload: {

            //             key: "notification",
            //             value: "uploading -" + progress +"%"

            //         }

            //     })
            //     dispatch({

            //         type: CHANGE_VARIABLE,
            //         payload: {

            //             key: "notification_flag",
            //             value: true

            //         }

            //     })
            //     if( +progress === 100 )
            //         dispatch({

            //             type: CHANGE_VARIABLE,
            //             payload: {

            //                 key: "notification",
            //                 value: "processing.."

            //             }

            //         })

            // },

        }

        const response = await axios.post(url, formData, config)
        console.log(response)
        if (response.status === 200) {
            var fileUrl = response.data.join(",")
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "notification",
                    value: "File Uploaded."

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "notification_flag",
                    value: false

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "files",
                    value: response.data
                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "filesUrl",
                    value: fileUrl
                }

            })
            createToast("pdf successfully uploaded","success")


        }
        else{
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "messageStatus",
                    value: "some Error Occur"

                }

            })
        }
        // FILE COMPLETED PROCESSING

    } catch (err) {

        // console.log( err )
        console.log("error")

    }

}

