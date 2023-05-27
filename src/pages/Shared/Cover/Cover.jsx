

const Cover = ({img,title,description}) => {
  return (
    <div
      className="hero h-[80vh] bg-fixed"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="">
      </div>
      <div className="hero-content text-center text-gray-200 w-4/6 h-3/6 bg-black bg-opacity-50">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;