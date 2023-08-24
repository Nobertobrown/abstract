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

      <div className="mt-32 mb-16 mx-36 py-7">
        <div className="grid grid-cols-2 gap-10">
          <Card
            title={cardData[0].title}
            body={cardData[0].body}
            image={cardData[0].imagePath}
            link={cardData[0].link}
          />
          <Card
            title={cardData[1].title}
            body={cardData[1].body}
            image={cardData[1].imagePath}
            link={cardData[1].link}
          />
          <Card
            title={cardData[2].title}
            body={cardData[2].body}
            image={cardData[2].imagePath}
            link={cardData[2].link}
          />
          <Card
            title={cardData[3].title}
            body={cardData[3].body}
            image={cardData[3].imagePath}
            link={cardData[3].link}
          />
          <Card
            title={cardData[4].title}
            body={cardData[4].body}
            image={cardData[4].imagePath}
            link={cardData[4].link}
          />
          <Card
            title={cardData[5].title}
            body={cardData[5].body}
            image={cardData[5].imagePath}
            link={cardData[5].link}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
