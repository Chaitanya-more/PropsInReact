import './App.css';
import './components/global.css'
import User from "./components/User"
// import Login from "./components/Login";

function App() {
  return (
    <>
    
    <User name="user_1" image="./asset/images/user0.jpg" para="I am user 1......."/>
    <User name="user_2" image="./asset/images/user1.jpg" para="I am User 2......."/>
    <User name="user_3" image="./asset/images/user2.jpg" para="I am User 3......."/>
 
    </>
  );
}

export default App;
