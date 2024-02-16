import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Quant.css'
import { useState, useEffect } from 'react';

function Quant() {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState(' ');

  useEffect(()=>{
    if(count<0){
      setWarning('Count Cannot be less than 0');
    }
    else if(count>10){
      setWarning('Count Cannot more than 10');
    }
    else{
      setWarning(' ');
    }
  },[count])

  return (
    <div>
        <Navbar />
        <div className='container'>
          <div className='bg-dark-subtle w-25 mx-auto my-5 shadow p-3 rounded-5 border border-dark'>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxsA_VabhcCosqNSlIYnZRLyZwzPGAWW4OYvzlm7j-PUtyrLSj' className='w-100 px-5 rounded-circle'/>
            <h5 className='text-center m-3'>Timex Expedition Scout</h5>
            <p className='text-center'>Black timepiece designed with some bright blue...</p>
            <p className='text-center fs-5'>₹ 7,786.00 &nbsp;&nbsp;<del>₹ 8,999.00</del></p>
            <div className='d-flex justify-content-around'>
            <button className='rounded-5 px-4 border border-dark' onClick={()=>{setCount(count-1)}}>Decrease</button>
              <div className='fs-3'>{count}</div>
              <button className='rounded-5 px-4 border border-dark' onClick={()=>{setCount(count+1)}}>Increase</button>
            </div>
            <p className='text-center war text-danger'>{warning}</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Quant