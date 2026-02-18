import styled from 'styled-components'


const card=styled.div`
padding:16px;
border-radius:8px;
border:1px solid #ddd;
background-color:${props=>
    props.isOnline?'#3de813':'#fa0f03'};
}
`;


function Profile({name,isOnline}){
  return (
    <Card isOnline={isOnline}>
        <h2>{name}</h2>
        <p>Status: {isOnline ? 'online': 'offline'}</p>
    </Card>
  )
}
//switch accrodingly 

//ex-2

const Modal=styled.div`
width: ${props=>props.fullscreen? '100vw':'400px'};
height: ${props=>props.fullscreen? ' 100vh' : 'auto'};
`;

< Modal fullscreen={true}/>


//iss type k css m dynamic class bnta hai run time p and we do not have to define the classes and thier names ye khud classes define kr
//deta hmre liye and also style tag with the help of styled 