import {useEffect , useState } from 'react';
import Images from './Images';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import './App.css';

const DEFAULT_PAGE = 6;
const API_URL = 'https://fakestoreapi.com';

function App() {
const [currentPage, setCurrentPage] = useState(1);
const [error, setError] = useState('');
const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then((json) => {
        setPosts(json) 
      })
      .catch(error => setError(error.message))
  }, [])

  const count = Math.ceil(post.length / 6)
  const pages = [];
  for(let i = 1; i <= count; i++){
     pages.push(i);
  }
   return (
    <div> 
      <Header/>
      <div className="App">
          {posts.map((post, i) => i < currentPage * DEFAULT_PAGE && i >= (currentPage - 1) * DEFAULT_PAGE ? <Images post={post} key={i} /> : null)}
      </div>
      <div className="div_btn">
         {pages.map((page, i) => 
          <div key={i}>
              <button onClick={() => setCurrentPage(page)}>{page}</button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};
export default App;
