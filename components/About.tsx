import React, { useState, useEffect } from 'react';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);
  

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Carousel */}
          <div className="relative h-64 md:h-full overflow-hidden rounded-lg shadow-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[5000ms] ease-linear ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            ))}
          </div>
          {/* About Text */}
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "Courier New, monospace" }}
            >
              About Archives Digital
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to Archives Digital, where knowledge meets innovation. Our digital library
              brings together centuries of literary excellence with modern technology, making it
              easier than ever to discover, read, and collect your favorite books.
            </p>
            <p className="text-gray-600">
              Founded with the mission to make literature accessible to everyone, we offer a
              carefully curated collection of classics, contemporary works, and everything in
              between. Join us in our journey to keep the love of reading alive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
