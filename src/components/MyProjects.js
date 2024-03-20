import mailBoxImage from "../images/mailBox.png";
import expenseTrackerImage from '../images/expense-tracker.png';
import groupChatImage from '../images/group-chat.png';

const MyProjects = () => {
  return (
    <div className="flex flex-col items-center  p-5 ">
      <p className="text-white text-3xl mb-10">My Projects</p>

      <div className="w-9/12  bg-navGreen rounded shadow p-8 flex flex-col lg:flex-row flex-wrap justify-between">
        <div className="w-2/3">
          <p className="text-white text-3xl mb-3 font-bold">Mail-Box Client</p>
          <p>
            Mail-Box Client is a mailing application where registered users can
            send and receive mails from other users.
          </p>
          <ul className="list-disc ml-4 mt-4 mb-4">
            <li>Implemented authentication with firebase</li>
            <li>Utilize React.js library for creating this application </li>
            <li>Redux for state management</li>
            <li>Mails are stored and received from firebase</li>
          </ul>
          <div className="flex mt-2 mb-6">
            <p className="bg-blue-500 p-2 rounded-2xl text-xs">React Js</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Bootstrap</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Redux</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Firebase</p>            
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Custom Hooks</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">React-Router</p>     
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Github</p>
          </div>
          
          <div className="mt-2">
            <a href="#portfolio" className="lg:p-2">
              <button className="bg-green-500 p-2 hover:bg-green-300 rounded">
                Live App
              </button>
            </a>
            <a href="#portfolio" className="lg:p-2 pl-2">
              <button className="bg-green-500 p-2 hover:bg-green-300 rounded">
                Github Repository
              </button>
            </a>
          </div>
        </div>
        <img
          src={mailBoxImage}
          className="bg-green-500 w-48 h-48 rounded"
          alt="mailBox"
        />
      </div>

      <div className="w-9/12  bg-navGreen rounded shadow p-5 flex flex-col lg:flex-row flex-wrap justify-between mt-5   ">
        <div className="w-2/3">
          <p className="text-white text-3xl mb-3 font-bold">Expense Tracker</p>
          <p>
            Developed an expense tracker app in which user can add, delete and
            update expense
          </p>
          <ul className="list-disc ml-4">
            
          <li>Node Js as Backend </li>
            <li>
              Premium feature implemented to Download expenses and show
              leaderboard
            </li>
            <li> Implemented Data storage and authentication with MongoDB database.</li>
          </ul>
          <div className="flex mt-2 mb-4">
            <p className="bg-blue-500 p-2 rounded-2xl text-xs">HTML</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Node Js</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Tailwind css</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Express Js</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">MySQL</p>        
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Socket</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Aws</p>  
          </div>
          <div className="mt-2">
            <a href="#portfolio" className="lg:p-2">
              <button className="bg-green-500 p-2 hover:bg-green-300 rounded">
                Live App
              </button>
            </a>
            <a href="#portfolio" className="lg:p-2 pl-2">
              <button className="bg-green-500 p-2 hover:bg-green-300 rounded">
                Github Repository
              </button>
            </a>
          </div>
        </div>
        <img
          src={expenseTrackerImage}
          className="bg-green-500 w-48 h-48 rounded"
          alt="mailBox"
        />
      </div>

      <div className="w-9/12  bg-navGreen rounded shadow p-5 flex flex-col lg:flex-row flex-wrap justify-between mt-5">
        <div className="w-2/3">
          <p className="text-white text-3xl mb-3 font-bold">Group Chat Application</p>
          <p>
            Users can create group, add other users and send and receive messages
          </p>
          <ul className="list-disc ml-4">
            <li>Node js as backend</li>
            <li>Implemented Data storage and authentication with MySQL database</li>
            <li>Seamless data transmission with socket io</li>
          </ul>
          <div className="flex mt-2 mb-4">
            <p className="bg-blue-500 p-2 rounded-2xl text-xs">HTML</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Node Js</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Tailwind css</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Express Js</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">MySQL</p>        
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Socket</p>
            <p className="bg-blue-500 p-2 rounded-2xl text-xs ml-2">Aws</p>            
          </div>
          <div className="mt-2">
            <a href="#portfolio" className="lg:p-2">
              <button className="bg-green-500 p-2 hover:bg-green-300 rounded">
                Live App
              </button>
            </a>
            <a href="#portfolio" className="lg:p-2 pl-2">
              <button className="bg-green-500 p-2 hover:bg-green-300 rounded">
                Github Repository
              </button>
            </a>
          </div>
        </div>
        <img
          src={groupChatImage}
          className="bg-green-500 w-48 h-48 rounded"
          alt="mailBox"
        />
      </div>
    </div>
  );
};

export default MyProjects;
