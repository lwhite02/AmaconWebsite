import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      " Our vision is to be a company that achieves project excellence through outstanding service delivery, innovation, performance and engineering to the highest standards in the fields of Electrical, Control and Instrumentation Engineering.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
    title: "Vision"
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
    title: "Mission"
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
    title: "Values"
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-[#F7F7F7] py-16 md:py-20 lg:py-28 mb-">
      <div className="container mb-5">
        <SectionTitle
          title="About Us"

          center paragraph={""}        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      
    </section>
  );
};

export default Testimonials;
