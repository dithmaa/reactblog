import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {css} from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <h3 style={{"margin": "0"}}>Блог на React JS</h3>
        </header>
    )
}
const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps,{})(Header);