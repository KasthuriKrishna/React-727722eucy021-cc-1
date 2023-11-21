function myprops(){
    return<Greeting name="kasthuri"/>
  }
  function Greeting(props){
    return(
      <h1>
      Hello! {props.name} welcome to react!!
      </h1>
    );
  }
  export default myprops;