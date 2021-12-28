import TextInput from "./TextInput";
import SelectControl from "./SelectControl";

const DynamicControl = ({id,sectionKey,groupKey,type,label,options,value,placeholder,onUpdate})=>{

    switch(type.toLowerCase()){
        case "text":
            return (<TextInput
                 id={id}
                 sectionKey={sectionKey}
                 groupKey={groupKey}
                 placeholder={placeholder} 
                 label={label}
                 onUpdate={onUpdate}
                 value={value} />);
        case "select":
            return (
                <SelectControl 
                label={label}
                sectionKey={sectionKey}
                groupKey={groupKey}
                options={options}
                onUpdate={onUpdate}
                value = {value??0}
                id={id}
                />);
        default:
            return (<input/>);
    }
};

export default DynamicControl;