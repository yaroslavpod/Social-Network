import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsers,
    setCurrentPage,
    switchIsFollowing,
    unfollow, unfollowThunkCreator
} from "../../redux/users-reducer";
import * as React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageModed = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize)
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
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followWaiting: state.usersPage.followInWaiting
    }

}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    switchIsFollowing,
    getUsers,
    unfollowThunkCreator,
    followThunkCreator
})(UsersContainer);

