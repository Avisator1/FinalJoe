import React from 'react';
import Footer from '../components/Footer';

function TermsOfService() {
  return (
   <div>
    <Footer
     <section className="bg-white mx-auto me max-w-[115rem] px-10 py-32">
      {/* Header */}
      <div className="mb-20">
        <p className="text-xl mb-4 tracking-wide text-gray-800">TERMS OF PRIVACY</p>
        <h2 className="text-[120px] font-[580] leading-none mb-8 text-black">
          Legal Notice
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-4xl">
        {/* Introduction */}
        <div className="mb-16">
          <h3 className="text-4xl font-[500] text-black mb-6">Intellectual Property Rights</h3>
          <p className="text-xl text-gray-800 leading-relaxed mb-4">
            All photographs, images, and visual content displayed on this website are the exclusive 
            intellectual property of Joe McDavid Photography and are protected under international 
            copyright laws. Unauthorized use, reproduction, distribution, or modification of any 
            content is strictly prohibited.
          </p>
        </div>

        {/* Usage Restrictions */}
        <div className="mb-16">
          <h3 className="text-4xl font-[500] text-black mb-6">Prohibited Uses</h3>
          <ul className="text-xl text-gray-800 leading-relaxed space-y-4">
            <li className="pl-4">
              • Commercial use of any images without explicit written permission
            </li>
            <li className="pl-4">
              • Reproduction, distribution, or public display of photographs
            </li>
            <li className="pl-4">
              • Creation of derivative works based on the original images
            </li>
            <li className="pl-4">
              • Use in advertising, marketing, or promotional materials
            </li>
            <li className="pl-4">
              • Digital manipulation, editing, or alteration of any kind
            </li>
            <li className="pl-4">
              • Storage in retrieval systems or transmission in any form
            </li>
          </ul>
        </div>

        {/* Legal Consequences */}
        <div className="mb-16">
          <h3 className="text-4xl font-[500] text-black mb-6">Legal Enforcement</h3>
          <p className="text-xl text-gray-800 leading-relaxed mb-4">
            Any unauthorized use of the photographic content on this website will be considered 
            copyright infringement. Joe McDavid Photography reserves the right to pursue all 
            available legal remedies, including but not limited to:
          </p>
          <ul className="text-xl text-gray-800 leading-relaxed space-y-4 mb-6">
            <li className="pl-4">
              • Issuance of cease and desist notices
            </li>
            <li className="pl-4">
              • Filing of copyright infringement lawsuits
            </li>
            <li className="pl-4">
              • Seeking monetary damages for unauthorized use
            </li>
            <li className="pl-4">
              • Pursuit of statutory damages up to $150,000 per work infringed
            </li>
            <li className="pl-4">
              • Recovery of legal fees and court costs
            </li>
          </ul>
          <p className="text-xl text-gray-800 leading-relaxed font-[500]">
            We actively monitor for unauthorized use of our intellectual property and will 
            vigorously enforce our rights through legal action when necessary.
          </p>
        </div>

        {/* Licensing Information */}
        <div className="mb-16">
          <h3 className="text-4xl font-[500] text-black mb-6">Licensing & Permissions</h3>
          <p className="text-xl text-gray-800 leading-relaxed mb-4">
            For licensing inquiries or to request permission to use any images, please contact:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-xl text-black font-[500]">
              Joe McDavid Photography<br />
              Email: dmcdavid17@outlook.com<br />
              Subject: Image Licensing Request
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            © {new Date().getFullYear()} Joe McDavid Photography. All rights reserved.
          </p>
        </div>
      </div>
    </section>
    <Footer />
   </div>
  );
}

export default TermsOfService;