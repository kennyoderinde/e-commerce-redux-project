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
    <div>
      <h2>Survey Form</h2>
        <form onSubmit={handleSubmit}>
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

        <input 
          type="checkbox"
          id="isFriendly"
          checked={formData.isFirendly}  //instead of the value attribute use checked 4 checked box
          onChange={handleFormData}
          name="isFriendly"
        />
        <label htmlFor="isFriendly"> Are you friendly?</label>
          
        <fieldset className='fieldset'>
          <legend>Current employment status</legend>

          <input 
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            onChange={handleFormData}
          />
          <label htmlFor="unemployed">Unemployed</label>

          <input 
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            onChange={handleFormData}
          />
          <label htmlFor="part-time">Part-time</label>

          <input 
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            onChange={handleFormData}
          />
          <label htmlFor="full-time">Full-Time</label>
        </fieldset>

        <label htmlFor="full-time">What's your favourite color?</label>
        <select
            id='favColor'
            value={formData.favColor}
            onChange={handleFormData}
            name="favColor"
        >
          <option value="" >-- Choose --</option>
          <option value="red" >Red</option>
          <option value="orange" >Orange</option>
          <option value="yellow" >Yellow</option>
          <option value="green" >Green</option>
          <option value="blue" >Blue</option>
          <option value="indigo" >Indigo</option>
          <option value="violet" >Violet</option>
        </select>


          <button>Submit</button>

        </form>
    </div>
  )
}
