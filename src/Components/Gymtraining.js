import React, { useState } from 'react'
import Navbar from './Navbar.js';
import '../Components/styles/Weightloss.css';
import axios from 'axios';
import FoodCardsgain from './WightgainComponents/FoodCardsgain.js';
function Gymtraining() {
    const [image, setImage] = useState();
    

    const fetchData = async () => {
        const username = localStorage.getItem('username')
        try {
            const res = await axios.get(`https://dietapp.onrender.com/api/user/${username}`)
            setImage(res.data.profile);
        } catch (error) {
           return console.log(error)
        }
    }
    fetchData();

    return (
        <div className="weightloss">
            <Navbar />
            <div className="Main-content" >
                <div className='sidebar'>
                    <h1 style={{ display: 'block' }}>Summary</h1>
                    <p>Are you looking for the best Indian Diet Plan to gain weight? The rules are simple.  All you need to do is start eating the right food. This can feel like an insurmountable challenge, given our food culture and dietary habits.</p>
                </div>
                <div className='Weightgaincontent'>
                    <div className='ImageDiv'>
                        <h1>Weight Gain Diet & Food Plans for Healthy Living</h1>
                        <img src={image || 'https://png.pngtree.com/png-vector/20201203/ourmid/pngtree-businessman-icon-vector-and-glyph-png-image_2499766.jpg'} alt='profilepicture' />
                    </div>
                    <div className='maincontent'>
                        <img src='https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=740&t=st=1687510966~exp=1687511566~hmac=839e33213e3563c3f9ef58a4ff624c228a4dee020e6a67fc53dc53ea1dcd3a5e' alt='' />

                        <p>The struggle of being underweight is as hard as being overweight. In addition, being underweight comes with its own set of health challenges, such as fatigue, weak immunity, frequent infections, fragile bones, pale skin, and brittle hair. Therefore, it is imperative to choose an efficient and healthy diet plan for weight gain.</p>
                    </div>
                    <div className='card'>
                        <h1>Table of contents</h1>
                        <ul style={{ listStyleType: 'circle' }}>
                            <li>What is a Healthy Weight Range?</li>
                            <li>Potential Causes Of Being Underweight</li>
                            <li>Weight Gain Diet Tips for Healthy Weight</li>
                            <li>3000 Calories – Diet Plan for Weight Gain</li>
                            <li>Continental Diet Plan for Weight Gain</li>
                            <li>Foods To Avoid In Your Weight Gain Diet Plan</li>
                        </ul>
                    </div>
                    <div>
                        <p>There are two major nutritional factors that dictate the rate of muscular growth and fat loss in our bodies. These are calories and macronutrients. Thus, these two influencers should be kept under consideration when selecting the foods to be incorporated into your weight gain diet.</p>
                        <p>When muscle building is the aim, additional calories are needed. Being in a calorie surplus over a period of time in combination with strength training will result in significant muscular hypertrophy (growth). Gaining muscle requires consistency in terms of dietary choices and activity levels. Fortunately enough, just as there are diet plans to lose weight, there are diet plans for weight gain.</p>
                        <p>A diet plan for weight gain focuses on high-calorie and good-quality protein and healthy fat intake. A proper diet plan for weight gain provides you with essential nutrients while helping you build muscle mass.</p>
                        <p>If you are struggling to find the perfect diet plan to gain weight, then you have come to the right place. This article covers all aspects of a good diet plan that will help you gain weight</p>
                        <h1>What is a Healthy Weight Range?</h1>
                        <p>Your Body Mass Index (BMI) determines your healthy weight range. To calculate your BMI, divide your body weight by your height in a meter square. The answer you get is your BMI. </p>

                        <h1>BMI MEASUREMENT AND WEIGHT CATEGORY FOR SOUTH EAST ASIANS</h1>
                        <ul style={{ listStyleType: 'circle' }}>
                            <li>Below 18.5: Underweight</li>
                            <li>18.5 to 23: Healthy or Normal</li>
                            <li>23 to 27.5 : Overweight</li>
                            <li>Above 27.5: Obese</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Weight Gain foods</h1>
                        <FoodCardsgain />
                    </div>
                    <div>
                        <h1 style={{ color: 'green' }}>Potential Causes Of Being Underweight</h1>
                        <div>
                            <h1>1. High Metabolism </h1>
                            <p>The process by which food gets converted into energy is called metabolism. Metabolism greatly impacts how many calories the body burns and the higher the metabolism, more is the more calorie burn. High metabolism can also be genetic.</p>
                            <p>The higher the metabolic rate, the lesser the weight gain. It is to say that people with a high metabolic rate remain lean and find it difficult to gain weight. </p>
                        </div>
                        <div>
                            <h1>2. Family History </h1>
                            <p>Our genes play a significant role in deciding our body structure and weight.</p>
                            <p>If you have a low BMI and a lean body genetically, it will affect your weight. The genes also play a role in determining the rate of metabolism. As a result, the BMR rates differ between families</p>
                        </div>
                        <div>
                            <h1>3. Physical Disorders </h1>
                            <p>Regular nausea, vomiting, and diarrhea are common symptoms of various diseases, making it difficult for the suffering individual to gain weight.</p>
                            <p>Other conditions may decrease a person’s appetite, so they do not feel like eating. Examples include cancer, diabetes, thyroid disorders, and digestive conditions, such as Crohn’s disease or ulcerative colitis.</p>
                            <p>Certain medications that treat these illnesses may also suppress appetite or affect the taste that causes one reluctance towards food. Furthermore, some disorders like that of the thyroid gland (hyperthyroidism/ hypothyroidism) directly affect weight management. </p>
                        </div>
                        <div>
                            <h1>4. Mental Illness</h1>
                            <p>Poor mental health can affect a person’s ability to eat. Conditions like depression, anxiety, obsessive-compulsive disorder (OCD), and eating disorders, such as anorexia and bulimia can affect a person’s body image and appetite.</p>

                        </div>
                        <div>
                            <h1>5. Chronic Stress </h1>
                            <p>The recognition that stress can cause serious diseases has been a hot topic for research since it affects weight at multiple levels. While stress causes headaches, poor diet, and disturbances in sleep cycles in many people, it has worse consequences such as unexplained weight loss. </p>
                            <p>Your body prepares for an ‘acute stress response’ by generating hormones like adrenaline. According to research, adrenaline can reduce your urge to eat while simultaneously preparing your body for strenuous activity. It is due to the neurological system telling the adrenal glands above the kidneys to initiate a “fight-or-flight” response.</p>
                            <p>This heightened mental state momentarily suppresses appetite. But this adrenaline rush doesn’t last long, and soon after, you’ll feel tired, and the same vicious cycle continues.</p>
                            <p>Stress alters your metabolism, which results in weight loss. In addition, it interferes with the brain’s ability to communicate with the gastrointestinal (GI) system, which makes GI symptoms more noticeable.</p>
                            <p>Many GI symptoms, including nausea, gas, diarrhoea, abdominal pain, bloating, and difficulty swallowing, can be brought on by stress. These signs may influence a person’s eating patterns, resulting in weight loss</p>
                            <p></p>
                        </div>
                        <div>
                            <h1>6. Enzyme deficiency</h1>
                            <p>Deficiencies of digestive enzymes and/or stomach acids may also hamper digestion and absorption of food thus causing weight loss.</p>
                        </div>
                        <div>
                            <h1>Weight Gain Diet Tips for Healthy Weight</h1>
                            <div>
                                <h1>1. Consume High-Calorie Food</h1>
                                <p>A calorie-rich diet is necessary to gain the right amount of weight according to your body type. A nutritionist can help you determine how many calories you should consume daily based on age, gender, metabolism, body composition, and physical activity.</p>
                                <p>Consuming fewer calories than you burn will result in weight loss, so if you’re looking to gain weight or build muscle, you may need to increase your daily calorie intake by 500 or more.</p>
                                <p>An average person gains 1-2 pounds kg body weight every week by increasing 500 to 1000 calories daily. However, the type of weight acquired (fat or muscle) depends on the exercise regime and the intake of macronutrients.</p>
                                <p>Nuts and seeds contain polyunsaturated fats that add healthy calories to your diet. Pistachios, almonds, walnuts, cashews, sunflower seeds, flax seeds, and pumpkin seeds are some great options for you. If you’re not keen on snacking on nuts, you can pack in extra calories with nut butter.</p>
                                <p>One tablespoon of peanut butter, for example, has about 95 calories as per USDA.  Some more nutritious high-calorie food that you may include in your diet are homemade granola bars, tofu, avocados, chickpeas, etc. </p>
                            </div>
                            <div>
                                <h1>2. Consume Healthy Carbs</h1>
                                <p>Carbohydrates are among the most misunderstood nutrients. Though it is true that excess consumption of carbohydrates leads to a higher fat content in the body. However, if consumed in regulated quantities, the benefits to be reaped from carbohydrates are also significant.</p>
                                <p>They are considered fuel for metabolism and are the major energy-providing foods. Carbohydrates provide constant energy to the body for those involved in regular physical activity.</p>
                                <p>It is a must that you include healthy carbohydrates in your diet while discontinuing the consumption of high-sugar foods and refined grains</p>

                            </div>
                            <div>
                                <h1>3. Have Protein-Rich Diet</h1>
                                <p>Protein deficiency can make you lose muscle mass and which in turn slows down metabolism. Take at least 1.5-2 grams of protein per kg of your body weight to gain weight and build lean muscle mass.</p>
                                <p>A recent study found that a high-protein diet can lead to increased muscle mass. People whose diet consists of more than 20% protein, particularly animal protein, are more likely to gain more than those with 10% protein. Chicken breast, turkey, nuts, legumes, beans, fish, eggs, and milk are excellent sources of lean proteins.</p>

                            </div>
                            <div>
                                <h1>4. Reduce Stress</h1>
                                <p>Weight loss associated with stress is common, whether it be from skipping meals, experiencing digestive problems, or engaging in intense exercise as a coping method.</p>
                                <p>There are several self-help methods you can do to reduce stress. You may prevent stress-related weight loss by developing a support network, learning to handle stress through meditation, and making sure you routinely eat nourishing meals. You should see a doctor if you cannot manage stress, or encounter persistent, unintentional weight loss.</p>
                            </div>
                            <div>
                                <h1>5. Strength Training </h1>
                                <p>Strength training is an excellent way to target numerous muscle groups and increase their strength. Adding additional workouts and weights to your schedule will help you gain lean muscle mass</p>
                                <p>It is recommended that you work with a fitness coach to start a  strength training plan tailor-made just for you. The right set of exercises can keep your body toned and defined. Pushups, lunges and squats are some of the exercises that you can include in your workout.</p>
                            </div>
                            <div>
                                <h1>6. Get Good Sleep </h1>
                                <p>People often give all the needed attention and more to a proper diet and workout, while ignoring the fact that getting the required amount of sleep is equally important.</p>
                                <p>Ghrelin and leptin are two hormones that shape our appetite and hunger signals. Ghrelin is the ‘hunger’ hormone that tells you when to eat, while leptin gives the feeling of fullness.</p>
                                <p>Sleep deprivation alters the circadian rhythm of the body thereby causing a disbalance of these hormones which directly impacts your appetite.</p>
                                <p>One may indulge in binge eating during night or may not get hungry at all. Not having a proper diet will lead to fatigue and exhaustion resulting in an inability to perform any physical activity for weight management.</p>
                            </div>
                        </div>
                        <div>
                            <h1>3000 Calories – Diet Plan for Weight Gain</h1>
                            <p>Given below is a sample diet plan to assist you to gain a healthy body weight. You can alter the program according to your food choices, age, sex, level of physical activity, and calorie requirements. </p>
                        </div>
                        <div>
                            <h1>Here’s an example of a 3000 calories diet plan for weight gain based on Indian meal preferences.</h1>

                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Meal Time </th>
                                        <th scope="col">Meal</th>
                                        <th scope="col">Food Items</th>
                                        <th scope="col">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Early Morning</td>
                                        <td>Breakfast	</td>
                                        <td>1 glass of milk, 2 boiled eggs or bananas, 6-7 pieces of soaked almonds</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td>Breakfast</td>
                                        <td>Breakfast</td>
                                        <td>2 vegetable or paneer stuffed parathas with 1 cup of curd or 2 masala dosa with vegetable sambhar and chutney or 2 moong dal chillas with paneer stuffing or 2 eggs omelette with 3-4 slices of toasted whole wheat or multigrain bread</td>
                                        <td>800</td>
                                    </tr>
                                    <tr>
                                        <td>Early Afternoon</td>
                                        <td>Snack</td>
                                        <td>Handful of mixed nuts or Sesame seed Chikki or dry fruit Chikki, handful of roasted almonds with one glass of curd lassi</td>
                                        <td>800</td>
                                    </tr>
                                    <tr>
                                        <td>Lunch</td>
                                        <td>Lunch</td>
                                        <td>2 medium chapattis, 1 cup of vegetable of your choice, chicken breast or fish, yoghurt, 1 cup dal, and 1 cup rice</td>
                                        <td>800</td>
                                    </tr>
                                    <tr>
                                        <td>Evening</td>
                                        <td>Snack</td>
                                        <td>1 cup of tea or coffee with full-fat milk, 3-4 wholewheat or Sesame biscuits or Nachni Chilla, Poha with peanuts, potato and peas or makhanas roasted with ghee</td>
                                        <td>400</td>
                                    </tr>
                                    <tr>
                                        <td>Dinner</td>
                                        <td>Dinner</td>
                                        <td>1 bowl of chicken or mixed vegetable soup or 2 medium chapatis with 1 cup of vegetables, chicken breast/fish fillet/egg, tofu or paneer, 1 cup dal, 1 cup rice, and mixed salad</td>
                                        <td>800</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h1>Continental Diet Plan for Weight Gain</h1>

                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Meal</th>
                                        <th scope="col">Food Items</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Breakfast</td>
                                        <td>– 3-4 toasted whole-grain pieces of bread</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>-2 tbsp of peanut butter</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– 2 boiled eggs</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– 1 glass of hot chocolate with good quality</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>-cocoa or milk</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– 1 fruit of your choice</td>
                                    </tr>
                                    <tr>
                                        <td>Lunch</td>
                                        <td>– Chicken breast or grilled Fish Fillet</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– Whole wheat pasta or 1 cup of brown rice and legumes</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– 1 cup salad with olive oil dressing</td>
                                    </tr>
                                    <tr>
                                        <td>Evening</td>
                                        <td>– Tea/coffee with whole wheat scones or muffins</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– A fistful of mixed nuts and seeds</td>
                                    </tr>
                                    <tr>
                                        <td>Dinner</td>
                                        <td>– Lamb chop or fish fillet or tofu shallow fried in olive oil</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– Sweet potato mash or cauliflower mash with milk</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– 1 cup salad with olive oil dressing</td>
                                    </tr>
                                    <tr>
                                        <td>Dessert</td>
                                        <td>– Full-fat cream with fruits and nuts</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– Yoghurt</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>– Fruit pancakes with maple syrup or honey</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h1>Foods To Avoid In Your Weight Gain Diet Plan</h1>
                            <p>While consumption of healthy foods can lead to sustainable weight gain that supports good health, there are a few food items that cause unhealthy weight gain.</p>
                            <p>They contain ‘empty calories’ that lead to fat accumulation in our bodies. This fat can be the root cause of various health conditions ranging from obesity and hypertension to diabetes and stroke. </p>

                        </div>
                        <div>
                            <h1>Examples of such foods are </h1>

                        </div>
                        <div>
                            <h1>1. Junk Food</h1>
                            <p>Avoid eating processed foods like biscuits, chips, pastries, candies, ice cream and other quick snacks.</p>
                            <p>These processed foods are packed with preservatives, and refined flour. There’s documented evidence that links processed foods and obesity. Choose to eat healthy snacks like fruits and nuts as alternatives.</p>
                        </div>
                        <div>
                            <h1>2. Refined carbs</h1>
                            <p>Refined flour and its products lacks nutritional value. As it has been subjected to a heavy manufacturing process, it loses its health benefits and is packed with empty calories.</p>
                            <p>Choose healthier options like whole wheat flour, raagi, jowar, bajra, oats or multigrain flour instead of refined flour.</p>
                        </div>
                        <div>
                            <h1>3. Carbonated drinks</h1>
                            <p>Most aerated beverages available in the market have been doused with sugars and preservatives. Sugar has no nutritional value and is added only for taste.</p>
                            <p>Liquid calories also increase your appetite, making you consume more unhealthy food than usual. This study proves the claims above about the relationship between sugary drinks and unhealthy weight gain. Cut out sweetened beverages from your diet and result consume healthy alternatives like fresh fruit juices, tender coconut and smoothies for proper weight gain results.</p>
                        </div>
                        <div>
                            <h1>4. Alcohol</h1>
                            <p>The fallouts of alcohol consumption are exponentially high as proven by studies. One way alcohol negatively impacts your body is by increasing the risk of abdominal obesity. Beer, in particular, is filled with carbohydrates and is known to cause an increase in weight over time.</p>
                            <p>Alcohol consumption causes greater hunger and less satiety further pushing one to make poor food choices. Alcohol even causes stress on the stomach and the intestines.</p>
                            <p>This leads to a decrease in digestive secretions through the tract which is essential for healthy digestion. Alcohol intake of all levels can lead to impaired digestion further affecting your metabolism and subsequent weight management.</p>
                        </div>
                        <div>
                            <h1>DietApp Suggestion </h1>
                            <p>Gaining weight can be as much of a challenge as losing weight. Many factors such as high BMI, stress and medical conditions such as diabetes and hyperthyroidism can cause one to be underweight. A healthy diet rich in protein, complex carbs and healthy fats along with gradually increased portions will help in healthy weight gain. Adding strength training will build muscle mass and keep you fit.</p>
                            <p>A healthy diet rich in protein, complex carbs and healthy fats along with gradually increased portions will help in healthy weight gain. Adding strength training will build muscle mass and keep you fit.</p>
                        </div>
                        <div>
                            <h1>Conclusion </h1>
                            <p>A typical diet plan for weight gain recommends at least three big meals in a day with atleast two snacks. However, if you do not like eating at once, you can divide your diet plan for weight gain into five to six smaller meals.</p>
                            <p>According to nutritionists, it is best to avoid processed and sugary foods in your weight gain diet.</p>
                            <p>Apart from a good diet plan for weight gain, other factors like exercise, sleep, and lifestyle, also play a significant role. Therefore, choose a diet plan that suits your body and fits your lifestyle. Remember, gaining or losing weight is a journey and requires constant motivation. So keep yourself motivated, eat healthily, exercise regularly, and live stress-free.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gymtraining