import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Login from "./component/Login";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Button from 'react-bootstrap/Button'; // 꼭 import를 해와야한다
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  let member = useSelector((state)=>state.member);
  let dispatch = useDispatch();
  let navigator = useNavigate();
  return (
    <div className="App">
        <>
            <Header/>
        </>
      {member.login? <JRoutes/> : <Login member={member}/>}
    </div>
  );
}

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Jinsta</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
const JRoutes = () => {
  return (
      <Routes>
        <Route path={'/'} element={<div>메인</div>}/>
        <Route path={'/posts'} element={<div>포스트</div>}/>
      </Routes>
  )
}
export default App;
