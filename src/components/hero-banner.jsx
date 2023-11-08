import SearchBar from "./search-bar";

function HeroBanner() {
  return (
    <div className="text-center pt-20 pb-28 px-4 md:px-7 bg-hero-color font-normal">
      <div className="max-w-[720px] w-full md:w-[90%] mx-auto">
        <div className="text-4xl sm:text-6xl md:text-7xl mb-[50px] md:mb-4 text-center leading-[40px] sm:leading-[60px] md:leading-normal">
          How can we help?
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default HeroBanner;
