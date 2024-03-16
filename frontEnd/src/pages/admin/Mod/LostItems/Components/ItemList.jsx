import AddItem from "../../../MainComponents/AddItem";
import EditButton from "./EditButton";
import Archive from "./Archive";
import DeleteButton from "./DeleteButton";
import { useState, useEffect } from "react";
import { getData } from "../../../MainComponents/getData";
import Loading from "../../../../404/Loading";
import { axiosFetchAdminData } from "../../../../../components/api/axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1)

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [hidePagination, setHidePagination] = useState(false)

  //for searchBar
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (deletedId) => {
    setFilteredData(filteredData.filter(item => item._id !== deletedId));
  };

  const getItems = async () => {
    try {
      setLoading(true)
      await getData(currentPage)
      .then((temp) => {
        setItems(temp.items); 
        setLoading(false);
      })
    } catch (error) {
      console.error("Error getting items", error);
      setLoading(true);
    }
  };

    const searchData = async()=>{
    if(searchQuery){
      await axiosFetchAdminData.post('', {
        'searchQuery': searchQuery
      })
      .then(res=>{
        setHidePagination(true)
        setItems(res.data.items)
      })
    }
  }

  const searchByDate = async()=>{
    if(startDate && endDate){
      await axiosFetchAdminData.post('', {
          startDate:startDate,
          endDate:endDate,
      })
      .then(res=>{
        setHidePagination(true)
        setItems(res.data.items)
      })
    }
  }

  useEffect(() => {
    getItems();
  }, [currentPage]);

  if (loading) {
    return <div><Loading /></div>;
  }

  const pagination =()=>{
    const disable = `btn-disabled`
    return(
      <div className="flex flex-row justify-center ">
        <div className="join">
          <button className={`join-item btn btn-lg ${currentPage === 1 ? `btn-disabled` : ''}`} 
            onClick={()=>{
                setCurrentPage(currentPage - 1)
              }}>
              «
          </button>
          <button className="join-item btn btn-lg">{currentPage}</button>
          <button 
            className={`join-item btn btn-lg ${items.length < 6 ? 'btn-disabled' : ''}`}
            onClick={()=>{
                setCurrentPage(currentPage + 1)
              }}>
              »
          </button>
        </div>
      </div>
    )
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  function searchBar() {
    return (
      <div>
        
        <b>StartDate : </b>
        <input
            type="date"
            id="startDate"
            min="2024-01-01"
            max={new Date().toISOString().split('T')[0]}
            value={startDate}
            onChange={handleStartDateChange}
        />
        
        <b>EndDate : </b>
        <input
            type="date"
            id="endDate"
            min="2024-01-01"
            max={new Date().toISOString().split('T')[0]}
            value={endDate}
            onChange={handleEndDateChange}
        />
        <button className="btn h-[2rem] w-[10rem] overflow-hidden"
            onClick={searchByDate}
        >
            {'Search by Date'}
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-[15rem] mb-4 mt-[1rem] bg-[#17394C] p-[0.4rem] text-white rounded-full"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn "
          onClick={searchData}
        >
          {`Search`}
        </button>
      </div>
    );
  }

  //handle range of dates
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  function itemsFormat() {
    return items.map((item, index) => {
      return(
        <div key={index}>
          <div className="flex flex-col items-center p-1 border-b-2 border-white bg-[#17394C] w-full h-auto space-x-[0.5rem] rounded-xl">
            <div className="flex flex-row justify-between w-full text-white text-[0.8rem] font-poppins whitespace-nowrap">
              <div>{item.nameItem}</div>
              <div>{item.datePosted}</div>
            </div>
            <div className="flex flex-row justify-center bg-[#17394C] items-center">
              <div className="text-white flex flex-row space-x-[0.8rem]">
                <EditButton Info = {item}/>
                <Archive Info = {item} />
                <DeleteButton Info = {item} onDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
      )
    });
  }
  
  
  return (
    <>
      <div className="flex flex-col justify-between mt-[0.5rem] text-white whitespace-nowrap px-[1rem]">
        <div className='font-poppins ml-[2rem]'>LOST ITEMS</div>   
         {searchBar()}
      </div>
      <div className="bg-[#134083] overflow-y-auto w-full h-full rounded-[2rem] flex flex-col space-y-[1rem] self-center p-[0.8rem]">
        <div className="flex flex-row font-poppins font-bold text-white justify-between px-[0.8rem] text-[0.7rem]">
          <p>Name of item</p>
          <p>Date</p>
         </div>
        <div className="flex flex-row-reverse w-full">
          <AddItem  />
        </div>
        {itemsFormat()}
        {hidePagination ? null : pagination()}
      </div>
    </>
  );
};

export default ItemList;
