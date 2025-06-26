import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel1 = ({ images }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-[16/15] sm:aspect-[21/10] md:aspect-[16/8] lg:aspect-[16/8] xl:aspect-[16/7] flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel1;
