import { useState } from "react";
import { axiosSendEmail } from "../../../../../components/api/axios";

const SendButton = ({ subject, emailContent, requestBy, index }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
 
  const sendEmail = async () => {
    
    try {
      await axiosSendEmail.post('', {
        id: index,
        to: requestBy,
        subject: subject,
        text: emailContent,
    
      });
      console.log('success')
      closePopup(); 
      window.location.reload();

    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const checker = () => {
    try {
      if (subject.trim() === '' || emailContent.trim() === '' || requestBy.trim() === '') {
        alert('Please fill out all required fields.');
      } else {
        openPopup(); 
      }
    } catch (error) {
      console.log(error);
    }
  };
   
  
  return (
    <>
      <div>
        <button onClick={checker} className="bg-[#F9D62B] self-center w-[10rem] h-[2rem] text-black text-[1rem] rounded-full">
          SEND
        </button>

        {showPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="text-white text-[1rem] text-center bg-[#134083] p-[1.5rem] rounded-2xl shadow-md w-[15rem] h-[20rem]">
              <div className="flex flex-col h-[20rem] space-y-[5rem] justify-center items-center">
                <div>Are you sure you want to send this email?</div>
                <div className="flex flex-row space-x-[2rem]">
                  <button
                    type="button"
                    className="text-black text-[1rem] bg-[#F9D62B] hover:bg-white w-[4rem] h-[2rem] rounded-full mr-2"
                    onClick={sendEmail}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="text-white text-[1rem] bg-gray-500 w-[4rem] h-[2rem] rounded-full ml-2"
                    onClick={closePopup}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default SendButton;
