import { Brand } from "@/types/brand";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://global.abb/group/en",
    image: "/images/brands/brandsAbb.png",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://www.angloamericanplatinum.com/",
    image: "/images/brands/brandsAngloBlue.png",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://www.suninternational.com/windmill/?gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNkW_X2nD-KofMqKFzlNiqQWUU5EOr-AVPgfp5OMv2xVgOlYEAi3-3oaAhD-EALw_wcB",
    image: "/images/brands/brandsSun.png",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://www.sab.co.za/agegate?destination=",
    image: "/images/brands/brandsSab.webp",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://lucaradiamond.com/",
    image: "/images/brands/brandsLucara.png",
  },
  {
    id: 6,
    name: "TailAdmin",
    href: "https://www.chromtech.co.za/en/",
    image: "/images/brands/brandsChromtech.webp",
  },
  {
    id: 7,
    name: "TailAdmin",
    href: "https://g4eps.co.za/",
    image: "/images/brands/brandsG4.png",
  },
  {
    id: 8,
    name: "TailAdmin",
    href: "https://www.teraco.co.za/",
    image: "/images/brands/brandsTeraco.png",
  },
  {
    id: 9,
    name: "TailAdmin",
    href: "https://www.teraco.co.za/",
    image: "/images/brands/brandsbombela.jpg",
  },
  {
    id: 10,
    name: "TailAdmin",
    href: "https://www.teraco.co.za/",
    image: "/images/brands/brandsglencore.jpg",
  },
  {
    id: 11,
    name: "TailAdmin",
    href: "https://www.teraco.co.za/",
    image: "/images/brands/brandsZenito.png",
  },
];

const Brands = () => {
  const scrollingBrands = [...brandsData, ...brandsData];
  return (
    <section className="pt-5">
      <div className="container">
        <div className="-mx-1 flex flex-wrap">
          
            <div className="flex flex-col items-center justify-center text-center w-full">
              <h3 className="pb-2 pt-10 text-lg font-bold text-[#0484cc]">
                <span className="border-b-2 border-[#0484cc]">Our Clients</span>
              </h3>
              <p className="mb-5 text-5xl font-bold">
                Trusted by Leading Organisations
              </p>
            </div>
            <div
              className="wow fadeInUp w-full flex flex-wrap items-center justify-center rounded-md bg-[white] py-4  sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              <div className="relative w-full overflow-hidden bg-white py-6">
                <div className="flex w-max animate-scroll gap-10">
                  {scrollingBrands.map((brand, index) => (
                    <SingleBrand key={index} brand={brand} />
                  ))}
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-md bg-[white] opacity-95 transition hover:opacity-100"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain grayscale filter transition duration-300 hover:grayscale-0"
        />
      </a>
    </div>
  );
};
