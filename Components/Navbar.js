import * as React from "react";
import { Box } from "@mui/material";

function Navbar() {
    return (
    <>
       <Box  bgcolor={"#f8f8f8"} display={"flex"} textAlign={"center"} justifyContent={"space-between"} padding={"10px 20px"}>
    <Box>
      <img height={"40px"} src="https://adivahamail.com/travon/wp-content/uploads/2023/02/logo-2-1.svg" alt="Logo" />
    </Box>
    <ul class="menu" style={{marginTop:"10px"}}>
      <li style={{display:"inline-block", marginRight:"30px"}}><a style={{textDecoration:"none",color:"#1373e9",fontWeight:"bold"}} href="#">Home</a></li>
      <li style={{display:"inline-block", marginRight:"30px"}}><a style={{textDecoration:"none",color:"#1373e9",fontWeight:"bold"}} href="#">About</a></li>
      <li style={{display:"inline-block", marginRight:"30px"}}><a style={{textDecoration:"none",color:"#1373e9",fontWeight:"bold"}} href="#">Contact</a></li>
      <li style={{display:"inline-block", marginRight:"30px"}}><a style={{textDecoration:"none",color:"#1373e9",fontWeight:"bold"}} href="#">Services</a></li>
      <li style={{display:"inline-block", marginRight:"30px"}}><a style={{textDecoration:"none",color:"#1373e9",fontWeight:"bold"}} href="#">Pages</a></li>
    </ul>
    <button class="signup" style={{background:"#1373e9", color:"#fff" ,padding:"10px 20px" ,border:"none", borderRadius:"4px", cursor:"pointer"}} bgcolor={"#1373e9"}>Sign Up</button>
  </Box>
    </>
  );
}
export default Navbar;
