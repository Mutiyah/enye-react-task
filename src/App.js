import React, {useState, useEffect} from "react";
import axios from 'axios';
import Datatable from "./datatable";    //main table component
import Pagination from "./datatable/pagination";  //pagination component
import GenderFilter from "./datatable/genderFilter";  //filter by gender component
import PaymentMethodFilter from "./datatable/paymentMethodFilter"  //filter by payment method component
import 'bootstrap/dist/css/bootstrap.min.css'; //react bootstrap css
import FadeLoader from "react-spinners/FadeLoader"; //spinner


export default function App() {
const [data, setData] = useState([]);            //get and set for original data from api
const [tableData, setTableData] = useState([]);   //get and set for duplicate of data from api
const [q, setQ] = useState("");                     //get and set for Input for global search
const [currentPage , setCurrentPage] = useState(1);   //get and set for pagination
const [profilesPerPage] = useState(20);                  //profile rows per page
const [loading, setLoading] = useState(false);              //get and set spinner 

// Filter by Gender function
const updateFilterBy = filterCol => {
    const tableFilteredData = data.filter(col => {
        return col.Gender.toLowerCase() === filterCol.toLowerCase()
    }
  )
    setTableData(tableFilteredData)
 }


// Filter by payment method function
 const fiterByPaymentMethod = filterCol => {
      const tableFilteredData = data.filter(col => {
        return col.PaymentMethod.toLowerCase() === filterCol.toLowerCase()
    }
  )
    setTableData(tableFilteredData)
}


 //Global search function
const updateSearchResult = (searchKeyword) => {
        setQ(searchKeyword)
            console.log("searchKeyword => ", searchKeyword)
              const columns = data[0] && Object.keys(data[0]);
                  const tableFilteredData = data.filter(
                  (row) => 
              columns.some(
          (column) => 
          row[column].toString().toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 
      ) 
      );
    setTableData(tableFilteredData)
}


useEffect(() =>{
    const api = axios.create();
    setLoading(true);
        api.get('https://api.enye.tech/v1/challenge/records')
        .then((res) => res.data)
        .then((res1) => {
          setData(res1.records.profiles);
          setTableData(res1.records.profiles);
          setLoading(false);
        });
}, []); //end of useEffect method
console.log(data);



//change current page to next 10 profiles
const paginate = pageNumber =>{ 
    setCurrentPage(pageNumber || 1);
    const indexOfLastPage = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastPage - profilesPerPage;
    const currentProfiles = data.slice(indexOfFirstProfile, indexOfLastPage);
    setTableData(currentProfiles);
}


  return ( 
    <div className="background">
  { 

  //Spinner condition
    loading ?
    <div className="spinner">
      <span>
          <FadeLoader
            color={"#000000"} 
            loading={loading}
            size={50} 
     />
     </span>
    </div>  :   <div>
  <div> 
  <span className="input">
      <GenderFilter tableData={data} onColSearchUpdate={updateFilterBy } />           
          <PaymentMethodFilter tableData={data} onColSearchUpdate2={fiterByPaymentMethod}/>
      <input className="searchInputBox"  type="text" placeholder="Search name, email, payment..." value={q} onChange={(e) => updateSearchResult(e.target.value)} />
  </span>
      <Datatable data={tableData}/>
      <Pagination profilesPerPage={profilesPerPage}  totalProfiles={data.length} paginate={paginate} />
  </div>
</div> 

}
</div>
  )
}
