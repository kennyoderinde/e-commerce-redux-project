import React from 'react'
import "./HomePage.css"
import { useState, useRef } from 'react'



export default function HomePage() {
  // const [formData, setFormData] = useState(
  //   {userName: "", email: "", password: ""}
  // )
  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      password: "", 
      comments: "",
      isFriendly: true,
      tourism: ""
    }
  )


  const [submit, setSubmit] = useState([])

console.log(formData.employment)


  const handleFormData = (e) => {
    const {name, value, type, checked} = e.target
    setFormData(prevFormData => {
      return { 
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }


  return (
    <div className='main-container'>
    <img 
      className='bg-img'
        width={900}
        height={1000}
        src={require("./pexels-photo-1005417.jpeg")}
        alt={"the background "}
      />
      <div className='sub-container'>
        <h2 className='heading'>Tourism Form</h2>
        <em className='emphasis'>Thank you for taking time to help us improve the platform</em>
          <form onSubmit={handleSubmit} className="page-form">
            <input 
              onChange={handleFormData} 
              type="text" 
              className='fname' 
              placeholder='FirstName'
              name= 'firstName'
              value={formData.firstName}
              />

            <input 
              onChange={handleFormData} 
              type="text" 
              className='lname' 
              placeholder='LastName'
              name= 'lastName'
              value={formData.lastName}
              />
            
            <input 
              onChange={handleFormData} 
              type="text" 
              className='email' 
              placeholder='Email'
              name= 'email'
              value={formData.email}
              />
              
            
            <input 
              onChange={handleFormData}
              type="password" 
              className='pass-word' 
              placeholder='Password'
              name= 'password'
              value={formData.password}
              />
            <textarea 
              onChange={handleFormData}  
              className='text-area'
              placeholder='Put your text here'
              name='comments'
              value={formData.comments}
            />

            <br></br>
          <label htmlFor="isFriendly" className='is-friendly'> What's most fascinating about your holiday here?</label>
            {/*This is a checkbox  */}
          <input 
            type="checkbox"
            id="isFriendly"
            checked={formData.isFirendly}  //instead of the value attribute use checked 4 checked box
            onChange={handleFormData}
            name="isFriendly"
            className='questn-check'
          />
          
          {/*  */}
          <fieldset className='fieldset'>
            <legend>More like this ... </legend>

            <input 
              type="radio"
              id="palmtree"
              name="tourism"
              value="palmtree"
              onChange={handleFormData}
            />
            <label htmlFor="palmtree" className='employ-label'>Palm Trees</label>

            <input 
              type="radio"
              id="ocean"
              name="tourism"
              value="ocean"
              onChange={handleFormData}
            />
            <label htmlFor="ocean" className='employ-label'>Ocean</label>

            <input 
              type="radio"
              id="adventure"
              name="tourism"
              value="adventure"
              onChange={handleFormData}
            />
            <label htmlFor="adventure" className='employ-label'>Adventure</label>

            <input 
              type="radio"
              id="lifestyle"
              name="tourism"
              value="lifestyle"
              onChange={handleFormData}
            />
            <label htmlFor="lifestyle" className='employ-label'>Lifestyle</label>
          </fieldset>

          <label htmlFor="favPackages" className='last-label'>What's your favourite vacation package?</label> <br></br>
          <select
              id='favPackages'
              value={formData.favColor}
              onChange={handleFormData}
              name="favPackages"
              className='select'
          >
            <option value="" >Travel Packages</option>
            <option value="red" >Vacations</option>
            <option value="orange" >Tour</option>
            <option value="yellow" >Events</option>
            <option value="green" >Hotels</option>
            <option value="blue" >Cars</option>
            <option value="indigo" >Groups</option>
            <option value="violet" >Blog</option>
          </select>

            <button>Submit</button>

          </form>
      </div>
    </div>
  )
}
