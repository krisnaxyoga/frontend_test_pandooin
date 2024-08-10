export default function Hero() {
  return (
    <section className="relative flex place-items-center px-4 h-[756px] lg:h-[810px]">
        <img src="/hero.webp" alt="Hero" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }} className="object-cover object-center" />
        <div className="absolute inset-x-0 px-4 py-52 w-full max-w-7xl mx-auto text-center lg:text-left">
            <h1 className="m-0 font-the-signature text-[#D6B66B] text-[86px] whitespace-nowrap leading-[0.3] lg:leading-none">
                Premium Travel
            </h1>
            <span className="font-unbounded text-vista-white text-2xl font-bold">
            Beyond Expectation
            </span>
            <p className="mx-auto lg:mx-0 text-vista-white text-base lg:text-2xl max-w-[708px]">
            Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way
            </p>
            <a href="#destination">
                <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-white border-2 border-white hover:bg-tan hover:text-vista-white hover:border-tan mt-6">
                Take Me There
                </button>
            </a>
        </div>
    </section>
  )
}
