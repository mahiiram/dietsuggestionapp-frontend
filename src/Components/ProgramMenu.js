import React, { useState } from 'react'
import '../Components/styles/Hero.css';
import {  useNavigate } from 'react-router-dom';
import Heart from '../Components/assets/heart.png';
import Navbar from './Navbar';

function ProgramMenu() {
    const navigate = useNavigate()
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState("")
    const calculatebmi = (event) => {
        event.preventDefault();
        if (height <= 3 || weight <= 3) {
            alert('invalid input')
        }else if(!height && !weight){
            alert('Enter valid input')
        }
         else {
            let bmi = (weight / (height / 100) ** 2);
            setBmi(bmi.toFixed(2));
            if (bmi < 18.5) {
                setMessage('You are underweight')
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                setMessage('you are healthy weight')
            } else if (bmi >= 25 && bmi <= 29.9) {
                setMessage('you are overWeight')
            } else {
                setMessage('you are obese')
            }

        }
        
    }
    function userLogout(){
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/')
      }
      function userprofile(){
        localStorage.getItem('token');
        localStorage.getItem('username');
        navigate('/profile')
      }
    return (
        <div className='hero'>
            <div className='hero-left'>
                <Navbar />
                <div className='BMI-calculator'>
                    <div>
                        <h1>BMI calculator</h1>
                        <form onSubmit={calculatebmi}>
                            <div className="form-floating mb-3">
                                <input value={weight} onChange={(e) => setWeight(e.target.value)} type="Number" className="form-control" id="floatingInput" placeholder="Enter your weight" />
                                <label for="floatingInput">Weight</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={height} onChange={(e) => setHeight(e.target.value)} type="Number" className="form-control" id="floatingInput" placeholder="Enter your Height" />
                                <label for="floatingInput">Height</label>
                            </div>
                            <div className='button-div'>
                                <button type="submit" className="btn btn-success">Submit</button>
                                <button style={{ textDecoration: 'none' }} type="button" className="btn btn-link">Reload</button>
                            </div>
                        </form>
                        <div className='center'>
                            <h3 style={{ color: 'white',textAlign:'center' }}>{bmi}</h3>
                            <h4 style={{ color: 'green',textAlign:'center' }}>{message}</h4>
                        </div>
                    </div>

                </div>
                <div className='Card-div'></div>
            </div>
            <div className='hero-right'>
            <div className='buttondiv'>
            <button onClick={userprofile} className='btn-orange'>Profile</button>
            <button onClick={userLogout} className='btn-orange'>Logout</button>
            </div>
                    

                <div className='heart'>
                    <img src={Heart} alt='heartpng' />
                    <span>Heart Rate</span><span>BBM</span>
                </div>
            </div>
        </div>
    )
}

export default ProgramMenu