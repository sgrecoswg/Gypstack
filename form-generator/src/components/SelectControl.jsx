import { useState } from "react";


const SelectControl = ({id,sectionKey,groupKey,label,value,options,onUpdate})=>{
    const[items,setItems] = useState(options);
    const[selectedItem,setSelectedItem] = useState(value || {});
    
    return (
    <div className="form-group">
    <label>{label}</label>
    <select className="form-control" 
            id={id}
            value={value || ""}           
            onChange={(e)=>{               
                setSelectedItem(e.target.value);
                onUpdate({
                    id:id,
                    sectionKey:sectionKey,
                    groupKey:groupKey,
                    value:e.target.value
                });
        }}
        >
        <option key={`default`} value={0}>Please select</option>
        {options.map((o,i)=>{
         return (<option key={`select_${i}`}value={o.value} >{o.text}</option>)
        })}
    </select>
    </div>);
};

export default SelectControl;