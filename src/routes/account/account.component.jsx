import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  collection, query, where, getDocs } from 'firebase/firestore';
import { signOutUser, db } from "../../utils/firebase/firebase.utils";
import { SIGNOUT } from "../../state/actions/userActions";



import "./account.styles.css";

const AccountPage = () => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [showOrders, setShowOrders] = useState(false);

    useEffect(() => {
        // Fetch and display user's orders when the component mounts
        if (user) {
            const fetchOrders = async () => {
                const ordersRef = collection(db, 'orders');
                const q = query(ordersRef, where('userId', '==', user.uid));
                const querySnapshot = await getDocs(q);
                const userOrders = [];
                querySnapshot.forEach((doc) => {
                    userOrders.push(doc.data());
                });
                setOrders(userOrders);
            };
            fetchOrders();
        }
    }, [user]);

    const handleSignOut = async () => {
        try {
            await signOutUser();
            dispatch({ type: SIGNOUT });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };


    return (


        <div className="account-page">
            <h3 className="account-page-title">Welcome {user && user.email}</h3>

            <p className="account-page-option" onClick={() => { navigate('/forgot-password') }}> Password Reset</p>
            <p className="account-page-option" onClick={() => setShowOrders(!showOrders)}> My Orders</p>
            {showOrders && (
                <div className="account-orders">
                    {orders.length === 0 ? (
                        <p>No orders found.</p>
                    ) : (
                        <div>
                            <p>Your Orders:</p>
                            {orders.map((order, index) => (
                                <div key={index} className="order-item">
                                    <p>Order Date: {order.timestamp.toDate().toLocaleString()}</p>
                                    <p>Items Ordered:</p>
                                    {order.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="order-item-details">
                                            <p>Product Name: {item.name}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            
                                            {/* Add more item details here */}
                                        </div>
                                        
                                    ))}
                                    {<p>Order Total: {order.total}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <p className="account-page-option">Profile settings</p>
            <p className="account-page-option">Edit Address</p>
            <p className="account-page-option">Payment Preferences</p>

            <button className="account-page-option" onClick={handleSignOut}>{user ? <p>Sign Out</p> : <p>Sign In</p>}</button>
        </div>



    );
};


export default AccountPage;
