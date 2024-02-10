import { useState } from "react";
import {TabData} from './TabData.js';
import TabButton from './tab/TabButton.jsx';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function(){
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
    return(
        <main>
        <Section title="Examples" id="examples">
          <Tabs buttons={<>
                          <TabButton onSelected={selectedButton === 'components'}  onClick={()=>handleClick('components')}>Components</TabButton>
                          <TabButton onSelected={selectedButton === 'probs'}  onClick={()=>handleClick('probs')}>Probs</TabButton>
                          <TabButton onSelected={selectedButton === 'jsx'}  onClick={()=>handleClick('jsx')}>JSX</TabButton>
                          <TabButton onSelected={selectedButton === 'state'}  onClick={()=>handleClick('state')}>State</TabButton>
                        </>}
                   ButtonsContainer='menu'> {tabContent}</Tabs>
        </Section>
        <Section>
         
        </Section>
      </main>
    );
}