import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

export default function LandingPage(){
    
    return(
        <div className={styles.landing}>
            <h1 className={styles.h1}>Welcome to my project</h1>
            <Link to ='/home' className={styles.link}>
                <button className={styles.button}><span className={styles.span}> Initialize</span></button>
            </Link>
        </div>
    )
}