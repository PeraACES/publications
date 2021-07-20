import CarouselItem from './CarouselItem';

export default function Carousel({ featured_proceedings }) {
  return (
    <div className="site-section py-0" id="section1">
      <div className="owl-carousel hero-slide owl-style">
        {!!featured_proceedings &&
          Array.isArray(featured_proceedings) &&
          featured_proceedings.map((item) => (
            <CarouselItem
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              markup={item.markup}
            />
          ))}
      </div>
    </div>
  );
}
