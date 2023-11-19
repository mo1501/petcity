import { useState } from 'react';
import { useSelector } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import SearchBar from '../search-bar/search-bar.component';

import './navbar-drawer.styles.css'

function NavbarDrawer({ isDrawerOpen }) {
    const [show, setShow] = useState(isDrawerOpen);

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(isDrawerOpen);
    const products = useSelector(state => state.products.products);
    return (
        <>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='drawer-title'>
                        <Link className="link" to='/home'>
                            <span className="categories-span">Welcome to Petcity</span>
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='drawer-items'>
                    <div className='drawer-searchbar'>
                        <SearchBar products={products} />
                    </div>

                    <Link className="link" to='/home/categories'>
                        <span className="categories-span">Categories</span>
                    </Link>
                    <Link className="link" to='/home/deals'>
                        <span className="deals-span">Deals</span>
                    </Link>
                    <Link className="link" to='/home/cart'>
                        <span className="deals-span">Cart</span>
                    </Link>
                    <Link className="link" to='/home/account'>
                        <span className="deals-span">Account Settings</span>
                    </Link>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavbarDrawer;