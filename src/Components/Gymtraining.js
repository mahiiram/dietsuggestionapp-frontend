import React, { useState } from 'react'
import Navbar from './Navbar.js';
import '../Components/styles/Weightloss.css';
import axios from 'axios';
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
                    <p>This home workout routine includes all the exercises you need to make sizable muscle and strength gains with minimal equipment.</p>
                </div>
                <div className='Weightgaincontent'>
                    <div className='ImageDiv'>
                        <h1>Workout Routines for Men and women</h1>
                        <img src={image || 'https://png.pngtree.com/png-vector/20201203/ourmid/pngtree-businessman-icon-vector-and-glyph-png-image_2499766.jpg'} alt='profilepicture' />
                    </div>
                    <div className='maincontent'>
                        <img src='https://img.freepik.com/free-photo/woman-enjoying-running-sport_23-2149435860.jpg?w=740&t=st=1687679624~exp=1687680224~hmac=bf08519010cd5a28a6651eba078cc08e9776bc184285c106d49710c17290d24a' alt='gympicture' />
                      <p>When it comes to achieving your best physique, a proper strength training program is essential.</p>
                    <p>Whether you’re looking to transform your body or just kick your training up a notch, it’s important to add training volume (in the form of reps, sets, and weight) to stimulate new muscle growth as you progress.</p>
                    <p>In general, most beginners have been lifting for less than a year, intermediates for at least 1 year, and advanced trainees for at least 2 years. Keep in mind that you should not attempt advanced workouts unless you have appropriate strength training experience</p>
                    <p>This article reviews several high quality exercise regimens for men of all experience levels to maximize muscle and strength gains while ensuring adequate recovery.</p>
                    </div>
                    <div>
                        <img src='https://img.freepik.com/premium-photo/trainer-helping-young-woman-abdominal-exercises-gym_484651-2615.jpg?w=740' alt='gympicture'/>

                        <h1>At-home workout routine </h1>
                        <p>Whether you’re a seasoned expert or new to strength training, working out at home is a great option when you can’t get to the gym or need a change of pace</p>
                        <p>The at-home workouts below require a limited amount of equipment. Plus, some of the movements can be substituted for bodyweight exercises in which you use your body’s own weight as resistance.</p>
                        <p>These exercises can serve as a weeklong beginner routine or be cycled to provide several sessions per week for advanced trainees.</p>
                        <p>If your goal is weight loss, you can add a form of cardio, such as running or cycling, between sessions.</p>
                        <p><b>Equipment required:</b>flat weight bench, appropriate adjustable dumbbells based on your level of experience</p>
                        <p>If you’re just starting out, you may want to visit a specialty store to get expert advice on selecting the right equipment. But if you know what you’re looking for, you can purchase adjustable dumbbells online.</p>
                        <p><b>Rest intervals: </b>60–90 seconds</p>
                    </div>
                    <div>
                        <div className='gifdiv'>

                        <img className='gifimage' src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Stiff_Leg_Deadlift-1.gif?h=840' alt='gympicture'/>
                        </div>
                        <h1>Day 1: Legs, shoulders, and abs</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Day 1: Legs, shoulders, and abs</p></li>
                            <li><p>Shoulders: standing shoulder press — 3 sets of 6–8 reps</p></li>
                            <li><p>Legs: dumbbell lunge — 2 sets of 8–10 reps per leg</p></li>
                            <li><p>Shoulders: dumbbell upright rows — 2 sets of 8–10 reps</p></li>
                            <li><p>Hamstrings: Romanian dumbbell deadlift — 2 sets of 6–8 reps</p></li>
                            <li><p>Shoulders: lateral raises — 3 sets of 8–10 reps</p></li>
                            <li><p>Calves: seated calf raises — 4 sets of 10–12 reps</p></li>
                            <li><p>Abs: crunches with legs elevated — 3 sets of 10–12 reps</p></li>
                        </ul>
                        <h1>Day 2: Chest and back</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Chest: dumbbell bench press or floor press — 3 sets of 6–8 reps</p></li>
                            <li><p>Back: dumbbell bent-over rows — 3 sets of 6–8 reps</p></li>
                            <li><p>Chest: dumbbell fly — 3 sets of 8–10 reps</p></li>
                            <li><p>Back: one-arm dumbbell rows — 3 sets of 6–8 reps</p></li>
                            <li><p>Chest: pushups — 3 sets of 10–12 reps</p></li>
                            <li><p>Back/chest: dumbbell pullovers — 3 sets of 10–12 reps</p></li>
                        </ul>
                        <h1>Day 3: Arms and abs</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Biceps: alternating biceps curls — 3 sets of 8–10 reps per arm</p></li>
                            <li><p>Triceps: overhead triceps extensions — 3 sets of 8–10 reps</p></li>
                            <li><p>Biceps: seated dumbbell curls — 2 sets of 10–12 reps per arm</p></li>
                            <li><p>Triceps: bench dips — 2 sets of 10–12 reps</p></li>
                            <li><p>Biceps: concentration curls — 3 sets of 10–12 reps</p></li>
                            <li><p>Triceps: dumbbell kickbacks — 3 sets of 8–10 reps per arm</p></li>
                        </ul>
                    </div>
                    <div>
                        <h1>Beginner’s workout routine for men</h1>
                        <div className='gifdiv'>
                        <img className='gifimage' src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Lateral_Raise.gif?h=840' alt='gympic' />
                        </div>

                        <p>Starting out in the gym can seem intimidating, but with proper guidance, the process becomes more approachable — and even invigorating.</p>
                        <p>As a beginner, you can progress very quickly because almost any exercise promotes muscle and strength gains. Still, it’s important to avoid overexertion, which can lead to injuries or decreased performance.</p>
                        <p>This workout routine has you in the gym 3 days per week (such as Monday, Wednesday, and Friday), with full-body sessions completed each day. This allows you to get used to new movements, focus on proper form, and take time to recover.</p>
                        <p>You can add reps and sets as needed as you progress.</p>
                        <p>The beginner phase should last as long as you continue to improve. Some people may plateau at around 6 months, whereas others may continue to see results for more than a year.</p>
                        <p><b>Equipment requiredm:</b>fully equipped gym</p>
                        <p><b>Rest periods: </b>90–180 seconds for main movements, 60–90 seconds for accessories</p>
                        <p><b>Intensity:</b> Select a weight that allows you to complete the prescribed reps while leaving about 2 solid reps in the tank.</p>
                    </div>
                    <div>
                    <h1>Day 1: Full body</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Legs: barbell back squats — 3 sets of 5 reps</p></li>
                            <li><p>Chest: flat barbell bench press — 3 set of 5 reps</p></li>
                            <li><p>Back: seated cable rows — 3 sets of 6–8 reps</p></li>
                            <li><p>Shoulders: seated dumbbell shoulder press — 3 sets of 6–8 reps</p></li>
                            <li><p>Triceps: cable rope triceps pushdowns — 3 sets of 8–10 reps</p></li>
                            <li><p>Shoulders: lateral raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Calves: seated calf raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Abs: planks — 3 sets of 30-second holds</p></li>
                        </ul>
                        <h1>Day 2: Full body</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Back/hamstrings: barbell or trap bar deadlifts — 3 sets of 5 reps</p></li>
                            <li><p>Back: pullups or lat pulldowns — 3 sets of 6–8 reps</p></li>
                            <li><p>Chest: barbell or dumbbell incline press — 3 sets of 6–8 reps</p></li>
                            <li><p>Shoulders: machine shoulder press — 3 sets of 6–8 reps</p></li>
                            <li><p>Biceps: barbell or dumbbell biceps curls — 3 sets of 8–10 reps</p></li>
                            <li><p>Shoulders: reverse machine fly — 3 sets of 10–12 reps</p></li>
                            <li><p>Calves: standing calf raises — 3 sets of 10–12 reps</p></li>
                        </ul>
                        <h1>Day 3: Full body</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Legs: leg press — 3 sets of 5 reps</p></li>
                            <li><p>Back: T-bar rows — 3 sets of 6–8 reps</p></li>
                            <li><p>Shoulders: one-arm dumbbell shoulder press — 3 sets of 6–8 reps</p></li>
                            <li><p>Triceps: dumbbell or machine triceps extensions — 3 sets of 8–10 reps</p></li>
                            <li><p>Shoulders: cable or dumbbell front raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Calves: seated calf raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Abs: decline crunches — 3 sets of 10–12 reps</p></li>
                        </ul>
                    </div>
                    <div>
                        <h1>Intermediate workout routine</h1>
                        <div className='gifdiv'>
                        <img className='gifimage' src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/02/400x400_How_to_Exercise_to_Bulk_Up_and_Shape_Your_Body_Overhead_Press.gif?h=840' alt='gympic' />
                        </div>
                        <p>After working hard in the gym for several months, it’s time to step your training up a notch to keep your gains coming.</p>
                        <p>At this point, you should have good exercise technique and be able to handle more weight on the bar.</p>
                        <p>This 4-day-per-week intermediate program increases reps and sets to stimulate new muscle growth. When they become too easy, you can gradually add more weight or more reps/sets.</p>
                        <p>If you do it correctly, you can follow this routine for several years until you reach an advanced level. It may be helpful to switch up your exercises on occasion to keep yourself engaged and prevent burnout.</p>
                        <p>Remember that soreness is not always an indicator of muscle growth. Now that you have some training experience, you may not get sore after every workout.</p>
                        <p><b>Equipment requiredm:</b>fully equipped gym</p>
                        <p><b>Rest periods: </b>90–180 seconds for main movements, 60–90 seconds for accessories</p>
                        <p><b>Intensity:</b> Select a weight that allows you to complete the prescribed reps while leaving about 2 solid reps in the tank. To increase intensity, go to your limit on the last set.</p>
                    </div>
                    <div>
                    <h1>Day 1: Upper body</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Chest: flat barbell bench press — 4 sets of 6–8 reps</p></li>
                            <li><p>Back: bent-over barbell rows — 3 sets of 6–8 reps</p></li>
                            <li><p>Shoulders: seated dumbbell press — 3 sets of 8–10 reps</p></li>
                            <li><p>Chest/triceps: dips — 3 sets of 8–10 reps</p></li>
                            <li><p>Back: pullups or lat pulldowns — 3 sets of 8–10 reps</p></li>
                            <li><p>Triceps/chest: lying dumbbell triceps extensions — 3 sets of 10–12 reps</p></li>
                            <li><p>Biceps: incline dumbbell curls — 3 sets of 10–12 reps</p></li>
                        
                        </ul>
                        <h1>Day 2: Lower body</h1>
                        <ul style={{listStyleType:'square'}}>
                     
                            <li><p>Legs: barbell back squats — 4 sets of 6–8 reps</p></li>
                            <li><p>Legs: leg press — 3 sets of 8–10 reps</p></li>
                            <li><p>Quadriceps: seated leg extensions — 3 sets of 10-12 reps</p></li>
                            <li><p>Quadriceps: dumbbell or barbell walking lunges — 3 sets of 10–12 reps</p></li>
                            <li><p>Calves: calf press on leg press — 4 sets of 12–15 reps</p></li>
                            <li><p>Abs: decline crunches — 4 sets of 12–15 reps</p></li>
                        </ul>
                        <h1>Day 3: Upper body</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Shoulders: overhead press — 4 sets of 6–8 reps</p></li>
                            <li><p>Chest: incline dumbbell bench press — 3 sets of 8–10 reps</p></li>
                            <li><p>Back: one-arm cable rows — 3 sets of 10–12 reps</p></li>
                            <li><p>Shoulders: cable lateral raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Rear deltoids/traps: face pulls — 3 sets of 10–12 reps</p></li>
                            <li><p>Triceps: seated overhead triceps extensions — 3 sets of 10–12 reps</p></li>
                            <li><p>Calves: standing calf raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Biceps: machine preacher curls — 3 sets of 12–15 reps</p></li>
                        </ul>
                        <h1>Day 4: Lower body</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Shoulders: overhead press — 4 sets of 6–8 reps</p></li>
                            <li><p>Chest: incline dumbbell bench press — 3 sets of 8–10 reps</p></li>
                            <li><p>Back: one-arm cable rows — 3 sets of 10–12 reps</p></li>
                            <li><p>Shoulders: cable lateral raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Rear deltoids/traps: face pulls — 3 sets of 10–12 reps</p></li>
                            <li><p>Triceps: seated overhead triceps extensions — 3 sets of 10–12 reps</p></li>
                            <li><p>Calves: standing calf raises — 3 sets of 10–12 reps</p></li>
                            <li><p>Biceps: machine preacher curls — 3 sets of 12–15 reps</p></li>
                        </ul>
                        
                    </div>
                    <div>
                        <h1>Advanced workout routine</h1>
                        <div className='gifdiv'>
                        <img className='gifimage' src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/02/400x400_Hanging_Leg_Raises.gif?h=840' alt='gympic' />
                        </div>                       
                        <p>Additional volume (sets and reps) and intensity (weight on the bar) are essential for advanced gym-goers to keep gaining muscle. Keep in mind that you should not attempt this routine unless you’ve been training consistently for 2 or more years.</p>
                        <p>While the muscle gains won’t come as fast as they did when you were a beginner, there’s still room for significant progress at this stage.</p>
                        <p>This grueling workout routine has you in the gym 6 days per week with 1 rest day in between. It follows a pull-push-legs pattern, hitting each muscle group twice per week, with supersets incorporated for maximum hypertrophy (muscle growth).</p>
                        <p>If you do it correctly, you can follow this routine for several years until you reach an advanced level. It may be helpful to switch up your exercises on occasion to keep yourself engaged and prevent burnout.</p>
                        <p>Again, you can increase weight on the bar, as well as sets and reps, from week to week to ensure continued progress while following this program.</p>
                        <p><b>Equipment requiredm:</b>fully equipped gym</p>
                        <p><b>Rest periods: </b>90–180 seconds for main movements, 60–90 seconds for accessories</p>
                        <p><b>Intensity:</b> Select a weight that allows you to complete the prescribed reps while leaving about 2 solid reps in the tank. To increase intensity, go to failure on the last set.</p>
                        <p><b>Supersets:</b> Complete the initial set of the first movement immediately followed by the second movement. Repeat until all designated reps and sets are complete.</p>
                    </div>
                    <div>
                    <h1>Pull A</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Back/hamstrings: barbell deadlift — 5 sets of 5 reps</p></li>
                            <li><p>Back: pullups or lat pulldowns — 3 sets of 10–12 reps</p></li>
                            <li><p>Back: T-bar rows or seated cable rows — 3 sets of 10–12 reps</p></li>
                            <li><p>Rear deltoids/traps: face pulls — 4 sets of 12–15 reps</p></li>
                            <li><p>Biceps: hammer curls — 4 sets of 10-12 reps supersetted with dumbbell shrugs 4 sets of 10–12 reps</p></li>
                            <li><p>Biceps: standing cable curls — 4 sets of 10–12 reps</p></li>
                        </ul>
                        <h1>Push A</h1>
                        <ul style={{listStyleType:'square'}}>
                     
                            <li><p>Chest: flat barbell bench press — 5 set of 5 reps</p></li>
                            <li><p>Shoulders: seated dumbbell press — 3 sets of 6–8 reps</p></li>
                            <li><p>Chest: incline dumbbell bench press — 3 sets of 10–12 reps</p></li>
                            <li><p>Quadriceps: dumbbell or barbell walking lunges — 3 sets of 10–12 reps</p></li>
                            <li><p>Triceps/shoulders: triceps pushdowns — 4 sets of 10–12 reps supersetted with lateral raises — 4 sets of 10–12 reps</p></li>
                            <li><p>Chest: cable crossovers — 4 sets of 10–12 reps</p></li>
                        </ul>
                        <h1>Legs A</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Legs: barbell back squats — 5 sets of 5 reps</p></li>
                            <li><p>Hamstrings: Romanian dumbbell deadlifts — 3 sets of 6–8 reps</p></li>
                            <li><p>Hamstrings: lying leg curls — 4 sets of 10–12 reps</p></li>
                            <li><p>Hamstrings: lying leg curls — 4 sets of 10–12 reps</p></li>
                            <li><p>Abs: decline crunches — 4 sets of 12–15 reps</p></li>
                        </ul>
                        <h1>Push B</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Shoulders: overhead press — 5 sets of 5 reps</p></li>
                            <li><p>Chest: dumbbell bench press (incline or flat) — 3 sets of 8–10 reps</p></li>
                            <li><p>Chest/triceps: dips (weighted if needed) — 4 sets of 10–12 reps</p></li>
                            <li><p>Shoulders: single-arm cable lateral raises — 4 sets of 10–12 reps</p></li>
                            <li><p>Chest: machine fly — 4 sets of 10–12 reps</p></li>
                            <li><p>Triceps: overhead extensions with rope — 4 sets of 10–12 reps</p></li>
                        </ul>
                        <h1>Legs B</h1>
                        <ul style={{listStyleType:'square'}}>
                            <li><p>Legs: barbell front squats — 5 sets of 5 reps</p></li>
                            <li><p>Hamstrings: glute ham raises — 3 sets of 8–10 reps</p></li>
                            <li><p>Legs: walking dumbbell lunges — 3 sets of 10–12 reps per leg</p></li>
                            <li><p>Quadriceps: seated leg extensions — 4 sets of 10–12 reps supersetted with standing calf raises — 4 sets of 12–15 reps</p></li>
                            <li><p>Abs: hanging leg raises — 4 sets of 12–15 reps</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gymtraining