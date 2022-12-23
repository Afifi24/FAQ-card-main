import React from 'react'
import {Element} from './Data'
import {Faqelement} from './Faqelement'
import Image from './images/bg-pattern-desktop.svg'
import box from './images/illustration-box-desktop.svg'
import desk from './images/illustration-woman-online-desktop.svg'

import styled from 'styled-components'
const Faq = () => {
  return (
    
    <Container>
      <div className="container__image">
                <img src={Image} alt="" />
                <img className='desk' src={desk} alt="" />
               <img className='box' src={box} alt="" />

      </div>
     <div className="text">
      <h2>FAQ</h2>
     {
        Element.map((item,index)=>{
            return <Faqelement item ={item}/>
   
        })
      }
     </div>
    </Container>
  )
}

export default Faq

const Container = styled.div`
background-color: #fff;
 height: 30rem;
 width: 60rem;
box-shadow: 5px 15px 30px rgba(0,0,0,0.2);

 border-radius: 1rem;
 display: grid;
 grid-template-columns: 40% 47%;
 gap: 13%;
 overflow: hidden;
 

 .container__image{
  position: relative;
   img{
    width: 210%;
    margin-right: 7rem;
    position: absolute;
    left: -104%;
    top: -50%;
   }
   .desk{
    width: 100%;
    position: absolute;
    left: -20%;
    top: 12%;
   }
   .box{
    width: 50%;
    position: absolute;
    left: -20%;
    top: 30%;
   
   }
 }
 .text{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 5rem;
  width: 70%;
  /* margin: auto; */
  h2{
    margin-bottom: 0.3rem;
    font-weight: 700;
  }
 }


 /* MEDIA QUERY */
 @media screen and (max-width:994px) {
  height: 30rem;
 width: 55rem;
 }
 @media screen and (max-width:910px) {
 height: 35rem;
 width: 50rem;
 .container__image{
  img{
    left: -104%;
    top: -30%;
  }
 }
 }
 @media screen and (max-width:830px) {
 height: 37rem;
 width: 45rem;
 .container__image{
  img{
    left: -104%;
    top: -20%;
  }
 }
 }
 @media screen and (max-width:770px) {
 height: 40rem;
 width: 35rem;
 grid-template-columns: 100%;
place-items: center;
overflow: unset;

 .container__image{
      width: 40%;
      top: -140%;
  img{
   
    width: 100%;
    left: 0%;
    top: -70%;
    margin: 0;
   
  }
  .text{
    align-items: flex-end;
    justify-content: flex-end;
  }
 }
 }
 @media screen and (max-width:600px) {
 height: 40rem;
 width: 30rem;
 grid-template-columns: 100%;
place-items: center;
overflow: unset;

 .container__image{
      width: 50%;
      top: -150%;
  img{
   
    width: 100%;
    left: 0%;
    top: -70%;
    margin: 0;
   
  }
  
 }
 }
 @media screen and (max-width:500px) {
 height: 40rem;
 width: 25rem;
 grid-template-columns: 100%;
/* place-items: center; */
overflow: unset;

 .container__image{
      width: 50%;
      top: -180%;
      left: 0%;
  img{
   
    width: 100%;
    left: 0%;
    top: -10%;
    
   
  }
  .desk{
    left: 0%;
  }
  .box{
    top: -10%;
    left: 0%;
  }
 }
 }

 @media screen and (max-width:440px) {
width: 20rem;
.text{
  width: 90%;
}
.container__image{
      width: 60%;
      top: -130%;
      left: 0%;
     
}


 }
`