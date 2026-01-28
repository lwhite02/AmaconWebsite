import { Feature } from "@/types/feature";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'; // Import Link from next/link

// Mark this component as a client component
export const useClient = true;

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, link } = feature;

  // Assuming icon is a string representing the URL of the image
  const iconUrl = typeof icon === 'string' ? icon : '';

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-[white] dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden relative">
          {/* Image at the top */}
          <div className="h-40 overflow-hidden">
            <img src={iconUrl} alt={title} className="w-full h-full object-cover" style={{ minHeight: "10rem" }} />
          </div>
          {/* Content */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[black] sm:text-2xl lg:text-2xl xl:text-2xl mb-2">
              {title}
            </h3>
            <p className="text-base leading-relaxed text-[#9E9E9E] mb-10">
              {paragraph}
            </p>
            <div className="absolute bottom-4 right-4 pt-2">
              <Link href={link}>
             
                  Learn More <FaArrowRight className="inline ml-1 hover:text-[#017dc5]" />
           
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
