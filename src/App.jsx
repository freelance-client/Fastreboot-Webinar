
import './App.css'

// images
import poster from './assets/poster.png'
import whatsapp from './assets/whatsapp.png'
import logo from './assets/logo.png'

// icons


import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


function App() {


  return (
    <>
      <div className="container mx-auto  w-full h-auto ">
        <div className="poster relative ">
          <div className=' w-full h-1/4 absolute flex flex-col justify-center items-center gap-0 sm:4'>
            <div>
              <img src={logo} alt="" className=' w-auto h-24  md:h-40 lg:h-64' />
            </div>
            <h1 className='text-center italic text-3xl sm:text-6xl font-bold text-white sm:px-12'>Fast Reboot Lifestyle Live Session Invitation</h1>
          </div>
          <img src={poster} alt="" srcset="" className=' w-full  ' />
        </div>
        {/* join */}
        <div className=' w-full h-auto bg-black flex justify-center'>
          <h3 className='  text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-white '><span className=' text-red-600' >Join</span> us for a transformation discussion!</h3>
        </div>
        {/* achive */}
        <div className=' flex flex-col w-full h-auto  bg-white justify-center items-center gap-16'>
          <div className=' flex items-center justify-center rounded-b-3xl bg-red-600 px-5 py-4 h-auto w-9/12'>
            <h1 className=' text-center italic text-3xl sm:text-6xl font-bold text-white'>ACHIEVE YOUR FULL POTENTIAL</h1>
          </div>
          <div>
            <h2 className=' py-9 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>മാറാത്ത മനസ്സും മാറാത്ത <br /> ജീവതവും മാറ്റണോ?</h2>
          </div>
          {/* date , time and notes */}

          <div className=' flex flex-col gap-8 justify-center items-center'  >

            {/* date */}

            <div className=' h-20 w-80 flex items-center justify-start bg-[#1AD121] relative rounded-s-full'>
              <div className='w-24 h-24 bg-[#375C94] transform skew-y-3 -skew-x-12 absolute -top-2.5 flex items-center justify-center   '>


                <SlCalender className=' text-white h-14 w-14 ' />

              </div>
              <h4 className=' ml-32 text-xl text-white font-bold italic'>March 23, 2024</h4>

            </div>



            {/* time */}

            <div className=' h-20 w-80 flex flex-row-reverse items-center justify-start bg-red-600 relative rounded-e-full'>
              <div className='w-24 h-24 bg-[#375C94] transform skew-y-3 -skew-x-12 absolute -top-1.5 -right-1 flex items-center justify-center  '>
                <FaClock className=' text-white h-14 w-14 ' />

              </div>
              <h4 className=' mr-32 text-xl text-white font-bold italic'>March 23, 2024</h4>

            </div>

            {/* notes */}

            <div className=' mt-12 w-4/5 h-auto border-2 border-dashed border-gray-500 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-center '>
              <p className='m-2 md:m-4'>ജീവിതത്തിൽ ആയാലും കരിയറിൽ ആയാലും നിങ്ങൾ എന്തൊക്കെ അറിഞ്ഞിരുന്നാലും അത് പ്രാവർത്തികമാക്കണമെങ്കിൽ ശക്തമായ മൈൻഡ് സെറ്റ് തന്നെ വേണം. മാറാത്ത മനസ്സും നിങ്ങൾക്ക് മാറ്റണോ ? മെച്ചപ്പെട്ട ജീവിതം നിങ്ങൾക്ക് സ്വന്തമാക്കണോ..</p>
            </div>
          </div>
          {/* 1 rs */}
          <div className='container mx-auto bg-[#18283F] w-full h-auto py-8 px-22 flex justify-center'>
            <h3 className='  text-lg sm:text-xl md:text-2xl lg:text-3xl  font-bold text-white text-center '>ഇന്ന് തന്നെ ഞങ്ങളുടെ <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl' >1 രൂപ </span>Coaching Class -ൽ join ചെയ്യൂ</h3>
          </div>

          {/* footer */}

          <div className=' container w-full mb-12 mx-auto flex flex-col justify-center items-center  px-7 text-center font-semibold gap-8'>
            <p >താഴെയുള്ള ( Pay ) ലിങ്കിൽ ക്ലിക്ക് ചെയ്ത് 1₹ payment ചെയ്ത് Screenshot (Share <span className=' inline-block'> <IoLogoWhatsapp className=' text-green-500' /> </span> ) ഞങ്ങൾക്ക് ഷെയർ ചെയ്യുക - <span className=' bg-yellow-300'>+91 623 825 8336</span></p>
            <a href="https://upilinks.in/payment-link/upi41027662">
              <div className=' h-16 w-48 rounded-2xl bg-gray-800 flex justify-center items-center text-3xl font-bold text-[#1AD121]'>
                <button>PAY</button>
              </div>
            </a>
            <p>📢 Don't miss out on this opportunity to gain valuable insights and practical tips!</p>
            <h1 className=' text-base sm:text-2xl font-bold'>With best regards<br /><span>Team Fast Reboot Mentoring Platform ⭐</span></h1>
            <a href="https://api.whatsapp.com/send?phone=+916238258336&text=1₹%20Class">
              <div className=' ml-16 mt-10'>
                <div className='btn-whatsapp-pulse h-16 w-80 flex items-center justify-start bg-gray-800  relative rounded-e-full rounded-s-full'>
                  <div className=' w-20 h-20 bg-gray-800  rounded-full flex items-center -left-7  absolute justify-center   '>
                    <img src={whatsapp} alt="" className='  h-14 w-14' />
                  </div>
                  <h4 className=' ml-2 text-lg text-[#1AD121] font-bold '>Click here to share a screenshot on WhatsApp</h4>
                </div>
                <div class="wrap">

                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
