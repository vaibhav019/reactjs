import React,{useState,useEffect} from 'react';
import Course from './Course';
//import { Button } from 'reactstrap';


const Allcourse=()=>{
    useEffect(() => {
       document.title="All course|| vaibhav singh code academy";
    }, []);

const [course,setCourse]=useState([
    {title:"java",description:"this is  advance java course"},
    {title:"python",description:"this is  advance python course"},
    {title:"javascript",description:"this is  advance javascipt course"},
    {title:"data science",description:"this is  advance data science course"},
    {title:"adv java",description:"this is  advance java course that contain jdbc servlet jsp"},
    {title:"data structure and algorithms",description:"this is dta structure course that help to get job in high tach company like amazon"}
]);


    return(
    <div>
    
    <h1>All courses</h1>
    <p>list of courses are as follow</p>
    
        {course.length>0 ?
         course.map((item)=><Course course = {item} />) 
         : "no course"}
    
    </div>
    );
}
export default Allcourse;