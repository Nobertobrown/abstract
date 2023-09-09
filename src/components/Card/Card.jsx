function Card({ title, image, body, link }) {
  return (
    <div className="flex mb-12 pr-4 w-full min-[550px]:min-h-[115px]">
      <div className="mt-12 flex flex-col">
        <img
          className="max-[479px]:max-h-[92px] max-h-[100px] md:max-h-[120px] mr-8 max-[479px]:mr-5"
          src={image}
        />
      </div>
      <div className="p-0 md:pr-6 w-full ">
        <h2 className="">{title}</h2>
        <div className="mb-5 text-2xl">{body}</div>
        <a href={link} className="text-regal-blue text-xl font-normal">Learn More →</a>
      </div>
    </div>
  );
}

export default Card;
