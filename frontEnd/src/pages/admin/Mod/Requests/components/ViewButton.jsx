import { useState } from "react";
import SendButton from "./SendButton";
import ItemsCarousel from "../../../MainComponents/ItemsCarousel";

const ViewButton = ({ elem }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [subject, setSubject] = useState('')
  const [emailContent, setEmailContent] = useState('')
  const [reqStatus, setReqStatus] = useState(false)
  const {itemData} = elem
  const {source} = itemData
  console.log('eme', source)


const sample =()=>{
  if(selectedItem.itemData){
    const {nameItem, desc, found, surrenderedBy, datePosted, url, postedBy, source} = selectedItem.itemData
    
    return(
      <div className="absolute top-0 z-50 flex flex-col items-center justify-center w-screen h-screen">
        <p>{source}</p>
        <div className="flex items-center justify-center w-screen h-screen bg-black bg-opacity-75">
          <div className="flex flex-col bg-[#134083] border-[0.1rem] border-[#F9D62B] rounded-[2rem] w-full mx-[1.5rem] h-auto py-[1rem]">
            <button
                className="w-[2rem] h-[2rem] place-self-end m-[1rem] stroke-[#F9D62B] hover:stroke-white"
                onClick={()=>{setSelectedItem(false)}}
              >
              <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 14.9802 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                    
                  ></path>{' '}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                    
                  ></path>{' '}
                </g>
              </svg>
            </button>

            <div className="flex flex-col text-[0.9rem] text-white items-start space-y-[0.6rem] leading-[0.9]">
            <div className="flex items-center space-x-[2.5rem] h-auto w-auto text-wrap">
                <div className="w-24">Name of item:</div>
                <div className="w-[10rem] h-auto">{nameItem}</div>
            </div>
            <div className="flex items-center space-x-[2.5rem] h-auto w-auto text-wrap">
                <div className="w-24">Description:</div>
                <div className="w-[10rem] h-auto">{desc}</div>
            </div>
            <div className="flex items-center space-x-[2.5rem] h-auto w-auto text-wrap">
                <div className="w-24">Found at:</div>
                <div className="w-[10rem] h-auto">{found}</div>
            </div>
            <div className="flex items-center space-x-[2.5rem] h-auto w-auto text-wrap">
                <div className="w-24">Surrendered by:</div>
                <div className="w-[10rem] h-auto">{surrenderedBy}</div>
            </div>
            <div className="flex items-center space-x-[2.5rem] h-auto w-auto text-wrap">
                <div className="w-24">Posted by:</div>
                <div className="w-[10rem] h-auto">{postedBy}</div>
            </div>
            <div className="flex items-center space-x-[2.5rem] md:space-x-[0.5rem]">
                <div className="w-24 md:w-[7rem] xl:w-[6rem] 2xl:w-[8.5rem] 3xl:w-[10rem]">Date posted:</div>
                <div className="w-[10rem] h-auto">{datePosted}</div>
            </div>
         </div>
         <div className="relative p-2 h-full w-full border-[0.2rem] border-[#F9D62B] rounded-xl">
           {displayPic(url)}
         </div>
           <input 
             type="text"
             id="subject"  
             placeholder="Subject" 
             className="border-[0.2rem] bg-white border-[#F9D62B] h-[2.5rem] font-poppins rounded-xl text-black w-full text-[0.7rem] p-[0.5rem]"
             value={subject}
             onChange={(e) => setSubject(e.target.value)}
           /> 
             <textarea 
             id="letter" 
             rows={10}
             placeholder="" 
             className="border-[0.2rem] border-[#F9D62B] w-full text-[0.7rem] text-black bg-white p-[0.5rem] rounded-xl pb-[15rem]"
             value={emailContent}
             onChange={(e) => setEmailContent(e.target.value)}
           /> 


             
            <SendButton subject={subject} emailContent={emailContent} />

            </div>
          </div>
        </div>
   
    )
  }
}

const enableDeleteButton = false
  
  const displayPic = (url) => {
    return <ItemsCarousel item={url} enableDeleteButton={enableDeleteButton}/>
  };

  return (
    <>
      <div className="">
        <button
          onClick={()=>{setSelectedItem(elem)}}
          type="button"
          className="bg-[#F9D62B] text-black font-poppins hover:bg-[#134083] text-[0.7rem] hover:text-white w-[4rem] rounded-full text-center"
        >
          View
        </button>
      </div>

      {selectedItem ? sample() : null}
    </>
  );
};

export default ViewButton;