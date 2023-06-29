import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/users/register";

const Register = ({
  registerUser
}) => {

  const [state, setState] = useState({
    name:"",
    email:"",
    phone:"",
    image:""
  })

const updateState=(event)=>{
  const variable = event.target.name
  const value = event.target.value
  setState({...state,[variable]:value})
  
}
  
const registerUserFunc = (event)=>{
  event.preventDefault()
  console.log("here 25",state)
  registerUser(state)
}


  return (
    <section class="register-in border-white-900 mx-4 lg:mx-9 mt-9 box-border rounded-xl border-x-2 border-y-2 bg-white">
      <div class="container">
        <div class="registerin-content justify-evenly lg:flex">
          <div class="registerin-form lg:mx-48">
            <h2 class="form-title mt-20 text-center font-serif text-5xl lg:mr-20">
              Register
            </h2>
            <form class="register-form py-10 lg:py-24" id="login-form" method="POST">
              <div class="form-group lg:mx-12 mx-8 flex w-auto border-b-2 border-black p-3 text-lg">
                <img
                  class="w-7"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc9VDs02ZrmIC7pS3WzBTvXl8UrI3jwAOVQ&usqp=CAU"
                  alt=""
                />
                <input
                  value={state.name}
                  onChange={(e)=>{updateState(e)}}
                  class="mx-5 focus:outline-none "
                  type="text"
                  name="name"
                  id="your_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="form-group m-5 lg:mx-12 mx-8 flex w-auto border-b-2 border-black p-3 text-lg">
                <img
                  class="w-7"
                  src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png"
                  alt=""
                />
                <input
                  class="mx-5 focus:outline-none"
                  value= {state.email}
                  onChange={(e)=>{updateState(e)}}
                  type="e-mail"
                  name="email"
                  id="your_e-mail"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group m-5 lg:mx-12 mx-8 flex w-auto border-b-2 border-black p-3 text-lg">
                <img
                  class="w-7"
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
                  alt=""
                />
                <input
                  class="mx-5 focus:outline-none"
                  value={state.phone}
                  onChange={(e)=>{updateState(e)}}
                  type="phone"
                  name="phone"
                  id="your_phone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div class="form-group form-button m-14 text-center lg:flex">
                <input
                  class="box-border h-14 w-36 cursor-pointer rounded bg-amber-400 p-2 text-white"
                  type="submit"
                  name="signin"
                  id="signin"
                  value="Register"
                  onClick={(e)=>{registerUserFunc(e)}}
                />
              </div>
            </form>
            {/* <div class="social-login lg:m-7 mx-14 justify-between text-center lg:flex">
              <span class="social-label text-lg">Or login with</span>
              <div class="social-acc m-4 flex justify-center lg:m-0">
                <img
                  class="h-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Facebook_Home_logo_old.svg/1200px-Facebook_Home_logo_old.svg.png"
                  alt=""
                />
                <img
                  class="mx-3 h-8"
                  src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                  alt=""
                />
                <img
                  class="h-8"
                  src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div class="signin-image lg:py-3 py-3 text-center">
            <img
              class="lg:mb-32 mb-10 lg:
              pt-6 lg:h-4/5"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              alt="sing up image"
            />
            <Link to={"/signin"} href="#" class="signup-image-link text-xl">
              <u>Already have an account?</u>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


const mapStateToProps = (state)=>{
  const {

  }=state.variables 

  return {

  }
}

const mapActionsToProps = {
  registerUser
}

export default connect(mapStateToProps,mapActionsToProps)(Register)
