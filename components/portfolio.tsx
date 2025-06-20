import React from 'react';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-600 shadow-2xl">
            <Image 
              src="/images/portrait.png" 
              alt="Portrait"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl font-light text-red-400 mb-6 tracking-wide courier-font">
          Michael Klein
        </h1>

        {/* Company */}
        <h2 className="text-2xl text-slate-400 mb-8 italic avenir-heavy">
          KleinCodes, LLC
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-lg mx-auto avenir-light">
          I&apos;m an engineer who is excited by challenging problems
          <br />
          and enjoys building products to share with the world.
        </p>

        {/* Current Role */}
        <p className="text-slate-400 mb-8 avenir-light">
          CTO at Smartfrog & Canary
        </p>

        {/* Company Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://www.canary.is" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/canary.png" alt="Canary App Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
          </a>
          <a href="https://www.smartfrog.com/en-us/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/smartfrog.png" alt="Smartfrog App Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
          </a>
        </div>

        {/* Products Section */}
        <p className="text-slate-400 mb-8 avenir-light">Developer of these products</p>

        {/* Product Icons */}
        <div className="flex justify-center items-center space-x-4 mb-10">
          {/* Balooga App */}
          <a href="https://apps.apple.com/us/app/balooga/id1450734153" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/balooga.png" alt="Balooga App Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
          </a>

          {/* Destinations App */}
          <a href="https://apps.apple.com/us/app/train-destinations-arrive/id1200221308" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/destinations.png" alt="Destinations App Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
          </a>

          {/* Compass App */}
          <a href="https://apps.apple.com/sg/app/compass/id926142838" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/compass.png" alt="Compass App Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
          </a>

          {/* Speedometer App */}
          <a href="https://apps.apple.com/sg/app/speedy-speedometer/id991563384" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/speedometer.png" alt="Speedometer App Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
          </a>

          {/* StoryChef App */}
          <a href="https://apps.apple.com/sg/app/storychef/id6476927109" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/storychef.png" alt="StoryChef App Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
          </a>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-0 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent max-w-sm mx-auto mb-10" />

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          {/* App Store */}
          <a href="https://apps.apple.com/sg/developer/kleincodes-llc/id717279048" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/appstore.png" alt="AppStore Icon" width={36} height={36} className="w-9 h-9 rounded-lg" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/KleinCodes" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/github.png" alt="Github Icon" width={36} height={36} className="w-9 h-9 rounded-lg" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/kleincodes" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/twitter.png" alt="Twitter Icon" width={36} height={36} className="w-9 h-9 rounded-lg" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/kleincodes/?hl=en" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/instagram.png" alt="Instagram Icon" width={36} height={36} className="w-9 h-9 rounded-lg" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kleincodes" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
            <Image src="/images/linkedin.png" alt="LinkedIn Icon" width={36} height={36} className="w-9 h-9" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;