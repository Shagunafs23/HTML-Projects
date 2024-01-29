import{useState} from "react";


export default function CommentsForm(){

    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating: 9
    });

    let handleInputChange = (event)=>{
      setFormData((currData)=>{
        return{...currData,[event.target.name]:event.target.value};
      });
    };
    let handleSubmit =(event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating: 9,
        });
    };

    return(
    <div>
        <h4>Give your Comments</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">UserName</label><br></br>
            <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br></br><br></br>
            <label htmlFor="remarks">Remarks</label><br></br>
            <textarea placeholder="Type here..." value={formData.remarks} onChange={handleInputChange} id="remarks" name="remarks">Remarks</textarea>
            <br></br><br></br>
            <label htmlFor="rating">Rating</label><br></br>
            <input placeholder="rating" type="number" min={1} max={9} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
            <br></br><br></br>
            <button>Add Comment</button>
        </form>
    </div>
    );
}