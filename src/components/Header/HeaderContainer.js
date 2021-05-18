
import * as React from 'react'
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";



class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth:state.authMenu.isAuth,
        login:state.authMenu.login
    }
}

export default connect(mapStateToProps,{
    logout
})(HeaderContainer);