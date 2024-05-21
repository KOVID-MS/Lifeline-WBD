import React, { useState } from 'react'
import axios from 'axios'

function HotelForm() {
  const [name, setName] = useState('')
  const [price,setPrice] = useState('')
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  async function uploadHotel(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price',price);
    formData.append('image', file);
    try {
      const response = await axios.post('http://localhost:3000/uploadhotel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.status === 'uploaded') {
        alert('hotel uploaded successfully');
      } else {
        alert('Error while uploading hotel')
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
  }

  return (
    <div >
      <div >
        <div >Enter your hotel</div>
      </div>
      <div>
        <div >
          <div >
            <form  method='POST' action='/uploadhotel' encType='multipart/form-data' onSubmit={uploadHotel} >
              <label >Name</label>
              <input type='text'  placeholder='Name' onChange={(e) => { setName,(e.target.value) }} required />
              <label >price</label>
              <input type='text' placeholder='Price'  onChange={(e) => { setPrice(e.target.value) }} required>
              </input>
              <label  >Upload an Image of the hotel room</label>
              <input type='file' name='image' onChange={handleFileChange} required />
              <div >
                <button >Upload</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HotelForm