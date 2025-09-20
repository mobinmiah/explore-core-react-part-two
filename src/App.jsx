import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

  function handleClick() {
    alert("button ckicked.");
  }

  const handleClick3 = () => {
    alert("clicked 3.");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Frinds Loading...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Here</button>
      <button
        onClick={function handleClick2() {
          alert("clicked 2.");
        }}
      >
        Click Here 2
      </button>

      <button onClick={handleClick3}>click 3</button>

      <button onClick={() => alert("clicked 4.")}>click 4</button>

      <button onClick={() => handleAdd5(10)}>Add 5</button>
    </>
  );
}

export default App;
