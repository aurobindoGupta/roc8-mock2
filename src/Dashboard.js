import ProductList from "./ProductList";
import { Link } from "react-router-dom";
const Dashboard=()=>{

    return(
        <div>
            <nav style={{backgroundColor:"blue"}}>
                <div className="navbar">
                <img className="logo" src='flipkart.png' height="25" alt=""></img>
                <input className="search"placeholder="search"></input>
                    <div className="nav-links">
                    <ul>
                        <li><button>Login</button></li>
                        <li><button>More</button></li>
                        <li><button><Link to="/cart">cart</Link></button></li>
                    </ul>
                    </div>
                </div>
        
            </nav>
            <div>
            <ProductList/>
            </div>
        </div>
    )
}
export default Dashboard;