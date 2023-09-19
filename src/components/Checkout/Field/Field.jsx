import React from 'react'
import styles from "./Field.module.css"

const Field = ({ label, name, onChange, type }) => {
    return (
        <div className={`${styles.formControl}`}>
            <label className={styles.label}>{label}</label>
            <input name={name} type={type} onChange={onChange} />
        </div>
    );
};

export default Field
