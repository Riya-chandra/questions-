// class compoennt

class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
//Class Component ke andar render() ek special method hai.
// Iska kaam hai JSX return karna jo UI me dikhega.
// Matlab jitni bhi props aur state tum use karna chahte ho, wo sab render ke andar accessible hote hain.


//fnuctional compoent 
function welcome ({name}){
    return <h1>{name}</h1>
}

//bsic example 
<Mycomponent name="riya"></Mycomponent>
//React internally aisa karta hai:
const instance=new Mycomponent({name:"riya"});
//now instsnce naam ka ek obj bana ye this and. props usko hi access kr rh h 
this.props.name === "Riya";

