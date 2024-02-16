import { useState, useEffect } from "react";
import { axiosGetReqList, axiosReFetchToken } from "../../../../../components/api/axios";
import ItemsCarousel from "../../../MainComponents/ItemsCarousel";
import { getData } from "../../../MainComponents/getData";

import SendButton from "./SendButton";
import Approve from "./Approve";

const RequestList = () => {

  const [date, setDate] = useState('');
  const [list, setList] = useState([])

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  const [items, setItems] = useState('')
  const [desc, setDesc] = useState('')
  const [name, setName] = useState('')
  const [found, setFound] = useState('');
  const [image, setImage] = useState([])
  const [datePosted, setDatePosted] = useState('')
  const [postedby, setPostedBy] = useState('')
  const [surrenderedBy, setSurrenderedBy] = useState('')
  const [requestBy, setRequestBy] = useState('')
  const [emailContent, setEmailContent] = useState('');
  const [subject, setSubject] = useState('');
  const [index, setIndex] = useState('');


  const getReqList = async() => {
    try{
      const res = await axiosGetReqList.post()
      const temp = await getData();
      setItems(temp.items); 
      setList(res.data.reqList)
      setFilteredData(res.data.reqList)
      
    }
    catch(err){
      console.log(err)
      return null
    }
  }
 

  useEffect(()=>{
    getReqList()
  }, [])

  const viewItem = async (elem, items) => {
    try {
      
      // Find the item with the matching itemId
      const selectedItem = items.find(item => item._id === elem.itemId);
    
      setName(selectedItem.nameItem);
      setDesc(selectedItem.desc);
      setFound(selectedItem.found);
      setImage(selectedItem.url);
      setRequestBy(elem.Email);
      setDatePosted(selectedItem.datePosted);
      setPostedBy(selectedItem.postedBy);
      setSurrenderedBy(selectedItem.surrenderedBy);
      setIndex(elem._id)
      console.log('henlo', index)
    } catch (error) {
      console.error("Error getting items", error);
    }
  };
  
  const sort = (val)=>{
    if(val.length === 0){
      setFilteredData(list);
    }
    else{
      const filtered = list.filter((el) => {
        return el.Email.toLowerCase().includes(val.toLowerCase());
      });
      setFilteredData(filtered);
    }
  }
  const handleInputChange = (e) => {
    sort(e.target.value)
    setSearchQuery(e.target.value);
  };

  function searchBar() {
    return (
      <>
      
          <input
            type="text"
            placeholder="Search"
            className="mt-[1.5rem] ml-[1.5rem] mr-[1rem] mb-4 bg-[#17394C] p-[1rem] text-white h-[3rem] w-[30rem] rounded-full text-[1.4rem]"
            value={searchQuery}
            onChange={handleInputChange}
          />
       
      </>
    );
  }

  const isWeekend = (selectedDate) => {
    const day = new Date(selectedDate).getDay();
    return day === 0 || day === 6;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (isWeekend(selectedDate)) {
      // Prevent the user from selecting a weekend date
      setDate('');
    } else {
      setDate(selectedDate);
    }
  };

  function requestFormat() {
    return filteredData.map((elem, index) => {
      return(
        <div key={index}>
          <div className="flex flex-col border-b-2 border-white bg-[#17394C] w-full h-[4.5rem] space-x-[2rem] rounded-xl p-1">
            <div className="flex flex-row justify-between items-center text-white ml-[1rem] text-[1.3rem]">
              {elem.Email}
              <div className={`${elem.haveBeenEmailed ? "bg-green-700" : "bg-red-700"} h-[1rem] w-[1rem] rounded-full mr-[1rem]`}></div>
            </div>
            <div className="self-center flex flex-row space-x-[1.5rem] pr-[1.5rem] text-[1rem]">
              <button onClick={() => viewItem(elem, items)} className="bg-[#F9D62B] w-[5rem] rounded-xl py-[0.2rem]">View</button>
              <Approve RequestItem = {elem} index={index} list={list} Item = {items} onClick={viewItem} />
              <button className="  bg-[#F9D62B] w-[5rem] rounded-xl py-[0.2rem]">Delete</button>
            </div>
          </div>
        </div>
      )}
    );
  }

    const enableDeleteButton = false
    const displayPic = () => {
      return <ItemsCarousel item={image} enableDeleteButton={enableDeleteButton}/>
  };

  return (
    <>
      <div className="flex flex-row justify-between mx-[3rem] mt-[2rem] text-white whitespace-nowrap">
        <div className='text-[2.5rem]'>REQUEST</div>   
         {searchBar()}
      </div>
      <div className="self-center space-x-[1rem] h-full flex flex-row h-full text-black text-[1rem] w-[76rem] rounded-[2rem] bg-[#134083] p-[1rem]">
          <div className=" w-[70rem] h-full overflow-y-auto space-y-[1rem]">
            {requestFormat()}
          </div>
          <div className="flex flex-col w-[90rem] h-full p-[1.5rem] bg-white rounded-xl border-[#F9D62B] border-[0.5rem] space-y-[0.5rem]">
            <div className="flex flex-row">
              <div className="flex w-auto h-[2rem] items-center font-semibold"> Requested by: {requestBy}</div>
            </div>
              <div className="flex flex-col space-y-[1rem] h-full whitespace-nowrap">
                <div className="flex flex-row justify-between text-[1rem]">
                  <div className="flex flex-col w-[20rem] p-[0.5rem] text-[1rem]">
                    <div className="flex flex-col h-auto items-start space-y-[0.7rem] leading-[0.9] whitespace-normal">
                    <div className="flex items-center space-x-[2.5rem]">
                      <div className="w-24">Name of item:</div>
                      <div>{name}</div>
                    </div>
                    <div className="flex items-center space-x-[2.5rem]">
                      <div className="w-24">Description:</div>
                      <div>{desc}</div>
                    </div>
                    <div className="flex items-center space-x-[2.5rem]">
                      <div className="w-24">Found at:</div>
                      <div>{found}</div>
                    </div>
                    <div className="flex items-center space-x-[2.5rem]">
                      <div className="w-24">Surrendered by:</div>
                      <div>{surrenderedBy}</div>
                    </div>
                    <div className="flex items-center space-x-[2.5rem]">
                      <div className="w-24">Posted by:</div>
                      <div>{postedby}</div>
                    </div>
                    <div className="flex items-center space-x-[3.1rem]">
                      <div className="w-24">Date posted:</div>
                      <div>{datePosted}</div>
                    </div>
                    
                  </div>
                </div>
                <div className="h-[16.5rem] w-[15rem] py-2 border-[0.3rem] border-[#F9D62B] rounded-xl flex flex-col">
                  {displayPic()}
                </div>
          </div>
               {/* Calendar */}
               <input
                type="date"
                className="w-[15rem] border-[0.2rem] h-[4rem] border-[#F9D62B] rounded-xl"
                value={date} 
                onChange={handleDateChange}
                disabled={isWeekend(date)} // Disable the input on weekends
              />
               <input 
                type="text"
                id="subject"  
                placeholder="Subject" 
                className="border-[0.2rem] border-[#F9D62B] h-[2.5rem] w-full text-[1.5rem] p-[1rem]"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              /> 
               <textarea 
                id="letter" 
                rows={4} 
                placeholder="" 
                className="border-[0.2rem] border-[#F9D62B] h-full w-full text-[1.5rem] p-[1rem]"
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
              /> 
            </div>
              <div className="flex justify-center">
                <SendButton subject={subject} emailContent={emailContent} requestBy={requestBy} index= {index}/>
              </div>
          </div>
      
      </div>
    </>
  );
};

export default RequestList;
