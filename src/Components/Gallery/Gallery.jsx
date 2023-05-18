import React from 'react';

const Gallery = () => {
    return (
        <div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
    <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
      <a href="/" aria-label="Item" className="mr-3">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
          <svg className="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
      </a>
      <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
        <span className="inline-block mb-2">The brown fox</span>
        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
      </h2>
    </div>
    <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
      "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut perspiciatis unde omnis iste."
    </p>
  </div>
  <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
    <div>
      <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="https://marveltoynews.com/wp-content/uploads/2021/07/Hot-Toys-Exclusive-Neon-Tech-Iron-Man-4-Figure-Black-Orange-Toy-Fairs-e1625532844931.jpg" alt="" />
     
    </div>
    <div>
      <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="https://thumbs.dreamstime.com/b/superman-statue-life-size-fictional-character-batman-v-dawn-justice-promotion-booth-organized-hot-toys-68521577.jpg" alt="" />
     
    </div>
    <div>
      <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="https://free4kwallpapers.com/uploads/originals/2020/05/29/%C3%97-second-star-wars-wallpaper.jpg" alt="" />
     
    </div>
    <div>
      <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="https://www.shoppersbd.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/h/o/hot-toys-iron-man-31.jpg" alt="" />
      
    </div>
    <div>
      <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="https://cdn.mos.cms.futurecdn.net/2on6A9BtnWzyvPmJjRxjvW.jpg" alt="" />
     
    </div>
    <div>
      <img className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="https://i.pinimg.com/564x/97/5a/b4/975ab4f11b9fd436b4ff58dc6bbda711--rocket-raccoon-beagle.jpg" alt="" />
      
    </div>
  </div>
  <div className="text-center">
    <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
      See more
      <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
      </svg>
    </a>
  </div>
</div>  
        </div>
    );
};

export default Gallery;