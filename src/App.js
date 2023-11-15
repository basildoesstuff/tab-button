import { Component } from "react";
import TabButton from "./TabButton";
import "./styles.css";

export default function App() {
     function handleSelect(selectedButton){
      // so far we did console log but now we need to 
      //display the UI changes  
     console.log(selectedButton);
     }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
     
    <section>
        <menu>
        <TabButton onSelect={()=>handleSelect('basil')} >basil</TabButton>
        <TabButton onSelect={()=>handleSelect('sunny')}>sunny</TabButton>
        <TabButton onSelect={()=>handleSelect('alukka')}>alukka</TabButton>
        </menu>
        Dynamic Content
    </section>
    
    </div>
  );
}
