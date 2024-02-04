import {useState} from 'react';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/tab/TabButton.jsx';
import {Data} from './components/Data.js';
import { TabData } from './components/TabData.js';

function App() {
  const [selectedButton, setSelectedButton] = useState();
 // console.log(selectedButton+"=====")
  function handleClick(obj){
    setSelectedButton(obj);
    console.log(selectedButton);
  }

  let tabContent= <p>Please select a button</p>;
  if(selectedButton){
    tabContent = <div>
    <h2>{TabData[selectedButton].title}</h2>
    <p>{TabData[selectedButton].description}</p>
    </div> ;
  }

  return (
    <div>
      <Header></Header>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {
          Data.map(
            (item)=>( <CoreConcept key={item.title} {...item}/>)
          )
        }
      </ul>
      </section>
      <main>
        <section id="examples">
          <h2>Examples</h2>
          <menu >
            <TabButton onSelected={selectedButton === 'components'}  onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton onSelected={selectedButton === 'probs'}  onSelect={()=>handleClick('probs')}>Probs</TabButton>
            <TabButton onSelected={selectedButton === 'jsx'}  onSelect={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelected={selectedButton === 'state'}  onSelect={()=>handleClick('state')}>State</TabButton>
          </menu>
        </section>
        <section>
          {tabContent}
        </section>
      </main>
     
    </div>
  );
}

export default App;
