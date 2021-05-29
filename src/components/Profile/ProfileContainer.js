import * as React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, setProfile, updateUserStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId ) {
            userId = this.props.authorizedUserID;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);

    }
    render() {

        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserID:state.authMenu.id,
        isAuth:state.authMenu.isAuth
    }
}
export default compose(
    connect(mapStateToProps,{
        getProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)





