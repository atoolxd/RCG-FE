import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/layout/Layout';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      toast.error('Please fill out all fields');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    emailjs
      .sendForm(
        'service_qucehv5',
        'template_0owpwf9',
        e.target,
        'Jax5orMYzJxd24nTs'
      )
      .then(
        (result) => {
          setResult(result);
          toast.success('Message sent successfully');
        },
        (error) => {
          setResult(error);
          toast.error('Error sending message');
        }
      );
  };

  return (
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
                <p className="text-body-text color-gray-600">(+61) 040513983</p>
                <p className="text-body-text color-gray-600">support@rocketeers.com.au</p>
                <div style={{
                  display: 'grid',
                  gap: '20px',
                  alignItems: 'center',
                  marginTop: '50px',
                  marginBottom: '0px'
                }}>
                  <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="form-group">
                      <input className='form-control form-group'
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        style={{
                          padding: '10px',
                          marginBottom: '10px',
                          border: '1px solid #ccc',
                          borderRadius: '5px',
                          width: '100%'
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input className='form-control form-group'
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your mail"
                        required
                        style={{
                          padding: '10px',
                          marginBottom: '10px',
                          border: '1px solid #ccc',
                          borderRadius: '5px',
                          width: '100%'
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input className='form-control form-group'
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                        pattern="[0-9]{10}"
                        required
                        style={{
                          padding: '10px',
                          marginBottom: '10px',
                          border: '1px solid #ccc',
                          borderRadius: '5px', width: '100%'
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input className='form-control form-group'
                        type="text"
                        placeholder="Company (optional)"
                        style={{
                          padding: '10px',
                          marginBottom: '10px',
                          border: '1px solid #ccc',
                          borderRadius: '5px',
                          width: '100%'
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        value={message} onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about yourself" required
                        style={{
                          padding: '10px',
                          marginBottom: '10px',
                          border: '1px solid #ccc',
                          borderRadius: '5px',
                          width: '100%',
                          height: '200px'
                        }}
                      ></textarea>
                   </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-black btn-block shape-square" style={{
                        padding: '10px 20px',
                        fontSize: '18px',
                      }}>
                        Send Message
                      </button>
                      <br className="d-lg-none d-block" />
                      <span className="text-body-text-md color-gray-500 mb-20">
                        By clicking contact us button, you agree our terms and policy,
                      </span>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
            <style jsx>{`
        @media (min-width: 992px) {
          .mb-40 {
            width: 800px;
          }
        }

        @media (max-width: 991px) {
          .top-desktop {
            display: none;
          }
          .mb-40 {
            width: 100%;
            display: block;
          }
          .form-control.form-group {
            width: 100%;
          }
          .icon-arrow-right-white {
            padding: 0 20px;
          }

          .btn-block {
            width: 100%;
            display: block;
          }

          .form-group {
            text-align: center;
          }

          button[type="submit"] {
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
            font-weight: bold;
          }

          textarea {
            height: 150px;
          }
        }
      `}</style>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactForm;