  import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
  import imgg from '../data/services/stemlabs/Frame_6.png';
  import imgg2 from '../data/services/stemlabs/img.jpg';
  import imgg3 from '../data/services/stemlabs/img2.jpg';
  import imgg4 from '../data/services/stemlabs/img3.jpg';

const imageList = [
  { src: imgg, alt: 'First Slide' },
  { src: imgg, alt: 'Second Slide' },
  { src: imgg, alt: 'Third Slide' },
  { src: imgg, alt: 'Fourth Slide' },
];

const ImageCarousel = () => {
  return (
    <div className="w-full">
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
        {imageList.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;


//   const imageList = [
//     { src: imgg2, alt: 'First Slide' },
//     { src: imgg3, alt: 'Second Slide' },
//     { src: imgg4, alt: 'Third Slide' },
//     { src: imgg3, alt: 'Fourth Slide' },
//   ];

//   const ImageCarousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const handleBeforeChange = (from, to) => {
//       setCurrentSlide(to);
//     };

//     return (
//       <>
//         <style>{`
//   .ant-carousel .slick-arrow {
//     width: 48px;
//     height: 48px;
//     border-radius: 9999px;
//     display: flex !important;
//     align-items: center;
//     justify-content: center;
//     z-index: 20;

//     top: 50% !important;
//     transform: translateY(-50%);
//   }
  
// `}</style>

//         <div className="relative w-full">
//           <Carousel
//             arrows={true}
//             autoplay={{ dotDuration: true }}
//             autoplaySpeed={5000}
//             beforeChange={handleBeforeChange}
//             dotPosition="bottom"
//           >
//             {imageList.map((img, index) => (
//               <div key={index}>
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl"
//                 />
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </>
//     );
//   };

//   export default ImageCarousel;


  
  
  