import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode(){
        //Асихронный метод
        this.setState({
            editMode: true,
        })
    }

    deActivateEditMode(){
        //Асихронный метод
        this.setState({
            editMode: false,
        })
    }

render(){
    return (
        <div>
            <div>Name - {this.props.fullName}</div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode.bind(this)}>{this.props.aboutMe}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input type="text" autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.aboutMe}/>
                </div>
            }
        </div>
    )
}

}

export default ProfileStatus;