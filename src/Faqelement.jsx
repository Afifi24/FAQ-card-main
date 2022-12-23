import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
export const Faqelement = ({item,index}) => {

  const [isshowing,setIsshowing] = useState(false)
  const ToggleBtn = ()=>{
    setIsshowing(!isshowing)
    
  }
 

  return (
    <Faqstyle>
       
              <div className="todo" onClick={ToggleBtn}>
              <h3 className={isshowing ? 'active':''}>{item.question}   <span>{isshowing? <MdOutlineKeyboardArrowUp/>:<MdOutlineKeyboardArrowDown/>}</span> </h3>
              {isshowing && <p>{item.answer}</p>}
              </div>
              <Line/>
           
     </Faqstyle>
  )
}

const Faqstyle = styled.div`
  margin-bottom: 0.5rem;

h3{
  margin-bottom: 0.5rem;
  font-size: 14px;
  transition:var(--transition);
  position: relative;
  font-weight: lighter;
  span{
  position: absolute;
  right: 10%;
  color: var(--soft-red);
  font-size: 1.3rem;
  font-weight: 700;
  }
  
}
.active{
  font-weight: bold;
}
p{
  font-size: 14px;
 
}
.todo{
  padding: 0.5rem 0rem;
  border-radius: 0.3rem;
  cursor: pointer;
  max-width: 430px;
}
.todo:hover h3{
    color: var( --soft-red);
}
/* MEDIA QUERY */
@media screen and (max-width:994px) {

p{
  max-width: 400px;
}
}
@media screen and (max-width:910px) {
.todo{
  width: 400px;
}
p{
  max-width: 350px;
}
}
@media screen and (max-width:830px) {
.todo{
  width: 320px;
}
p{
  max-width: 300px;
}
}
`
const Line = styled.div`
height: 2px;
width: 400px;
background-color: var(--Light-grayish-blue);
margin-top:0.5rem;
@media screen and (max-width:910px) {
  width: 350px;
}
@media screen and (max-width:830px) {
  width: 300px;
}
`