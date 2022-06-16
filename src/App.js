import React, { useEffect , useState } from 'react';
import './App.css';
import Images from './Images';
import Header from './Header/Header'
import Footer from './Footer/Footer';

function App() {
const [change, setChange] = useState(1);
const [post, setPosts] = useState([]);
const page = 6;
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((json) => {
      setPosts(json) 
    })
  },[])

  let count = Math.ceil(post.length / 6)
  let arr = [];
  for(let i = 1; i <= count; i++){
     arr.push(i);
  }
   return (
    <div> 
      <Header/>
      <div className="App">
          {post.map((item, i) => 
           {
              return i < change * page && i >= (change - 1) * page ? <Images item={item} key={i} index={i}/> : <React.Fragment key={i}></React.Fragment>
           }
          )}
      </div>
      <div className="div_btn">
         {arr.map((el, i) => 
          <div key={i}>
              <button onClick={() => setChange(el)}>{el}</button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};
export default App;