import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const [nama, setNama] = useState('');
  const [kuota, setKuota] = useState('');
  const [kadaluarsa, setKadaluarsa] = useState('');
  const [harga,  setHarga] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [tipe, setTipe] = useState('');
  const [showPreviewSpecs, setShowPreviewSpecs] = useState(false);
  const [showPreviewDescription, setShowPreviewDescription] = useState(false);

  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      nama: nama,
      kuota: kuota,
      kadaluarsa: kadaluarsa,
      harga: harga,
      deskripsi: deskripsi,
      tipe: tipe
    }

    const url = 'http://localhost:3001/addproduct';

    try {
      await axios.post(url, data)
      navigate('/recomended')
    }catch (error) {
      console.log(error)
    }
    console.log(data)
  };

  const handlePreviewOpenS = () => {
    setShowPreviewSpecs(true);
    // alert('bisa')
  }

  const handlePreviewCloseS = () => {
    setShowPreviewSpecs(false);
    // alert('bisa')
  }

  // -------------
  const handlePreviewOpenD = () => {
    setShowPreviewDescription(true);
    // alert('bisa')
  }


  const handlePreviewCloseD = () => {
    setShowPreviewDescription(false);
    // alert('bisa')
  }

  // css
  const field = {
    div: 'flex border items-center p-4 rounded-md my-3 mx-2',
    label: 'font-semibold text-md white whitespace-nowrap',
    input: 'outline-none w-full h-4 p-2'
  }

  const preview = {
    div: 'flex border items-center p-4',
    label: 'relative font-semibold text-md',
    input: 'relative w-full h-3'
  }

  return (
    <div>
        <div className="p-6">

      <header>
        <p className="font-semibold text-2xl">Add Product</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
              <div className={field.div}>
                <label className={field.label} htmlFor="nama">Provider:</label>
                <input className={field.input} type="nama" id="nama" name="nama" onChange={(e) => (setNama(e.target.value))} />
              </div>

              <div className={field.div}>
                <label className={field.label} htmlFor="kuota">Kuota:</label>
                <input className={field.input} type="text" id="kuota" name="kuota" onChange={(e) => (setKuota(e.target.value))}/>
              </div>

              <div className={field.div}>
                <label className={field.label} htmlFor="kadaluarsa">Masa Aktif:</label>
                <input className={field.input} type="text" id="kadaluarsa" name="kadaluarsa" onChange={(e) => (setKadaluarsa(e.target.value))} />
              </div>

              <div className={field.div}>
                <label className={field.label} htmlFor="harga">Harga:</label>
                <input className={field.input} type="text" id="harga" name="harga" onChange={(e) => (setHarga(e.target.value))} />
              </div>

              <div className={field.div}>
                <label className={field.label} htmlFor="tipe">Tipe:</label>
                <input className={field.input} type="text" id="tipe" name="tipe" onChange={(e) => (setTipe(e.target.value))} />
              </div>

              <div onClick={handlePreviewOpenD} className={field.div}>
                <label className={field.label} htmlFor="deskripsi">Deskripsi:</label>
                <div>{deskripsi}</div>

                {showPreviewDescription && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 w-[600px] h-[300px] rounded-lg shadow-md">
                      <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold">Description</h3>
                        <button onClick={(e) => {
                        e.stopPropagation();handlePreviewCloseD()}}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="whitespace-pre-line">
                         <textarea className={field.input} id="deskripsi" name="deskripsi" onChange={(e) => (setDeskripsi(e.target.value))} />
                      </div>
                    </div>
                  </div>
              )} 
              {/* ....... */}
              </div>
              {/* <div onClick={handlePreviewOpenS}className={field.div}>
                <label className={field.label} htmlFor="specs">Specs:</label>
                <div>{specs}</div>

              {showPreviewSpecs && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 w-[600px] h-[300px] rounded-lg shadow-md">
                      <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold">Specs</h3>
                        <button onClick={(e) => {
                        e.stopPropagation();handlePreviewCloseS()}}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="whitespace-pre-line">

                      <textarea className={field.input} id="specs" name="specs" onChange={(e) => (setSpecs(e.target.value))}/>
                      </div>
                    </div>
                  </div>
              )}
              </div> */}
              
        </div>
        <button className="ml-2 w-1/3 border border-[#222121] p-2 rounded-md hover:bg-[#222121] hover:text-white font-medium" type="submit">Submit</button>
      </form>
      </div>

    </div>
  );
};

export default AddProduct;

// import { useState } from 'react';

// import React from 'react'

// export const AddProduct = () => {
//   const [product, setProduct] = useState('');
//   const [price, setPrice] = useState('');
//   const [diskon, setDiskon] = useState('');
//   const [prev, setPrev] = useState('');
//   const [store, setStore] = useState('');
//   const [rating, setRating] = useState('');
//   const [sold, setSold] = useState('');
//   const [description, setDescription] = useState('');
//   const [specs, setSpecs] = useState([]);


//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>product</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>price</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>diskon</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>prev</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>store</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>rating</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>sold</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>description</label>
//             <input type="text"></input>
//           </div>

//           <div>
//             <label>specs</label>
//             <input type="text"></input>
//           </div>
//         </form>
//     </div>
//   )
// }
