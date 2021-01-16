import React, {useState, useEffect, useRef} from 'react';
import classes from './Filter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown} from '@fortawesome/free-solid-svg-icons';
import useHideOnClickOutside from "./useHideOnClickOutside";

const Filter = ({setGender, setPayment, gender, payment}) => {
    const [genderOption, setGenderOption] = useState(null);
    const [paymentOption, setPaymentOption] = useState(null);
    const [genderDropdownState, setGenderDropdownState] = useState(false);
    const [paymentDropdownState, setPaymentDropdownState] = useState(false);

    const genderDropdownRef = useRef();
    const paymentDropdownRef = useRef();

    const genderBtnClass = [classes.btn];
    const paymentBtnClass = [classes.btn];

    useHideOnClickOutside({
        onHide: () => setGenderDropdownState(false),
        ref: genderDropdownRef,
        open: genderDropdownState
    })

    useHideOnClickOutside({
        onHide: () => setPaymentDropdownState(false),
        ref: paymentDropdownRef,
        open: paymentDropdownState
    })
    
    useEffect(() => {
        setGenderOption(gender);
        setPaymentOption(payment);

    }, [gender, payment]);

    const toggle = (dropdownState, setDropdownState) => {
        if(dropdownState){
            setDropdownState(false);
        }else{
            setDropdownState(true);
        }
    }

    const setOption = (e, setFn) =>{
        setFn(e.target.dataset.option);
    }

    if(gender){
        genderBtnClass.push(classes.chosen);
    }
    if(payment){
        paymentBtnClass.push(classes.chosen);
    }
    
    return(
        <div className={classes.container}>
            <p>Filter by</p>
            <div className={classes.wrapper}>
                <button className={genderBtnClass.join(' ')} onClick={(e) => {toggle(genderDropdownState, setGenderDropdownState)}}>Gender  
                    <FontAwesomeIcon icon={faSortDown} className={classes.icon}/>
                </button>
                <div className={classes.dropdown} 
                style={genderDropdownState? {display: 'block'} : {display: 'none'}} ref={genderDropdownRef}>
                    <li data-option="Female" className={"Female"=== genderOption? classes.select: classes.item}
                    onClick={(e) => {setOption(e, setGender)}}>Female</li>
                    <li data-option="Male" className={"Male" === genderOption? classes.select: classes.item}
                    onClick={(e) => {setOption(e, setGender)}}>Male</li>
                    <li data-option="Prefer to skip" className={"Prefer to skip" === genderOption? classes.select: classes.item}
                    onClick={(e) => {setOption(e, setGender)}}>Prefer To Skip</li>
                    {genderOption !== null ? 
                        <li data-option="" className={classes.item} onClick={(e) => {setOption(e, setGender)}}>None</li>:
                        null
                    }
                </div>
            </div>

            <div className={classes.wrapper}>
                <button className={paymentBtnClass.join(' ')}onClick={(e) => {toggle(paymentDropdownState, setPaymentDropdownState)}}>Payment Method
                    <FontAwesomeIcon icon={faSortDown} className={classes.icon}/>
                </button>
                <div className={classes.dropdown} 
                style={paymentDropdownState? {display: 'block'} : {display: 'none'}} ref={paymentDropdownRef}>
                <li data-option="check" className={"check"=== paymentOption? classes.select: classes.item}
                    onClick={(e) => {setOption(e, setPayment)}}>Check</li>
                <li data-option="cc" className={"cc"=== paymentOption? classes.select: classes.item}
                    onClick={(e) => {setOption(e, setPayment)}}>CC</li>
                <li data-option="paypal" className={"paypal"=== paymentOption? classes.select: classes.item}
                    onClick={(e) => {setOption(e, setPayment)}}>Paypal</li>
                <li data-option="money order" className={"money order"=== paymentOption? classes.select: classes.item}
                    onClick={(e) => {setOption(e, setPayment)}}>Money Order</li>
                    {paymentOption !== null ? 
                        <li data-option="" className={classes.item} onClick={(e) => {setOption(e, setPayment)}}>None</li>:
                        null
                    }
                </div>
    
            </div>
        </div>
    )

}

export default Filter;