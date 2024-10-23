import image from './Image/2.png'
const Hero = () => {
    const style = {
        backgroundImage: `url(${image})`, // Use the URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       // Full viewport height
      };
    
    return (
        <div className="container mx-auto" style={style}>

            <div className="hero ">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-2xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                  <p className="mb-5">
                  Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                  </p>
                  <button className="btn ml-2 btn-primary">Explore Now</button>
                  <button className="btn ml-2 btn-primary">Our Feedback</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;