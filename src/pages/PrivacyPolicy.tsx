import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 font-serif text-kaagazz-dark-brown">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Introduction</h2>
          <p className="mb-4">
            PEELTO KAAGAZZ ORGANIC PAPER LLP ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how your personal information is collected, used, and disclosed by KAAGAZZ.
          </p>
          <p>
            This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service"). 
            By accessing or using our Service, you signify that you have read, understood, and agree to our collection, 
            storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Information We Collect</h2>
          <p className="mb-4">
            We collect information from you when you visit our website, register on our site, place an order, 
            subscribe to our newsletter, respond to a survey, or fill out a form.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Payment information</li>
            <li>Usage data and cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect from you in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To personalize your experience and deliver the type of content and product offerings in which you are most interested</li>
            <li>To improve our website in order to better serve you</li>
            <li>To allow us to better service you in responding to your customer service requests</li>
            <li>To administer a contest, promotion, survey, or other site feature</li>
            <li>To quickly process your transactions</li>
            <li>To send periodic emails regarding your order or other products and services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Cookies</h2>
          <p className="mb-4">
            We use cookies to help us remember and process the items in your shopping cart, 
            understand and save your preferences for future visits, keep track of advertisements, 
            and compile aggregate data about site traffic and site interaction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information 
            unless we provide you with advance notice. This does not include website hosting partners and other parties 
            who assist us in operating our website, conducting our business, or servicing you, so long as those parties 
            agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Third-Party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website. 
            These third-party sites have separate and independent privacy policies. We therefore have no responsibility 
            or liability for the content and activities of these linked sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: 
            <a href="mailto:info@kaagazz.co.in" className="text-kaagazz-gold hover:underline"> info@kaagazz.co.in</a>
          </p>
        </section>

        <section>
          <p className="text-sm mt-12 border-t pt-6 text-gray-500">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;