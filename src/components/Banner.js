import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

function Banner () {
  const ArrowPrev = ({clickHandler, hasPrev, label}) => (
    <div className='absolute z-10 h-full flex items-center w-20 cursor-pointer justify-center' onClick={clickHandler}>
      <ChevronLeftIcon className='h-10 lg:h-12 mt-[-100px] xl:-mt-60' />
    </div>
  );

  const ArrowNext = ({clickHandler, hasNext, label}) => (
    <div className='absolute right-0 h-full flex items-center w-20 cursor-pointer top-0 justify-center' onClick={clickHandler}>
      <ChevronRightIcon className='h-10 lg:h-12 mt-[-100px] xl:-mt-60' />
    </div>
  );
  
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev, label) => <ArrowPrev clickHandler={clickHandler} hasPrev={hasPrev} label={label} />}
        renderArrowNext={(clickHandler, hasNext, label) => <ArrowNext clickHandler={clickHandler} hasNext={hasNext} label={label} />}
      >
        <div>
          <img loading='lazy' src='/assets/images/bannerone.jpg' alt="" />
        </div>
        <div>
          <img loading='lazy' src='/assets/images/banner2.jpg' alt="" />
        </div>
        <div>
          <img loading='lazy' src='/assets/images/banner3.jpg' alt="" />
        </div>
      </Carousel>
      <div className='absolute bg-gradient-to-t from-gray-100 to-transparent h-32 bottom-0 z-20 w-full'></div>
    </div>
  )
}

export default Banner