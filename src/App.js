import "./App.css";
import breakfastImg from "../src/images/food.svg";

function App() {
  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row"
      style={{
        background: "linear-gradient(to bottom, #F0F4FD, #A1A3BA)",
      }}
    >
      <div className="mt-5 text-center">
        <h1 className="font-black text-5xl">
          Fresh Healthy <br />
          <span className="font-quicksand font-light">
            Delicious Salads.
          </span>{" "}
        </h1>
        <p className="text-gray-700  text-base">
          We make fresh and healthy foods.
        </p>
        <span className="inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg uppercase tracking-wide mt-5">
          Explore
        </span>
      </div>
      <img className="w-screen lg:max-w-xl" src={breakfastImg} alt="food" />
    </div>
  );
}

export default App;
