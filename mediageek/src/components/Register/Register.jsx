import { useRef, useState, useEffect } from "react";
import Posts from "../Posts/Posts";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Register = () => {
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validatePassword = /^[A-Za-z]\w{8,25}$/;
  const emailRef = useRef();
  const pswRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  return <div></div>;
};

export default Register;
