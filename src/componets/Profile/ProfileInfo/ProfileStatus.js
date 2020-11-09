import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        //Асихронный метод
        this.setState({
            editMode: true,
        })
    }

    deActivateEditMode = () => {
        //Асихронный метод
        this.setState({
            editMode: false,
        })
        this.props.uptUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

render(){
    return (
        <div>
            <div>
                <div>FullName - {this.props.fullName}</div>
                {/*{!this.state.editMode &&*/}
                {/*<div>*/}
                {/*    <span onDoubleClick={ this.activateEditMode.bind(this)}>{this.props.aboutMe}</span>*/}
                {/*</div>*/}
                {/*}*/}
                {/*{this.state.editMode &&*/}
                {/*<div>*/}
                {/*    <input type="text" autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.aboutMe}/>*/}
                {/*</div>*/}
                {/*}*/}
            </div>
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode}>{this.props.status || '----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        type="text"
                        autoFocus={true}
                        onChange={this.onStatusChange}
                        onBlur={this.deActivateEditMode}
                        value={this.state.status}/>
                </div>
                }
            </div>
        </div>
    )
}

}

export default ProfileStatus;