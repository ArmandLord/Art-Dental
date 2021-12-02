import { Carousel } from "react-carousel-minimal";

const CarouselComponent = ({data}) => {
  

  const captionStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={{ width: "90%", height: "300px", display: 'flex', marginBottom: '40px' }}>
      <Carousel
            data={data}
            time={2000}
            width="400px"
            height="250px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "450px",
              maxHeight: "250px",
              margin: "40px auto",
            }}
          />
    </div>
  );
};

export default CarouselComponent;
