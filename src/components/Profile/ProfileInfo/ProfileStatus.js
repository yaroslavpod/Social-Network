import classes from "./ProfileStatus.module.css"
import * as React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    handleFocus = (e) => {
        e.currentTarget.select();
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }


    render() {
        return <div className={classes.status}>
            {!this.state.editMode &&
            <div>
                <span onClick={this.activatedEditMode}>{this.props.status || "---"}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} value={this.state.status} onFocus={this.handleFocus}
                       autoFocus={true} onBlur={this.deactivatedEditMode}/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus