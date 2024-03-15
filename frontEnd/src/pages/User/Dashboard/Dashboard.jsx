import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from "./components/ProfilePic";
import { getUserAndItem } from "./components/getUserAndItemData";
import Loading from "../../404/Loading";

//need ayusin search
const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1)

  const getData = async () => {
    setLoading(true)
    await getUserAndItem(currentPage)
    .then((result)=>{
      setData([result])
      console.log(data)
      setLoading(false);
    })
  };
  
  useEffect(() => {
    getData();
  }, [currentPage]);

  if (loading) {
    return <div><Loading/></div>;
  }

  const pagination =()=>{
    const disable = `btn-disabled`
    return(
      <div className="flex flex-row justify-center pb-4">
        <div className="join">
          <button className={`join-item btn btn-lg ${currentPage === 1 ? `btn-disabled` : ''}`} 
            onClick={()=>{
                setCurrentPage(currentPage - 1)
              }}>
              «
          </button>
          <button className="join-item btn btn-lg">{currentPage}</button>
          <button 
            className={`join-item btn btn-lg ${data[0].items.length < 6 ? 'btn-disabled' : ''}`}
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
      <>
        <div className="flex flex-row justify-center mt-[1rem] mb-[1rem] sm:justify-start sm:ml-[1.5rem] sm:mb-[1rem] lg:mb-[1.5rem]">
          <div className="w-[2rem] h-[2.1rem] p-2 bg-[#17394C] rounded-l-lg border-b-2 3xl:h-[3rem] 3xl:w-[3rem] 2xl:w-[3rem] 2xl:h-[3rem]">
            <svg className="3xl:w-[2rem] 3xl:h-[2rem] 2xl:w-[2rem] 2xl:h-[2rem]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <input
            type="text"
            className="bg-[#17394C] border-b-2 mb-[1rem]  text-white p-[1rem] w-[16rem] h-8 rounded-r-lg xsm:w-[19rem] xl:w-[22rem] 2xl:h-[3rem] 3xl:w-[30rem] 3xl:h-[3rem] 3xl:text-[1.5rem]"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </>
    );
  }
  function sample() {
    return data[0].items.map((el, index) => {
      return (
        <div key={index} className="flex flex-row mb-[3rem] rounded-lg justify-center items-center">
          
          <Link to={{ pathname: `/Item/${el._id}` }} state={{ el }}>
            <div className="flex items-center rounded-l-[10rem] rounded-r-[4rem] bg-[#003985] border-b-[0.1rem] border-white hover:bg-sky-700 active:bg-[#0d1832] w-[17rem] h-[6rem] xsm:w-[20rem] xsm:h-[6.5rem] md:w-[18rem] md:h-[6rem] lg:w-[19rem] lg:h-[7rem] xl:w-[25rem] xl:h-[8rem] xl:mt-[2rem] xl:mb-[2rem] 3xl:h-[9rem] 3xl:w-[26rem]">
              <div className="p-2 rounded-full bg-yellow-400">
                <img src={el.url[0]} alt={el.nameItem} className="rounded-full object-contain w-[7rem] h-[7rem] xsm:w-[7.5rem] xsm:h-[7.5rem] md:w-[7rem] md:h-[7rem] lg:w-[8rem] lg:h-[8.5rem] xl:h-[12.5rem] xl:w-[12.5rem]"/>
              </div>
              <div className="w-auto">
                <div className="whitespace-nowrap flex items-center justify-center font-bold text-white text-[0.7rem] ml-[0.4rem] h-full p-[0.5rem] xsm:ml-[0.5rem] sm:text-[0.9rem] sm:ml-[0.4rem] xl:text-[1.1rem] 3xl:text-[1.3rem]">{el.nameItem}</div>
              </div>
            </div>
          </Link>


        </div>
      );
    });
  }

  return (
    <>
    <div className="relative z-0 flex flex-col space-y-[1rem] bg-[#0d1832] w-auto p-[1.5rem] pb-[0.8rem] min-h-screen font-poppins overflow-x-hidden 3xl:p-[2rem]">
      <div className="z-50 bg-[#002855] bg-opacity-50 rounded-[1rem] md:h-auto w-full flex flex-col">
        <div className="flex flex-row space-x-[2.8rem] pt-[1rem] px-[1rem] lg:space-x-[3rem] xl:space-x-[4rem]">
          <ProfilePic User={data} />
          <div className="flex p-[0.5rem] whitespace-nowrap w-full xl:p-[1.2rem] 3xl:p-[1.7rem]">
            <div className="text-white text-lg lg:text-[1.5rem] xl:text-[2rem] 3xl:text-[2.5rem]"> Hi, {data[0].user.Name}</div>
          </div>
        </div>

        {searchBar()}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] xl:grid-cols-[20rem]xl xl:mx-[1.5rem] 3xl:grid-cols-4">
          
            {sample()}
        </div>

        {pagination()}

      </div>
      <img src="https://res.cloudinary.com/dxjpbwlkh/image/upload/v1709030999/Assets/1_rqlvoq.png" alt="shape3" className="h-[11rem] w-[14rem] absolute z-10 -bottom-[0rem] -right-[3rem] xsm:h-[10rem] xsm:w-[12rem] sm:h-[9rem] sm:w-[12.5rem] lg:w-[17rem] lg:h-[15rem] 3xl:w-[25rem] 3xl:h-[20rem]" />
      <img src="https://res.cloudinary.com/dxjpbwlkh/image/upload/v1709031100/Assets/Group_4_d8iknv.png" alt="shape1" className="h-[10rem] w-[10.5rem] absolute z-10 -top-[3rem] -right-[1rem] opacity-50 sm:h-[12rem] sm:w-[12.5rem] md:h-[13rem] md:w-[13.5rem] lg:w-[17rem] lg:h-[17rem] lg:right-[5rem] lg:-top-[5.5rem] xl:h-[24rem] xl:w-[25rem] xl:-top-[7rem] xl:right-[10rem] 3xl:w-[28rem] 3xl:h-[27rem]" />
      <img src="https://res.cloudinary.com/dxjpbwlkh/image/upload/v1709031100/Assets/Group_3_umxc26.png" alt="shape2" className="h-[10rem] w-[10rem] absolute z-10 -top-[1.5rem] -left-[5rem] opacity-50 xsm:h-[11rem] xsm:w-[10rem] xsm:-top-[1.7rem] sm:h-[12.8rem] sm:w-[11rem] sm:-left-[6.2rem] sm:-top-[2.1rem] xl:h-[16rem] xl:w-[13rem] xl:-left-[7rem] 3xl:w-[15rem] 3xl:h-[20rem] 3xl:-top-[3rem] 3xl:-left-[8rem]"/>
      
      <div className="flex flex-col items-center justify-center z-30 w-full h-[4rem] 2xl:h-[6.5rem] rounded-xl bg-[#134083] bg-opacity-75 self-center 2xl:space-y-[0.3rem]">
        <div className="flex flex-row space-x-[0.2rem] 2xl:space-x-[0.4rem]">
          <a href="https://forms.gle/aMBmxaiFjtGpM5WX9" target="_blank" className="text-white font-poppins text-[0.8rem] 2xl:text-[1.4rem] 3xl: underline decoration-solid hover:text-[#F9D62B]">Share your feedback with us<b>!</b></a>
          <img src="https://res.cloudinary.com/dxjpbwlkh/image/upload/v1709966651/Assets/SVGRepo_iconCarrier_sepk7o.png" alt="rtu logo" className="h-[1.3rem] w-[1.7rem] ml-[1rem] mr-[0.5rem] 2xl:h-[1.8rem] 2xl:w-[2.1rem] 3xl:h-[2rem] 3xl:w-[2.5rem]"/>
        </div>
        <div className="flex flex-row space-x-[0.1rem] 2xl:space-x-[0.2rem] text-white text-[0.8rem] 2xl:text-[1.3rem] 3xl:text-[1.5rem]">
          <p>© 2023 | Rizal Technological University</p>
          <img src="https://res.cloudinary.com/dxjpbwlkh/image/upload/v1709912489/Assets/rtu_logo_5_yz5e6k.png" alt="rtu logo" className="h-[1.1rem] w-[1.1rem] xsm:h-[1.3rem] xsm:w-[1.3rem] 2xl:h-[1.9rem] 2xl:w-[1.9rem]" />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Dashboard;