import {connect} from "react-redux";
import {
    follow, followThunkCreator, requestUsers,
    setCurrentPage,
    switchIsFollowing,
    unfollow, unfollowThunkCreator
} from "../../redux/users-reducer";
import * as React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowInWaiting,
    getIsLoading,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageModed = (p) => {
        const {pageSize} = this.props;
        this.props.getUsers(p, pageSize)
    }

    render() {
        return <>
            <div>
                {this.props.isLoading ? <Preloader/> : null}
            </div>
            <Users {...this.props} onPageModed={this.onPageModed}/>
        </>
    }

}


const mapStateToProps = (state) => {
    console.log("render state")
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followWaiting: getFollowInWaiting(state)
    }

}

export default compose (
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        switchIsFollowing,
        getUsers: requestUsers,
        unfollowThunkCreator,
        followThunkCreator
    }),
    withAuthRedirect
)(UsersContainer);


