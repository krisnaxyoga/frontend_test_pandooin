export default function PandooinWebsite() {
  return (
    <section className="py-[54px] lg:pb-0 px-4 w-full max-w-7xl mx-auto">
      <div
        className="w-full p-6 flex flex-col lg:flex-row space-y-2 justify-between items-center bg-[lightgray] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.36) 0%, rgba(0, 0, 0, 0.36) 100%), url('/Background-zamrood-2.webp')`,
        }}
      >
        <img src="/LogoZamrood-12.png" alt="Pandooin Zamrood Logo White" className="h-[54px] w-auto "/>
        <div className="flex flex-col space-y-2 justify-center lg:justify-end text-right">
            <p className="text-vista-white text-base text-center lg:text-right">Want to see other destinations? Check us out at our website</p>
            <a href="https://pandooin.com" target="_blank" className="text-vista-white inline-flex items-center justify-center lg:justify-end gap-2">
                <span className="text-xl font-bold underline">Pandooin.com</span> <img src="/Vectorarrow.svg" alt="" />
            </a>
        </div>
      </div>
    </section>
  );
}
