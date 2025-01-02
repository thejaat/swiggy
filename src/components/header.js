import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const title = (<h3 className="text-white ">Swiggy</h3>)

const Header = () => {
        return (
                <div className="header p-3">
                        <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                        {title}
                      
                        <nav>
                                <ul className="d-flex list-unstyled mt-2">
                                        <li className="me-3">
                                                <Link to="/" className="text-white text-decoration-none ">Home</Link>
                                        </li>
                                        <li className="me-3">
                                        <Link to="/about" className="text-white text-decoration-none ">About</Link>
                                        </li>
                                        <li className="me-3">
                                        <Link to="/contact" className="text-white text-decoration-none ">Contact</Link>
                                        </li>
                                        <li className="text-white text-decoration-none me-3">Cart <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} /></li>
                                        {/* <li className="text-white text-decoration-none btn btn-primary">login</li> */}
                                </ul>
                        </nav>
                        </div>
                        </div>
                </div>

        )
}

export default Header