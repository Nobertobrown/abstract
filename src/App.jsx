import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SeachBar";
import { cardData } from "../src/data";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <NavBar />

      <div className="text-center pt-20 pb-28 px-4 md:px-7 bg-hero-color font-normal">
        <div className="max-w-[720px] w-full md:w-[90%] mx-auto">
          <div className="text-4xl sm:text-6xl md:text-7xl mb-[50px] md:mb-4 text-center leading-[40px] sm:leading-[60px] md:leading-normal">
            How can we help?
          </div>
          <SearchBar />
        </div>
      </div>

      <div className="px-4 md:px-8">
        <div className="max-w-[1600px] w-full max-[479px]:pl-4 md:w-4/5 mx-auto">
          <div className="my-16 md:mt-32 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {cardData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    body={card.body}
                    image={card.imagePath}
                    link={card.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
