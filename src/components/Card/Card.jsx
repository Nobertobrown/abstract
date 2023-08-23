function Card({ title, image, body, link }) {
    return (
      <div className="flex gap-x-7">
        <div>
          <img
            className="shrink-0 w-full align-middle max-h-32 h-auto box-border overflow-clip"
            src={image}
          />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <a href={link}>Learn More →</a>
        </div>
      </div>
    );
}


export default Card;