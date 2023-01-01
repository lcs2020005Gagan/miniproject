import React from "react";
import "../index.css"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <div  style={{"marginTop":"1rem",marginBottom:"0rem","backgroundColor":"black","color":"white"}}>
        <MDBFooter className='text-center' color='white' bgColor='dark' style={{"backgroundColor":"black"}}>
      <MDBContainer className='p-4' style={{"backgroundColor":"black"}}>
        <section className='mb-4' style={{"backgroundColor":"black"}}>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email'  className='mb-4' placeholder="Enter email address" />
              </MDBCol>

              <MDBCol size="auto">
              <button type="button" class="btn btn-light">Subscribe</button>
                 
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Subscribe to get updates from TheGivingHub
          </p>
        </section>

        <section className=''>
          <MDBRow>
            

          
           
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{"backgroundColor":"black"}}>
        © 2022 Copyright : 
        <Link className='text-white' to='/'>
             TheGivingHub
        </Link>
      </div>
    </MDBFooter>
        </div>
    )
}
export default Footer;



