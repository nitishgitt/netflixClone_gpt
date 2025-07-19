import React from 'react'

const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ .test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isNameValid =/^[A-Za-z]+(?:[-'][A-Za-z]+)?(?: [A-Za-z]+(?:[-'][A-Za-z]+)?)*$/
.test(name);
      if(!isEmailValid){
        return "Your Email ID is not valid *";
      }
      if(!isPasswordValid){
        return "Your Password is not valid *";
      }
      if(!isNameValid){
        return "Your Name is not valid";
      }
      else{
        return null;
      }
}

export default checkValidData