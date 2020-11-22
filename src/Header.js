import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{basket, user},dispatch]= useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" src="https://i.pinimg.com/originals/a3/d8/1c/a3d81c7da26fe6516948feeab044c505.png" alt="logo" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />

                <SearchIcon className="header__searchIcon" />
            </div>

            <div>

                <div className="header__nav" >
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello, {user ? user.email:'Guest' }
               </span>
                        <span className="header__optionLineTwo">{
                            user ? 'Sign Out': 'Sign In'}
                            
               </span>
                    </div>
                    </Link>

                      <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
               </span>
                        <span className="header__optionLineTwo">
                            & Orders
               </span>
                    </div>  
                    
                </div>

            </div>
            

            <Link to='/Checkout'>
            <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>

        </div>
        

    );
}

export default header
