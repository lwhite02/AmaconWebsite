import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-white py-5 md:py-20 lg:py-28">
        <div className="container">
          <div className="text-center">
            <h3 className="pb-2 text-lg font-bold text-[#0484cc]">
              <span className="border-b-2 border-[#0484cc]">Services</span>
            </h3>
            <p className="mt-2 mb-5 text-5xl font-bold">
              Engineering Excellence: Our Journey and Expertise
            </p>
          </div>

          <br />
          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div key={feature.id} className="flex flex-col h-full">
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
