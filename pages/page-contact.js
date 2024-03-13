// Import React and useState
import React, { useState } from 'react';

// Import Layout component
import Layout from '../components/layout/Layout';

// Define the Contact component
function Contact() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch to the serverless function (API route) for handling email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Parse the response
      const data = await response.json();

      // Check if the request was successful
      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally, reset the form after successful submission
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        console.error('Error sending email:', data.error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Have an project in mind?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">The right move at the right time saves your investment.<br className="d-lg-block d-none" />Live the dream of expanding your business.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Rocketeers Consultation Group</h4>
                                    <p className="text-body-text color-gray-600">Sydney, Australia</p>
                                    <p className="text-body-text color-gray-600">(+61) 123123123</p>
                                    <p className="text-body-text color-gray-600">support@rocketeers.com.au</p>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <form onSubmit={handleSubmit}>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" name="company" placeholder="Company (optional)" value={formData.company} onChange={handleChange}/></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" name="email" placeholder="Your mail" value={formData.email} onChange={handleChange}/></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange}/></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" name="message" placeholder="Tell us about yourself" value={formData.message} onChange={handleChange}/></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black shape-square icon-arrow-right-white" type="submit">Send Message</button><br className="d-lg-none d-block"/><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-20">Our Location</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">In a professional context it often happens that private or<br className="d-lg-block d-none" />corporate clients order a publication to publish news.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Office</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Sydney, Australia<br />Phone: (123) 456-7890<br />Email: support@rocketeers.com.au</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Office</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Kathmandu, Bagmati, Nepal<br />Phone: (123) 456-7890<br />Email: support@rocketeers.com.au</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Office</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">Los Angeles, USA<br />Phone: (123) 456-7890<br />Email: support@rocketeers.com.au</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do"><img className="bdrd-16 img-responsive" src="assets/imgs/page/about/3/img-2.png" alt="Agon" /></div>
                            <div className="col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-30">An Exceptionally unique experience Tailored to you</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">In a professional context it often happens that private or corporate clients order a publication news while still not being ready. Business advisory service advises current and future businesses prospects of a client</p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Boost your sale</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Smart Installation Tools</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Introducing New Features</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Dynamic Boosting</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="bd-bottom pb-70">
                            <ul className="list-5-col">
                                <li><span className="text-display-3 color-green-900">+<span className="count">6</span></span>
                                    <p className="text-body-text color-gray-500 pl-40">Years in<br />Business</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">12</span></span>
                                    <p className="text-body-text color-gray-500 pl-40">Projects<br />Done</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">4</span></span>
                                    <p className="text-body-text color-gray-500 pl-40">Countries<br />/ Offices</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">12</span></span>
                                    <p className="text-body-text color-gray-500 pl-40">Constant<br />Clients</p>
                                </li>
                                <li><span className="text-display-3 color-green-900">+<span className="count">27</span></span>
                                    <p className="text-body-text color-gray-500 pl-40">Paid Customers</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </Layout>

        </>
    )
}

export default Contact;