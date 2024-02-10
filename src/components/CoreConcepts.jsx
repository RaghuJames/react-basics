import {Data} from './Data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';
export default function () { 
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {Data.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
