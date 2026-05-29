import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Loader } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint when backend is ready
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='section-padding bg-white'>
      <div className='container-custom'>
        <SectionTitle
          title='Get In Touch'
          subtitle="Have a question or want to work together? I'd love to hear from you!"
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <FadeIn>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-text mb-6'>
                Contact Information
              </h3>
              <p className='text-lightText text-lg mb-8'>
                Feel free to reach out through any of these channels, or use the
                contact form. I'll get back to you as soon as possible!
              </p>

              <div className='space-y-4'>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-4 p-4 bg-background rounded-xl hover:bg-primary/10 transition-colors group'
                >
                  <div className='p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform'>
                    <Mail className='text-white' size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-lightText'>Email</p>
                    <p className='text-text font-medium'>{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-4 p-4 bg-background rounded-xl hover:bg-primary/10 transition-colors group'
                >
                  <div className='p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform'>
                    <Phone className='text-white' size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-lightText'>Phone</p>
                    <p className='text-text font-medium'>{personalInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-center gap-4 p-4 bg-background rounded-xl'
                >
                  <div className='p-3 bg-gradient-primary rounded-lg'>
                    <MapPin className='text-white' size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-lightText'>Location</p>
                    <p className='text-text font-medium'>
                      {personalInfo.location}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Element */}
              <div className='mt-12 p-6 bg-gradient-primary rounded-2xl text-white'>
                <h4 className='text-xl font-bold mb-2'>
                  Available for Opportunities
                </h4>
                <p className='text-white/90'>
                  I'm currently looking for internship and entry-level frontend
                  developer positions. Let's connect!
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className='card bg-background'>
              <div className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-text font-medium mb-2'
                  >
                    Your Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
                    placeholder='John Doe'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-text font-medium mb-2'
                  >
                    Your Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
                    placeholder='john@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-text font-medium mb-2'
                  >
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
                    placeholder='Project Inquiry'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-text font-medium mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none'
                    placeholder='Tell me about your project...'
                  />
                </div>

                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  disabled={isSubmitting}
                  className='w-full'
                  icon={isSubmitting ? Loader : Send}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-4 bg-green-100 text-green-700 rounded-xl text-center'
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-4 bg-red-100 text-red-700 rounded-xl text-center'
                  >
                    ✗ Oops! Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;