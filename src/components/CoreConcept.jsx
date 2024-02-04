export default function CoreConcept(obj){
    return( 
      <li class="tab">
        <img src={obj.img} alt={obj.title} srcset="" />
        <h3>{obj.title}</h3>
        <p>{obj.description}</p>
      </li>
    );
  }