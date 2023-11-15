import TabButton from "./TabButton";
import "./styles.css";

export default function App() {
     function handleSelect(){
     console.log("hellow world --selected")
    } 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
     
    <section>
        <menu>
        <TabButton onSelect={handleSelect} >basil</TabButton>
        <TabButton onSelect={handleSelect}>fun</TabButton>
        <TabButton onSelect={handleSelect}>alukkail</TabButton>
        </menu>
        Dynamic Content
    </section>
    
    </div>
  );
}
