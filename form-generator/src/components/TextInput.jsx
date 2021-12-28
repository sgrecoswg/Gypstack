import { useState } from "react";


const TextInput = ({id,sectionKey,groupKey,label,value,placeholder,onUpdate})=>{

    const[text,setText] = useState(value);

    return (<div className="form-group">
    <label>{label}</label>
    <input className="form-control" 
     placeholder = {placeholder}
     id={id}
     onChange={(e)=>{         
         setText(e.target.value);
         onUpdate({
            id:id,
            sectionKey:sectionKey,
            groupKey:groupKey,
            value:e.target.value
        });
        }}
     defaultValue={text}/>
    </div>);
};

export default TextInput;