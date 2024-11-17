import ServiceCard from './common/ServiceCard';

const ServiceCards = () => {
    const services = [
        {
          image: "https://mechatronrobotics.com/assets/images/Service%201.png",
          title: "Our Courses",
          description: "Year long Certified Robotics courses from Fundamental to Advanced level of Robotics.",
        },
        {
          image: "https://mechatronrobotics.com/assets/images/Service%202.png",
          title: "Robotics Workshops",
          description: "For short duration Robotics Workshops cover various topics related to Robotics, AI and ML.",
        },
        {
          image: "https://mechatronrobotics.com/assets/images/Service4.png",
          title: "Robotics Labs",
          description: "Set up Robotics Labs at Schools, Societies and Home to make creative projects right at your place",
        },
      ];
      const handleViewService = (title) => {
        alert(`Viewing service: ${title}`);
      };
  return (
    <div className='flex gap-4 flex-wrap'>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          onViewService={() => handleViewService(service.title)}
        />
      ))}
      </div>
  )
}

export default ServiceCards;
