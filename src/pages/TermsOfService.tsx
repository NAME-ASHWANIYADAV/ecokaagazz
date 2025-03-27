import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 font-serif text-kaagazz-dark-brown">Terms of Service</h1>
      
      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Introduction</h2>
          <p className="mb-4">
            Welcome to KAAGAZZ. These Terms of Service ("Terms") govern your use of our website 
            and services offered by PEELTO KAAGAZZ ORGANIC PAPER LLP ("we", "our", or "us").
          </p>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms. 
            If you disagree with any part of the terms, you may not access the website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Use of Our Services</h2>
          <p className="mb-4">
            You must be at least 18 years of age to use this website. By using this website and agreeing 
            to these Terms, you warrant and represent that you are at least 18 years of age.
          </p>
          <p>
            You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, 
            violate any laws in your jurisdiction (including but not limited to copyright laws).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Products and Services</h2>
          <p className="mb-4">
            All products and services are subject to availability. We reserve the right to discontinue any product 
            or service at any time. Prices for our products are subject to change without notice.
          </p>
          <p>
            We reserve the right to refuse service to anyone for any reason at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Accuracy of Information</h2>
          <p>
            We are not responsible if information made available on this site is not accurate, complete, or current. 
            The material on this site is provided for general information only and should not be relied upon or used 
            as the sole basis for making decisions without consulting primary, more accurate, more complete, or more 
            timely sources of information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by PEELTO KAAGAZZ ORGANIC PAPER LLP 
            and are protected by international copyright, trademark, patent, trade secret, and other intellectual property 
            or proprietary rights laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">User Content</h2>
          <p>
            By posting content on our website, you grant us the right and license to use, modify, publicly perform, 
            publicly display, reproduce, and distribute such content on and through our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, 
            without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-kaagazz-dark-brown">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: 
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

export default TermsOfService;