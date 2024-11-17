const WhatWeDo = () => {
  const imgages = [
    "https://www.stemrobo.com/wp-content/uploads/2023/11/what-we-do.webp",
    "https://www.stemrobo.com/wp-content/uploads/2023/10/international-expension-scaled.jpg",
  ];
  return (
    <div className="p-6 flex flex-col gap-2">
      {imgages.map((img, index) => {
        return (
          <img
            key={index}
            src={img}
            alt="whatWeDo img"
            className="w-full rounded-md"
          />
        );
      })}
    </div>
  );
};

export default WhatWeDo;
