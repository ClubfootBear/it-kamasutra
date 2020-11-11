import React from "react";
import style from "./Formscontrol.module.css"

export const FormControl = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (showError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
        
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

