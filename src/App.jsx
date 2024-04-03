// import Wyh from "./Wyh";

const App = () => {
  // inline
  // const headingStyle = {
  //     color : "black",
  //     padding : "10px",
  //     fontFamily : "impact"
  // }
  return (
    <div className=" p-10">
      {/* <Wyh /> */}
      {/* <h1 style={headingStyle}>Hello React</h1> */}
      <div className=" border border-gray-500 p-5 rounded-md">
        <h1 className=" font-bold text-2xl">Hello React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          numquam eveniet officiis, sed beatae voluptatum ipsum consequatur et
          odit at unde! Quas earum similique adipisci officiis. Minus commodi
          sequi incidunt.
        </p>
        <button className=" bg-blue-500 px-4 py-1 rounded-md mt-3">Click</button>
      </div>
    </div>
  );
};

export default App;
