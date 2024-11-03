import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const Footer = () => {
    return (
      <footer className="text-center text-gray-500 text-xs md:text-sm p-8">
        <p>
          Took inspiration from online. Entirely Created by Ashwin using
          React.js.
        </p>
      </footer>
    );
  };
  //color bg-zinc-950; neutral-950
  return (
    <div className="min-h-screen bg-[#141417] py-12 ">
      {/* flex flex-col max-w-[1000px] mx-auto w-full  */}
      <div className="flex flex-col max-w-[800px] mx-auto w-full ">
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
