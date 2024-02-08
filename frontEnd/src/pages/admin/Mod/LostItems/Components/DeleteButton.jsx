import { axiosDeleteItem } from "../../../../../components/api/axios";
import { useState } from "react";

const showWarning = (message) => {
  alert(message);
};

const DeleteButton = ({ Info, onDelete }) => {
  const [confirm, setConfirm] = useState(false);

  const [cooldownActive, setCooldownActive] = useState(false)


  const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#134083] shadow-md w-[30rem] h-[45rem] rounded-2xl">
          {children}
        </div>
      </div>
    );
  };

  const selectedItem = async () => {
    if(!cooldownActive){
      try {
        await axiosDeleteItem.delete(`${Info._id}`, { data: { url: Info.url } })
        .then(res=>{

          onDelete(Info._id, Info.url);
          showWarning('Successfully removed.')
          setConfirm(false); 

          setCooldownActive(true)

            setTimeout(()=>{
              //console.log('hi')
              setCooldownActive(false)
            }, 5000)
        })
      } 
      catch (error) {
        console.error('Error deleting information:', error);
      }
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => setConfirm(true)}
          className="bg-[#F9D62B] text-[1.4rem] font-bold text-black w-[7rem] h-auto rounded-xl m-[0.3rem]"
        >
          Delete
        </button>

        {confirm && (
          <Modal isOpen={confirm} onClose={() => setConfirm(false)}>
            <div className="absolute inset-0 flex justify-center bg-black bg-opacity-50">
              <div className="z-30 text-white text-[2rem] place-self-center text-center bg-[#134083] p-[1.5rem] rounded-2xl shadow-md w-[30rem] h-[45rem]">
                <div className="flex flex-col h-[40rem] space-y-[10rem] justify-center items-center">
                  <div>Are you sure you want to remove this information?</div>
                  <div className="flex flex-row space-x-[7rem]">
                    <button
                      type="button"
                      className="text-black text-[1.5rem] bg-[#F9D62B] w-[8rem] h-[3rem] rounded-full mr-2"
                      onClick={selectedItem}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="text-white text-[1.5rem] bg-gray-500 w-[8rem] h-[3rem] rounded-full ml-2"
                      onClick={() => setConfirm(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default DeleteButton;
