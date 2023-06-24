import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.js';
import '../Components/styles/Weightloss.css';
import axios from 'axios';
import Foodcards from './Weightlosscomponents/Foodcards.js';
function WeightLoss() {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const username = localStorage.getItem('username')
    try {
      const res = await axios.get(`https://dietapp.onrender.com/api/user/${username}`)
      setImages(res.data.profile);
    } catch (error) {
      setLoading(error)
    }
  }
  fetchData();

  return (
    <div className="weightloss">
      <Navbar />
      <div className="Main-content" >
        <div className='sidebar'>
          <h1 style={{ display: 'block' }}>Summary</h1>
          <p>Are you looking for the best Indian Diet Plan to loss weight? The rules are simple.  All you need to do is start eating the right food. This can feel like an insurmountable challenge, given our food culture and dietary habits.</p>
        </div>
        <div className='content'>
          <div className='ImageDiv'>
            <h1>Best Indian Diet Plan for Weight Loss</h1>
            <img src={images || 'https://png.pngtree.com/png-vector/20201203/ourmid/pngtree-businessman-icon-vector-and-glyph-png-image_2499766.jpg'} alt='profilepicture' />
          </div>
          <div className='maincontent'>
            <img src='https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=740&t=st=1687510966~exp=1687511566~hmac=839e33213e3563c3f9ef58a4ff624c228a4dee020e6a67fc53dc53ea1dcd3a5e' alt='' />
          </div>
          <div className='card'>
            <h1>Table of contents</h1>
            <ul style={{ listStyleType: 'circle' }}>
              <li>Understand the Science Behind Weight Loss,</li>
              <li>The Best Diet Plan for Weight Loss - Men and Women,</li>
              <li>1200 Calorie Weight Loss Sample Diet Plan for Men and Women,</li>
            </ul>
          </div>
          <p>All you need to do is start eating the right food. This can feel like an insurmountable challenge, given our food culture and dietary habits. For instance, a typical Indian meal is high in carbohydrates and sugar – we eat a lot of potatoes, rice, and sweets.</p>
          <h1>Understand the Science Behind Weight Loss</h1>
          <p>Weight loss and gain revolve around caloric consumption and expenditure. Simply put, you lose weight when you consume fewer calories than you spend and gain weight when you consume more calories than you lose.</p>
          <p>To drop those extra kilos, all you need to do is eat within your calorie budget and burn the required number of calories.</p>
          <p>However, simply determining how many calories your body needs isn’t enough. After all, 2 samosas(550 kcal), 3 slices cheese pizza(450 kcal) and 3 gulab jamuns(450 kcal) may be within your daily requirement of 1500 calories, but these unhealthy food choices will eventually lead to other health problems like high cholesterol and blood sugar.</p>
          <p>To lose weight healthily, you also need to ensure your diet plan is balanced i.e. covers all food groups and provides all the nutrients you need for good health.</p>
          <div>
            <h1>The Best Diet Plan for Weight Loss - Men and Women</h1>
            <p>No single food provides all nutrients that the body needs to stay healthy.</p>
            <p>That’s why a balanced diet consisting of macronutrients like carbohydrates, protein, and fat along with micronutrients such as vitamins and minerals, is recommended.</p>

          </div>
          <div>
            <h1>Weight loss foods</h1>
            <Foodcards />
             </div>
          <div>
            <h1 style={{ color: 'green' }}>7days Diet plan </h1>
            <div>
              <h1>Weight Loss Diet Plan Chart – Day 1</h1>
              <ul style={{ listStyleType: 'circle' }}>
                <li>After starting your day with cucumber water, have oats porridge and mixed nuts for breakfast.</li>
                <li>Next, have a roti with dal and gajar matar sabzi for lunch.</li>
                <li>Follow that up with dal and lauki sabzi along with a roti for dinner.</li>
              </ul>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Day1</th>
                    <th scope="col">Diet chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6:30 AM</td>
                    <td>Cucumber Detox Water (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>8:00 AM</td>
                    <td>Oats Porridge in Skimmed Milk (1 bowl)</td>	
                  </tr>
                  <tr>
                    <td>12:00 PM	</td>
                    <td>Skimmed Milk Paneer (100 grams)</td>	
                  </tr>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Cut Fruits (1 cup) Buttermilk (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Tea with Less Sugar and Milk (1 teacup)</td>	
                  </tr>
                  <tr>
                    <td>8:50 PM	</td>
                    <td>Mixed Vegetable Salad (1 katori),Dal (1 katori) Lauki Sabzi (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>Dal (1 katori) Lauki Sabzi (1 katori)Roti (1 roti/chapati)</td>	
                  </tr>     
                </tbody>
              </table>
            </div>
            <div>
              <h1>Weight Loss Diet Plan Chart - Day 2</h1>
              <ul style={{ listStyleType: 'circle' }}>
                <li>On the second day, eat a mixed vegetable stuffed roti along with curd for breakfast.</li>
                <li>For lunch, have half a katori of methi rice along with lentil curry.</li>
                <li>Next, end your day with sautéed vegetables and green chutney.</li>
              </ul>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Day2</th>
                    <th scope="col">Diet chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6:30 AM</td>
                    <td>Cucumber Detox Water (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>8:00 AM</td>
                    <td>Curd (1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)</td>	
                  </tr>
                  <tr>
                    <td>12:00 PM	</td>
                    <td>Skimmed Milk Paneer (100 grams)</td>	
                  </tr>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Apple (0.5 small (2-3/4″ dia)) Buttermilk (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Coffee with Milk and Less Sugar (0.5 tea cup)</td>	
                  </tr>
                  <tr>
                    <td>8:50 PM	</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati),Green Chutney (2 tablespoon)</td>	
                  </tr>     
                </tbody>
              </table>
            </div>
            <div>
              <h1>Weight Loss Diet Plan Chart - Day 3</h1>
              <ul style={{ listStyleType: 'circle' }}>
                <li>Breakfast on day 3 would include Multigrain Toast and Skim Milk Yogurt.</li>
                <li>In the afternoon, have sauteed vegetables along with paneer and some green chutney.</li>
                <li>Half a katori of methi rice and some lentil curry to make sure you end the day on a healthy note.</li>
              </ul>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Day3</th>
                    <th scope="col">Diet chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6:30 AM</td>
                    <td>Cucumber Detox Water (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>8:00 AM</td>
                    <td>Curd (1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)</td>	
                  </tr>
                  <tr>
                    <td>12:00 PM	</td>
                    <td>Skimmed Milk Paneer (100 grams)</td>	
                  </tr>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati),Green Chutney (2 tablespoon)</td>	
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Banana (0.5 small (6″ to 6-7/8″ long)) Buttermilk (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Tea with Less Sugar and Milk (1 teacup)</td>	
                  </tr>
                  <tr>
                    <td>8:50 PM	</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)</td>	
                  </tr>     
                </tbody>
              </table>
            </div>
            <div>
              <h1>Weight Loss Diet Plan Chart - Day 4</h1>
              <ul style={{ listStyleType: 'circle' }}>
                <li>Start Day 4 with a Fruit and Nuts Yogurt Smoothie and Egg Omelette</li>
                <li>Follow that up with Moong Dal, Bhindi Sabzi, and roti.</li>
                <li>Complete the day’s food intake with steamed rice and palak chole.</li>
              </ul>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Day4</th>
                    <th scope="col">Diet chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6:30 AM</td>
                    <td>Cucumber Detox Water (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>8:00 AM</td>
                    <td>Curd (1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)</td>	
                  </tr>
                  <tr>
                    <td>12:00 PM	</td>
                    <td>Skimmed Milk Paneer (100 grams)</td>	
                  </tr>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati),Green Chutney (2 tablespoon)</td>	
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Banana (0.5 small (6″ to 6-7/8″ long)) Buttermilk (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Tea with Less Sugar and Milk (1 teacup)</td>	
                  </tr>
                  <tr>
                    <td>8:50 PM	</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>Palak Chole (1 bowl) Steamed Rice (0.5 katori)</td>	
                  </tr>     
                </tbody>
              </table>
            </div>
            <div>
              <h1>Weight Loss Diet Plan Chart - Day 5</h1>
              <ul style={{ listStyleType: 'circle' }}>
                <li>Have a glass of skimmed milk and peas poha for breakfast on the fifth day.</li>
                <li>Eat a missi roti with low fat paneer curry in the afternoon.</li>
                <li>End the day with roti, curd and aloo baingan tamatar ki sabzi.</li>
              </ul>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Day5</th>
                    <th scope="col">Diet chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6:30 AM</td>
                    <td>Cucumber Detox Water (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>8:00 AM</td>
                    <td>Skimmed Milk (1 glass) Peas Poha (1.5 katori)</td>	
                  </tr>
                  <tr>
                    <td>12:00 PM	</td>
                    <td>Skimmed Milk Paneer (100 grams)</td>	
                  </tr>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Low Fat Paneer Curry (1.5 katori) Missi Roti (1 roti)</td>	
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Papaya (1 cup 1″ pieces) Buttermilk (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Tea with Less Sugar and Milk (1 teacup)</td>	
                  </tr>
                  <tr>
                    <td>8:50 PM	</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>Curd (1.5 katori) Aloo Baingan Tamatar Ki Sabzi (1 katori),Roti (1 roti/chapati)</td>	
                  </tr>     
                </tbody>
              </table>
            </div>
            <div>
              <h1>Weight Loss Diet Plan Chart - Day 6</h1>
              <ul style={{ listStyleType: 'circle' }}>
                <li>On Day 6, have idli with sambar for breakfast</li>
                <li>For lunch, roti with curd and aloo baingan tamatar ki sabzi</li>
                <li>To end Day 6, eat green gram with roti and bhindi sabzi</li>
              </ul>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Day6</th>
                    <th scope="col">Diet chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6:30 AM</td>
                    <td>Cucumber Detox Water (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>8:00 AM</td>
                    <td>Curd (1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)</td>	
                  </tr>
                  <tr>
                    <td>12:00 PM	</td>
                    <td>Skimmed Milk Paneer (100 grams)</td>	
                  </tr>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati),Green Chutney (2 tablespoon)</td>	
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Banana (0.5 small (6″ to 6-7/8″ long)) Buttermilk (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Tea with Less Sugar and Milk (1 teacup)</td>	
                  </tr>
                  <tr>
                    <td>8:50 PM	</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>Palak Chole (1 bowl) Steamed Rice (0.5 katori)</td>	
                  </tr>     
                </tbody>
              </table>
            </div>
            <div>
              <h1>Weight Loss Diet Plan Chart - Day 7</h1>
              <ul style={{ listStyleType: 'circle' }}>
                <li>On the seventh day, start with besan chilla and green garlic chutney.</li>
                <li>Have steamed rice and palak chole for lunch.</li>
                <li>End the week on a healthy note with low fat paneer curry and missi roti.</li>
              </ul>
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Day7</th>
                    <th scope="col">Diet chart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6:30 AM</td>
                    <td>Cucumber Detox Water (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>8:00 AM</td>
                    <td>Curd (1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)</td>	
                  </tr>
                  <tr>
                    <td>12:00 PM	</td>
                    <td>Skimmed Milk Paneer (100 grams)</td>	
                  </tr>
                  <tr>
                    <td>2:00 PM</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>Apple (0.5 small (2-3/4″ dia)) Buttermilk (1 glass)</td>	
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>Coffee with Milk and Less Sugar (0.5 tea cup)</td>	
                  </tr>
                  <tr>
                    <td>8:50 PM	</td>
                    <td>Mixed Vegetable Salad (1 katori)</td>	
                  </tr>
                  <tr>
                    <td>9:00 PM</td>
                    <td>Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati),Green Chutney (2 tablespoon)</td>	
                  </tr>     
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default WeightLoss