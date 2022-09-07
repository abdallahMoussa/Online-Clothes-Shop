import styles from "./Completed.module.css";

const Completed = props=>{

    return(<>
        <div id="complete"  className={`${styles.overlay}`}>
            <div className={styles.complete}>
                <span>{props.children}</span>
            </div>
        </div>
        </> );
}

export default Completed;