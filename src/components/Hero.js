const Hero = () => {
  return (
    <div className="hero-section w-screen h-screen relative">
      <div className="hero-title absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 text-rose-600">
        <div className="hero-text text-5xl font-medium flex flex-col gap-10">
          <p>This site under construction</p>
          <p>25% Off On All Tops</p>
        </div>

        <div className="hero-btn flex gap-10 text-lg">
          <button className="border border-rose-500 py-2 px-6 font-semibold uppercase tracking-wider hover:bg-rose-500 hover:text-gray-100 duration-500">
            Shop Now
          </button>
          <button className="border border-rose-500 py-2 px-6 font-semibold uppercase tracking-wider hover:bg-rose-500 hover:text-gray-100 duration-500">
            Find More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
