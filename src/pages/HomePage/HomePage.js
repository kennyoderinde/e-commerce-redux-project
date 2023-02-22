import React from 'react'
import "./HomePage.css"
import { useState } from 'react'



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
      employment: ""
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
        src={require("./pexels-photo-15049185.jpeg")}
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
          <label htmlFor="isFriendly" className='is-friendly'> What's most fascinating about tourism here?</label>
            
          <input 
            type="checkbox"
            id="isFriendly"
            checked={formData.isFirendly}  //instead of the value attribute use checked 4 checked box
            onChange={handleFormData}
            name="isFriendly"
            className='questn-check'
          />
          
          <fieldset className='fieldset'>
            <legend>Employment Status </legend>

            <input 
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              onChange={handleFormData}
            />
            <label htmlFor="unemployed" className='employ-label'>Unemployed</label>

            <input 
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              onChange={handleFormData}
            />
            <label htmlFor="part-time" className='employ-label'>Part-time</label>

            <input 
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              onChange={handleFormData}
            />
            <label htmlFor="full-time" className='employ-label'>Full-Time</label>
          </fieldset>

          <label htmlFor="full-time" className='last-label'>What's your favourite color?</label> <br></br>
          <select
              id='favColor'
              value={formData.favColor}
              onChange={handleFormData}
              name="favColor"
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
