import { useState,useEffect } from 'react';
import CustomForm from './components/CustomForm';
import { GetForm } from './api/api';
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash";

function App() {

  //we want to be able to save the forms state so we can save it
  const[form,setForm] = useState({});

   //assign it on the first run
    useEffect(()=>{
      let _baseForm = GetForm();
      setForm(_baseForm);
    },[]);

    //we can watch for when the form is changed
    // useEffect(()=>{      
    //   console.log('form set',form);
    // },[form]);

    /**
     * Updates the forms state
     * @param {object} f Control value being passed in
     */
    const updateForm=(f)=>{
      try {
        let _copy = _.cloneDeep(form);//create a copy we can modify

        //get the value that changed
        _copy.sections.find(x=>x.key === f.sectionKey)
             .groups.find(x=>x.key === f.groupKey)
             .controls.find(x=>x.id===f.id)
             .value = f.value;//assign it the value passed in;
                     
       setForm(_copy);//overwrite the previous version
      } catch (error) {
         //log error, for now log to console
         console.error('Error updating form!',error);
      }     
    }

    /**
     * Resets the form 
     */
    const resetForm=()=>{
      let _baseForm = GetForm();
      console.log('reset',_baseForm);
      setForm(_baseForm);
    }

    /**
     * Saves the form to memory
     */
    const saveForm=()=>{

      if (window.confirm(`Are you sure you want to save ${form.name}?`)){
        try {
          //to pass it off to the server we make the object a string
          let _jsonString = JSON.stringify(form);

          //call some post method.....
        } catch (error) {
          //log error, for now log to console
          console.error('Error saving form!',error);
        }
      }      
    }
 

  return (
    <div className="App">
      <div>Your forms</div>      
      <CustomForm formData={form} update={updateForm}></CustomForm>
      <Button variant="dark" onClick={saveForm}>Save</Button>
      <Button variant="primary" onClick={resetForm}>Reset</Button>
    </div>
  );
}

export default App;
