import { useState } from "react";
import {Card} from 'react-bootstrap';
import DynamicControl from './DynamicControl';



const CustomForm = ({formData,update})=>{

    return (

        <div>
            <h1>{formData.name}</h1>
            <div>
                {formData.sections && formData.sections.map((s)=>{
                    return (
                        <Card key={`section_${s.key}`}>     
                        <Card.Title style={{padding:"10px"}}>{s.title}</Card.Title>                      
                            <Card.Body>
                            {s.groups.map((g)=>{
                                   return(
                                   <>
                                   <h5 key={`group_${g.key}`}>{g.title}</h5>
                                   {g.controls.map((c,i)=>{
                                       return (
                                       <DynamicControl
                                        id={c.id}
                                        sectionKey={s.key}
                                        groupKey={g.key}
                                        key={`control_${i}`}
                                        placeholder={c.placeholder}
                                        type={c.type} 
                                        label={c.label}
                                        value={c.value??null}
                                        options={c.options??[]}
                                        onUpdate={update}
                                        />);                                   
                                   })}
                                   </>);
                                })
                            }                            
                            </Card.Body>
                        </Card>                       
                    );
                })}
            </div>
        </div>
    );
}

export default CustomForm