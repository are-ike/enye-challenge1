import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import classes from './Search.module.css';

const Search = ({setSearchInput, value}) => {
    const [style, setStyle] = useState([classes.searchDiv]);
    const setFocus = () => {
        let newStyle = [...style];
        newStyle.push(classes.focus);
        setStyle(newStyle);
    }
    const removeFocus = () => {
        let newStyle = [...style];
        newStyle.pop();
        setStyle(newStyle);
    }
    return (
        <div className={style.join(' ')} onFocus={setFocus} onBlur={removeFocus}>
            <input className={classes.searchInput} 
            onChange={(e) => {setSearchInput(e.target.value)}}
            placeholder="Search" value={value}/>
            <FontAwesomeIcon icon={faSearch} className={classes.icon}/>
        </div>
    )
}

export default Search;