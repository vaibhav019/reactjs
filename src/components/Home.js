import React,{useEffect} from 'react';
import { Container,Button, Jumbotron } from 'reactstrap';


function Home(){
        useEffect(() => {
           document.title="Home|| vaibhav singh code academy";
        }, []);
    return(
<div>

<Container className=" text-center">
<Jumbotron >
<h2>vaibhav singh</h2>
<p>this is developed by vaibhav singh for learning purpose</p>
<p>coding is easy  but for that passion and dediction is important</p>
<br/>
<Button color="primary" outline="dark">start here</Button>
</Jumbotron>
</Container>

</div>
    );
}
export default Home;