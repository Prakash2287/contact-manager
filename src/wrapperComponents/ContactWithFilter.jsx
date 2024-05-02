import React, { useState } from 'react'
import FilterTab from '../components/FilterTab/FilterTab'
import ContactTable from '../components/ContactTable/ContactTable'
import { Navigation } from '../components/Navigation/Navigation'
const ContactWithFilter = () => {
  const filterObject={
    name:'',
    country:'',
    phoneNumber:'',
    dateOfBilling:''
  }
  const [targetFilterState,setTargetFilterState]=useState(filterObject);
  console.log(targetFilterState);
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
        <Navigation />
        <FilterTab setTargetFilterState={setTargetFilterState}/> 
        <ContactTable targetFilterState={targetFilterState}/>  
    </div>
  )
}

export default ContactWithFilter