import { CHANGE_VARIABLE } from "../actions/type"
const INITIAL_STATE = {
    mocktest_array: [],
    courses_array: [],
    blogs_array:[],
    subjects_array:[],
    users_array:[],
    message: "",
    loading: false,
    messageStatus: "",
    sideBar: false,
    modal_add_question: false,
    modal_add_course: false,
 
    modal_add_blog: false,
    modal_update_course: false,
    modal_update_blog: false,
    modal_update_user:false,
    files: null,
    filesUrl: null,

    modal_course_id: "",
    modal_course_name: "",
    modal_course_description: "",
    modal_course_is_active: "",
    modal_course_pdf_url: "",


    modal_blog_id: "",
    modal_blog_title: "",
    modal_blog_description: "",
    modal_blog_descriptionShort: "",
    modal_blog_image: "",


    modal_add_subject: false,
    modal_update_subject: false,
    subject_data:"",
    user_data:""

}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CHANGE_VARIABLE:
            return { ...state, [action.payload.key]: action.payload.value }
        default:
            return state

    }
}
export default reducers