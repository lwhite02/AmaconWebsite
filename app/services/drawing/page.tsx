import React from "react";
import Image from "next/image";

const ServicesDrawing = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden py-20 md:py-28">
        <div className="container relative z-10 mx-auto flex items-center justify-center pb-20 text-center md:text-left">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mt-20 py-20 pb-2 text-lg font-bold text-[#017dc5]">
              <span className="mt-20 border-b-2 border-[#017dc5]">
                Engineering, Design and Drawing Office
              </span>
            </h3>
            <p className="mb-5 text-5xl font-bold text-white">
              Bringing Your Vision to Life
            </p>
          </div>
        </div>

        <div className="md:w-2/2 absolute inset-0 z-0 pt-20 pb-2">
          {/* Background Image */}
          <div className="relative h-full w-full pt-20">
            <img
              src="/images/services/serviceDrawing4.webp" // Replace with your image path
              alt="Background Image Fallback"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
        </div>
      </section>

      <section className="py-2 md:py-2 lg:py-10">
        <div className="container mx-auto flex flex-col flex-wrap md:flex-row">
          {/* Electrical Engineering */}
          <div className="mb-10 px-4 md:w-1/2">
            <p className="text-4xl font-bold">Electrical Engineering</p>
            <p className="mt-5 mb-5 text-base text-[#9E9E9E]">
              Our Electrical Engineering services cover a comprehensive range of
              high and low voltage systems. We specialise in High Voltage (HV)
              system design and reticulation, with capabilities up to 132kV,
              including overhead line designs. Our Medium Voltage (MV) services
              encompass motor starter systems supporting up to 14MW, while our
              Low Voltage (LV) offerings include design and distribution
              systems, as well as LV motor control centers (MCCs).
              <br />
              <br />
              We provide detailed designs for MV/LV process plant reticulation
              systems, substation layouts, and single line diagrams. Our
              expertise also includes plant reticulation, cable racking and
              routing designs, detailed cable schedules, and small power,
              lighting, and earthing systems. Utilising specilised tools, we
              deliver both 2D and 3D designs through software such as E-Tap,
              AutoCAD, E-Des, and Microstation.
            </p>
          </div>

          {/* Instrumentation Engineering */}
          <div className="mb-10 px-4 md:ml-auto md:w-1/2">
            <p className="text-4xl font-bold">Instrumentation Engineering</p>
            <p className="mt-5 mb-5 text-base text-[#9E9E9E]">
              Our Instrumentation Engineering services encompass the creation of
              P&ID diagrams, precise instrumentation selection, and the
              development of detailed data sheets and instrument lists. We
              specialize in designing comprehensive network and system
              architecture, including PLC layout, PLC card drawings, and remote
              I/O configurations, along with field and signal junction boxes.
              <br />
              <br />
              Our expertise extends to plant reticulation, covering instrument
              location layouts, cable racking, routing, and cable schedules. We
              develop detailed loop diagrams, instrumentation hook-ups, and
              termination schedules to ensure seamless integration and
              functionality. Our solutions include comprehensive instrumentation
              power distribution designs, catering to both small-scale and
              large-scale projects.
              For visual and technical clarity, we provide both 2D and 3D
              draughting services using advanced tools such as AutoCAD,
              In-tools, F-Des, Microstation, and Solid Edge.
            </p>
          </div>

          {/* Process Control Engineering */}
          <div className="mb-10 px-4 md:w-1/2">
            <p className="text-4xl font-bold">Process Control Engineering</p>
            <p className="mt-5 mb-5 text-base text-[#9E9E9E]">
              Our Control Engineers possess extensive experience in managing and
              developing control system software, focusing on programming and
              integrating PLCs from Allen Bradley, Siemens, and Schneider. We
              excel in creating and implementing client-preferred SCADA systems,
              ensuring seamless integration and optimal performance. Our
              services include PLC programming, SCADA design and engineering,
              and the development of functional specifications. We rigorously
              conduct Factory Acceptance Testing (FAT) and simulation to
              validate system functionality and reliability.
              <br />
              <br />
              In addition to our core services, we specialise in industrial
              networking solutions, including Profibus, Profinet, and ASI Bus
              technologies. Our expertise extends to data acquisition and
              reporting systems, optimizing system performance, and providing
              comprehensive operator training. By leveraging our skills, we
              ensure that control systems are not only robust and efficient but
              also tailored to meet the specific needs of our clients. Our focus
              is on delivering high-quality, integrated solutions that enhance
              system operations and contribute to long-term success.
            </p>
          </div>

          {/* Placeholder for Image */}
          <div className="mb-10 flex justify-center px-4 md:w-1/2">
            <div className="w-full max-w-md">
              <img
                src="/images/services/serviceDrawing3.webp"
                alt="Power and Energy Solutions"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDrawing;
