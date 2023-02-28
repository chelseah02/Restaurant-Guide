import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Restaurant from './components/Restaurant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <h1 className='title'> RESTAURANT GUIDE </h1>
      <p className='descr'> This is a helpful resource for college students from UT Dallas to find a variety of delicious and affordable 
      restaurants less than 2 miles from the center of campus. More information coming soon! </p>
      <div className='cards-grid'>
        <Restaurant image="./src/assets/string.jpg" name="The String Bean Richardson" cuisine="American" address='1310 W Campbell Rd Ste 101' dist='0.5' menu="http://www.thestringbean.com/menu.html"/>
        <Restaurant image="./src/assets/bistro.jpg" name="Cappuccino Italian Bistro" cuisine="Italian, Steakhouse" address='1310 W Campbell Rd Ste 135' dist='0.5' menu="https://cappuccinoitalianbistro.com/lunch-menu/"/>
        <Restaurant image="./src/assets/frankie.jpeg" name="Frankie's Mexican Cuisine" cuisine="Mexican" address='2701 Custer Pkwy' dist='1.6'/>
        <Restaurant image="./src/assets/masala.jpeg" name="Masala Wok Richardson" cuisine="Indian, Chinese" address="1310 W Campbell Rd Ste 110" dist='0.5'/>
        <Restaurant image="./src/assets/hinoki.jpg" name="Sushi Hinoki Richardson" cuisine="Japanese, Sushi" address="1310 W Campbell Rd Ste 114" dist="0.5"/>
        <Restaurant image="./src/assets/choco.jpg" name="Chocolate Angel Cafe and Tea Room" cuisine="American, Cafe" address="635 W Campbell Rd Ste 310" dist="0.6"/>
        <Restaurant image="./src/assets/firefly.jpg" name="Sweet Firefly Ice Cream" cuisine="American, Dessert" address="2701 Custer Pkwy Suite 810" dist="1.6"/>
        <Restaurant image="./src/assets/maddie.png" name="La Madeleine French Bakery" cuisine="French" address="1320 W Campbell Rd" dist="0.8"/>
        <Restaurant image="./src/assets/bambu.jpeg" name="Bambu Thai Asian Cuisine" cuisine="Asian, Thai, Seafood" address="1930 N Coit Rd" dist="0.9"/>
        <Restaurant image="./src/assets/pizza.jpg" name="Olive Oil's Pizza Place" cuisine="Pizza, Italian" address="581 W Campbell Rd Ste 129" dist="0.7"/>
        <Restaurant image="./src/assets/greek.jpg" name="Little Greek Fresh Grill" cuisine="Mediterranean,Greek" address="1920 N Coit Rd Ste 241" dist="0.9"/>
        <Restaurant image="./src/assets/rockfish.jpg" name="Rockfish Seafood Grill" cuisine="American, Seafood" address="7639 Campbell Rd # 800" dist="1.0"/>
      </div>
    </div>
  )
}

export default App
