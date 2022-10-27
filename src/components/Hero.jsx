import GetStartButton from "./GetStartButton";
import IllustrationInto from "../assets/img/illustration-intro.svg";

const Hero = () => {
  return (
    <section id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse md:flex-row justify-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* Left container */}
        <div className="flex flex-col mb-32 space-y-12">
          <h1 className="max-w-sm text-4xl font-bold text-center md:text-4xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <GetStartButton hidden={false} />
          </div>
        </div>
        {/* Right Container with Imgs */}
        <div className="md:w-[70%] lg:w-1/2">
          <img src={IllustrationInto} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;