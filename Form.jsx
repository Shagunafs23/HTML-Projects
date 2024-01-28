import {useState} from "react";

export default function Form(){
    let[formData,setFormData] = useState({
        fullName:"",
        username:"",
        password:"",
    });

let handleInputChange = (event) =>{
    setFormData((currData)=>{
        return{...currData,[event.target.name]:event.target.value};
    });
};

let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName:"",
        username:"",
        password:"",
    });
};
return(
    <form onSubmit={handleSubmit}>
        <lable htmlFor="fullname">Full Name</lable>
        <input 
        placeholder="Enter Full name"
        type="text"
        value={formData.fullName}
        id="fullname"
        name="fullName"
        onChange={handleInputChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="username">UserName</label>
        <input 
        placeholder="Enter username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="password">password"</label>
        <input 
        placeholder="Enter password"
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
        />
        <button>Submit</button>
    </form>
);
}
