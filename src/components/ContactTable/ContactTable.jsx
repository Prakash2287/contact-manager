import { useState } from "react";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./ContactTable.css";
import useContactData from "../../hooks/useContactData";
import Tag from "../../wrapperComponents/TagComponent";
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
}
function getFilteredContacts(contacts,targetFilterState){
  const filteredData = contacts?.filter(obj => {
    // Check if countryCode, phoneNumber, and name match the corresponding query terms
    const countryCodeMatch = targetFilterState?.country ? obj.country.includes(targetFilterState.country) : true;
    const phoneNumberMatch = targetFilterState?.phoneNumber ? obj.phoneNumber.includes(targetFilterState.phoneNumber) : true;
    const nameMatch = targetFilterState?.name ? obj.name.includes(targetFilterState.name) : true;
  
    // Check if dateOfCreation matches exactly
    const dateOfCreationMatch = targetFilterState?.dateOfBilling ? obj.dateOfBilling === targetFilterState.dateOfBilling : true;
  
    // Return true if all conditions are met
    return countryCodeMatch && phoneNumberMatch && nameMatch && dateOfCreationMatch;
  });
  return Array.isArray(filteredData)?filteredData:[filteredData]
}
const ContactTable = ({targetFilterState}) => {
  const { contacts, error, isLoading } = useContactData();
  let filteredContacts=getFilteredContacts(contacts,targetFilterState);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const handlePageChange = (amount) => {
    if (currentPage + amount > totalPages || currentPage + amount < 1) return;
    setCurrentPage((prevPage) => prevPage + amount);
  };
  const currentItems = filteredContacts?.slice(indexOfFirstItem, indexOfLastItem);
  if (isLoading) {
    return (
      <div style={{ width: "100vw", textAlign: "center" }}>Loading....</div>
    );
  }
  return (
    <>
      <div className="contact-table-wrapper">
        <div className="table-pagination-controls">
          <FaChevronLeft
            className="pagination-control-buttons"
            onClick={() => handlePageChange(-1)}
          />
          <div className="pagination-number">
            {currentPage} of {totalPages}
          </div>
          <FaChevronRight
            className="pagination-control-buttons"
            onClick={() => handlePageChange(1)}
          />
        </div>
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Tags</th>
              <th>Country</th>
              <th>Date of Creation</th>
              <th>Date of Billing</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.contactNumber}</td>
                  <td>
                    <Tag>{item.tag}</Tag>
                  </td>
                  <td>{item.country}</td>
                  <td>{item.dateOfCreation}</td>
                  <td>{item.dateOfBilling}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactTable;
