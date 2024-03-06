import { Link } from "react-router-dom"

const Page401 = () => {
  return (
    <>
    <div className='bg-[#0D1832] space-y-[1rem] flex flex-col justify-center h-screen w-screen items-center px-[3.5rem] text-white text-center font-poppins'>
      <div className="bg-[#134083] items-center justify-center flex flex-col space-y-[1rem] h-[20rem] w-full rounded-xl border-2 border-[#F9D62B]">
        <div className="font-bold text-[3rem]">4 0 1</div>
        <div className="w-[7rem] h-[7rem]">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.859 30.859" xmlSpace="preserve" fill="#0D1832" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle cx="3.41" cy="5.149" r="0.974"></circle> <circle  cx="6.333" cy="5.149" r="0.974"></circle> <path d="M9.317,6.123c0.535,0,0.971-0.434,0.971-0.973S9.852,4.176,9.317,4.176 c-0.539,0-0.978,0.436-0.978,0.975S8.778,6.123,9.317,6.123z"></path> <path d="M22.92,12.27c0.84,0,1.645,0.133,2.404,0.375V7.608H1.95v16.535h14.09 c-0.668-1.162-1.057-2.5-1.057-3.936C14.983,15.832,18.547,12.27,22.92,12.27z"></path> <path d="M26.954,25.203c-0.428,0.346-0.904,0.639-1.414,0.869C26.129,26.002,26.643,25.677,26.954,25.203z"></path> <path d="M27.27,13.574v-8.91c0-1.08-0.875-1.949-1.945-1.949H1.95C0.872,2.715,0,3.584,0,4.664v19.479 c0,1.076,0.872,1.947,1.95,1.947h15.664c1.406,1.271,3.268,2.055,5.307,2.055c4.377,0,7.938-3.562,7.938-7.938 C30.858,17.436,29.43,14.996,27.27,13.574z M9.317,4.176c0.535,0,0.971,0.436,0.971,0.975S9.852,6.123,9.317,6.123 c-0.539,0-0.978-0.434-0.978-0.973S8.778,4.176,9.317,4.176z M6.333,4.176c0.536,0,0.976,0.436,0.976,0.975 s-0.44,0.972-0.976,0.972c-0.54,0-0.976-0.434-0.976-0.973S5.793,4.176,6.333,4.176z M3.41,4.176c0.538,0,0.975,0.436,0.975,0.975 S3.948,6.123,3.41,6.123c-0.537,0-0.973-0.434-0.973-0.973S2.873,4.176,3.41,4.176z M1.95,24.142V7.608h23.375v5.037 c-0.76-0.242-1.564-0.375-2.404-0.375c-4.373,0-7.938,3.562-7.938,7.938c0,1.436,0.389,2.773,1.057,3.936H1.95V24.142z M26.954,25.203c-0.311,0.475-0.824,0.799-1.414,0.869c-0.799,0.355-1.686,0.559-2.619,0.559c-0.912,0-1.783-0.195-2.57-0.541 c-0.986-0.432-1.84-1.107-2.494-1.947c-0.848-1.088-1.359-2.451-1.359-3.936c0-3.541,2.883-6.424,6.424-6.424 c0.85,0,1.66,0.17,2.404,0.469c0.725,0.293,1.381,0.719,1.945,1.242c1.271,1.174,2.074,2.85,2.074,4.713 C29.344,22.225,28.411,24.021,26.954,25.203z"></path> <path d="M22.958,12.449c-4.275,0-7.742,3.465-7.742,7.738c0,4.275,3.467,7.744,7.742,7.744 c4.277,0,7.744-3.469,7.744-7.744C30.702,15.914,27.235,12.449,22.958,12.449z M28.348,20.188c0,1.062-0.309,2.053-0.84,2.889 l-7.436-7.438c0.836-0.533,1.826-0.842,2.885-0.842C25.932,14.797,28.348,17.216,28.348,20.188z M17.567,20.188 c0-1.061,0.311-2.049,0.842-2.885l7.438,7.436c-0.836,0.529-1.826,0.842-2.889,0.842C19.985,25.58,17.567,23.162,17.567,20.188z"></path> </g> </g></svg>
        </div>
        <div className="text-[1rem]">
          Access denied
        </div>
      </div>
     <Link to="/">
        <u>Go to Landing Page</u>
     </Link>
    </div>
    </>
  )
}

export default Page401