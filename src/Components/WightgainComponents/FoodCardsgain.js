import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import '../Weightlosscomponents/Foodcards.css'


function FoodCardsgain() {

  const [foods, setFoods] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`https://dietapp.onrender.com/api/getweightlossfoods`)

    if (res.status !== 201) {
      return console.log("No data")
    }
    const resdata = await res.data;
    return resdata
  }
  useEffect(() => {
    fetchData().then((res) => setFoods(res.foods)).catch((err) => console.log(err))
  }, [])
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div >
        <Carousel responsive={responsive}>
        {foods.map((data) => {
          return (
            <div className='whitecard'>
              <img style={{borderRadius:'0'}} src={data.images} alt='' />
              <div className='info'>
              <h1>{data.name}</h1>
              <p>{data.calorie}</p>
              </div>
            </div>
          )
        })}
        </Carousel>
   
    </div>
  )
}


export default FoodCardsgain