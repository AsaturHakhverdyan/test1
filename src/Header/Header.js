
import './Header.css';
function Header(){
    return ( 
        <header className='header'>
            <nav className="nav">
                <div className="nav_title">
                    <h1>WelcoMe</h1>
                </div>
                <div className="nav_item">
                    <ul className='ul'>
                      <li><a href="#">Home</a></li> 
                      <li><a href="#">About</a></li> 
                      <li><a href="#">Contact</a></li> 
                      <li><a href="#">Pages</a></li> 
                    </ul>
                </div>
            </nav>
        </header>
     );
}
export default Header;