import React from 'react';
import '../Components/styles/Programs.css'
import { useNavigate } from 'react-router-dom';

function Programsdata() {
    const navigate = useNavigate()
    const weightLoss = () =>{
        localStorage.getItem('token');
        navigate('/weightloss')
    }
    const weightgain=()=>{
        localStorage.getItem('token')
        navigate('/weightgain')
    }
    const gymtraining = () =>{
        localStorage.getItem('token')
        navigate('/gymtraining')
    }
    // const yogatraining = () =>{
    //     localStorage.getItem('token')
    //     navigate('/yogatraining')
    // }
    return (
        <div className='programsData'>
            <div onClick={weightLoss} className='card'>
                    <img src='https://media.istockphoto.com/id/610540064/vector/man-before-and-after-sports-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=XA67h0btw3hjVISeO-iyITYo8GDVmfDRIfEj0gwuWAc=' alt=''/>
                    <h4 style={{color:'black',textAlign:'center'}}>Weight loss</h4>
            </div>
            <div onClick={weightgain} className='card'>
                    <img src='https://w7.pngwing.com/pngs/117/794/png-transparent-weight-training-sports-training-bodyweight-exercise-weight-gain-others-miscellaneous-physical-fitness-sport-thumbnail.png' alt=''/>
                    <h4 style={{color:'black',textAlign:'center'}}>Weight Gain</h4>
            </div>
            <div onClick={gymtraining} className='card'>
                    <img src='https://e7.pngegg.com/pngimages/576/568/png-clipart-fitness-centre-physical-fitness-logo-work-out-hand-sticker-thumbnail.png' alt=''/>
                    <h4 style={{color:'black',textAlign:'center'}}>Gym training</h4>
            </div>
            {/* <div onClick={yogatraining} className='card'>
                    <img src='https://media.istockphoto.com/id/610540064/vector/man-before-and-after-sports-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=XA67h0btw3hjVISeO-iyITYo8GDVmfDRIfEj0gwuWAc=' alt=''/>
                    <h4 style={{color:'black',textAlign:'center'}}>Yoga training</h4>
            </div> */}
        </div>
    )
}

export default Programsdata