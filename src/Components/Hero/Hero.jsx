import image from './Image/2.png'
const Hero = () => {
    const style = {
        backgroundImage: `url(${image})`, // Use the URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       // Full viewport height
      };
    
    return (
        <div className="container mx-auto h-100" style={style}>

            <div className="hero ">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;