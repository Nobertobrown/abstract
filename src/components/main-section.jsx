import Card from "./card";
import { cardData } from "../data";

function MainSection() {
  return (
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
  );
}

export default MainSection;
