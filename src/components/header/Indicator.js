import styles from './Indicator.module.css';

const Indicator = props =>{

    return(
        <div onClick={()=>props.change(props.index)}  className={`${styles.indicator} ${props.active&&styles.active}`}></div>
    );
}
export default Indicator;