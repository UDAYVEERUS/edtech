import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions";

const Signup = ({


  loginUser
}) => {

  const [state, setState] = useState({
    name:"",
    email:""
  })

  const updateState = (event)=>{
    const variable = event.target.name 
    const value = event.target.value 
    setState({...state,[variable]:value})
  }


  const loginUserFunc = (event)=>{
    event.preventDefault()
    loginUser(state)
  }

  return (


    <section class="sign-in border-white-900 lg:mx-9 mx-2 mt-9 box-border rounded-xl border-x-2 border-y-2 bg-white">
      <div class="container">
        <div class="signin-content justify-evenly lg:flex">
          <div class="signin-form">
            <h2 class="form-title mt-20 text-center text-5xl font-serif  lg:mr-40">Login</h2>
            <form class="register-form py-24" id="login-form">
              <div class="form-group mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
                <img class="w-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc9VDs02ZrmIC7pS3WzBTvXl8UrI3jwAOVQ&usqp=CAU" alt="" />
                <input class="mx-5 focus:outline-none" type="text" name="name" id="your_name" value={state.name} onChange={(e)=>{updateState(e)}} placeholder="Your Name" />
              </div>
              <div class="form-group m-5 mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
              <img
                  class="w-7"
                  src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png"
                  alt=""
                />
                <input class="mx-5 focus:outline-none" type="email" name="email" value={state.email} onChange={(e)=>{updateState(e)}}  placeholder="email" />
              </div>
              <div class="form-group form-button m-14 text-center lg:flex">
                <input class="box-border h-14 w-36 cursor-pointer rounded bg-amber-400 p-2 text-white" onClick={(e)=>{loginUserFunc(e)}} type="submit" id="signin" value="Log in" />
              </div>
            </form>
          </div>
          <div class="signin-image py-3 text-center">
            <img class="lg:m-8 mx-16 lg:mb-44 mb-10 lg:pt-6  lg:h-2/3" src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="sing up image" />
            <Link to={"/register"} href="#" class="signup-image-link text-xl"><u>Create an account</u></Link>
          </div>
        </div>
      </div>
    </section>



  );
};


const mapStateToProps = (state)=>{
  const {

  }=state.variables 
  return{

  }
}

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps,mapActionsToProps)(Signup)
