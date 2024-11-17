const YoutubeLinks = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/gP07amLXYAM?si=FESiETUek3K3KSC2",
    "https://www.youtube.com/embed/-0UKVuwIRUc?si=4m8F-5NC1AXwA1rr",
    "https://www.youtube.com/embed/gP07amLXYAM?si=fV0qpXjADBvVMO3B",
    "https://www.youtube.com/embed/gP07amLXYAM?si=FESiETUek3K3KSC2",
    "https://www.youtube.com/embed/-0UKVuwIRUc?si=4m8F-5NC1AXwA1rr",
    "https://www.youtube.com/embed/gP07amLXYAM?si=fV0qpXjADBvVMO3B",
  ];

  return (
    <div className="w-full py-12 xs:px-32 sm:px-40 gap-10 flex flex-wrap">
      {videoLinks.map((link, index) => (
        <div key={index} className=' shadow-black shadow-md rounded-lg overflow-hidden'>
          <iframe
            src={link}
            title={`YouTube video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YoutubeLinks;
