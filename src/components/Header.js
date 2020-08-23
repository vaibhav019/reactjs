import React from 'react';

import { Container ,Jumbotron} from 'reactstrap';

function Header({name,title}){
    return(
        <div >
        <Jumbotron color="primary">
        <Container >
        <h1>vaibhav singh code academy</h1>
        <p>it is developed by vaibhav singh.  </p>
        </Container>          
       </Jumbotron>
        
        </div>
    )
}
export default Header;