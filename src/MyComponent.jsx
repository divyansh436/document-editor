import React,{useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function MyComponent(){
    const [value, setValue] = useState ('');
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        
      
        [{ 'header': 1 }, { 'header': 2 }],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],     
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         
      ];
    const module = {
        toolbar: toolbarOptions,
    };
    return <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} />;
}

export default MyComponent;