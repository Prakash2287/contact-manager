import React, { useState } from 'react'
import './FilterTab.css'
const FilterTab = ({setTargetFilterState}) => {
  
  const filterObject={
    name:'',
    country:'',
    phoneNumber:'',
    dateOfBilling:''
  }
  const [filterState,setFilterState]=useState(filterObject);
  const handleInputChange=(e)=>{
        let objParam=e.target.name;
        let objValue=e.target.value;
        setFilterState({
            ...filterState,
            [objParam]: objValue,
          });
  }
  const handleFilterChange=()=>{
    setTargetFilterState(filterState);
  }
  const handleReset=()=>{
    setTargetFilterState(filterObject);
    setFilterState(filterObject);
  }
  return (
    <div className='filter-tab-wrapper'>
        <div className='filter-tab'>
            <input className='filter-input-field' placeholder='Enter Name' name='name' value={filterState.name} onChange={(e)=>handleInputChange(e)}></input>
            <input className='filter-input-field' placeholder='Country Code' name='country' value={filterState.country} onChange={(e)=>handleInputChange(e)}></input>
            <input className='filter-input-field' placeholder='Phone Number(10 digits)' name='phoneNumber' value={filterState.phoneNumber} onChange={(e)=>handleInputChange(e)}></input>
            <div style={{display:'flex',flexDirection:'column'}}>
              <label htmlFor='dateOfCreation'>Date of Billing</label>
              <input className='filter-input-field' name='dateOfBilling' value={filterState.dateOfBilling} type="date" onChange={(e)=>handleInputChange(e)}></input>
            </div>
            <button className='submit-button' onClick={handleFilterChange}>Filter</button>
            <button className='submit-button' onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default FilterTab