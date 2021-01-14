import React, {useState, useEffect} from 'react';
import classes from './Filter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown} from '@fortawesome/free-solid-svg-icons';

const Filter = ({setGender, setPayment, gender, payment}) => {
    const [genderOption, setGenderOption] = useState(null);
    const [paymentOption, setPaymentOption] = useState(null);
    const [genderStyle, setGenderStyle] = useState({
        display: 'none'
    });
    const [paymentStyle, setPaymentStyle] = useState({
        display: 'none'
    });
    const [genderDropdownPosition, setGenderDropdownPosition] = useState({});
    const [paymentDropdownPosition, setPaymentDropdownPosition] = useState({});
    
    useEffect(() => {
        setGenderOption(gender);
        setPaymentOption(payment);

    }, [gender, payment]);

    const toggle = (style, setStyle) => {
        if(style.display === 'none'){
            setStyle({
                display: 'block'
            })
        }else if(style.display === 'block'){
            setStyle({
                display: 'none'
            })
        }
    }

    const closeDropdown = (setStyle) => {
        setStyle({
            display: "none"
        })
    }

    const dropdownPosition = (e, setDropdownPosition) => {
        setDropdownPosition({
            left: `${e.target.getBoundingClientRect().left - 7}px`,
            top: `${e.target.getBoundingClientRect().bottom}px`
        })
        ;
    }
    
    const setOption = (e, setFn) =>{
        setFn(e.target.dataset.option);
    }
    
    return(
        <div className={classes.container}>
            <p>Filter by</p>
            <div>
                <button className={classes.btn} onClick={(e) => {dropdownPosition(e, setGenderDropdownPosition);toggle(genderStyle, setGenderStyle)}}>Gender  
                    <FontAwesomeIcon icon={faSortDown} className={classes.icon}/>
                </button>
                <div className={classes.underlay} style={genderStyle} 
                onClick={() => {closeDropdown(setGenderStyle)}}>
                    <div className={classes.dropdown} style={genderDropdownPosition} >
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
            </div>

            <div>
                <button className={classes.btn}onClick={(e) => {dropdownPosition(e, setPaymentDropdownPosition);toggle(paymentStyle, setPaymentStyle)}}>Payment Method
                    <FontAwesomeIcon icon={faSortDown} className={classes.icon}/>
                </button>
                <div className={classes.underlay} style={paymentStyle} 
                onClick={() => {closeDropdown(setPaymentStyle)}}>
                    <div className={classes.dropdown} style={paymentDropdownPosition}>
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
        </div>
    )

}

export default Filter;