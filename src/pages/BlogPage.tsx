import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Sparkles,
  PenTool,
  Shield,
  Cpu,
  FileText,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react';

const upcomingTopics = [
  {
    Icon: Shield,
    title: 'Perimeter Security Insights',
    description:
      'Deep-dives on crash-rated fencing, anti-climb systems and the engineering behind critical infrastructure protection.',
    tag: 'Engineering',
  },
  {
    Icon: Cpu,
    title: 'Defence Tech Deep Dives',
    description:
      'Perspectives on AI-driven surveillance, image intelligence and next-generation battlefield technology.',
    tag: 'Innovation',
  },
  {
    Icon: FileText,
    title: 'DRDO TOT Innovations',
    description:
      'The stories behind indigenous defence products, from lab to field, and what they mean for national security.',
    tag: 'Research',
  },
  {
    Icon: PenTool,
    title: 'Case Studies & Field Notes',
    description:
      'Lessons from real deployments — border security, energy assets, airports and high-risk installations.',
    tag: 'Case Study',
  },
];

const timeline = [
  { label: 'Research in progress', status: 'active' },
  { label: 'Editorial in the works', status: 'active' },
  { label: 'First articles launching soon', status: 'upcoming' },
];

const BlogPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Resources — Coming Soon | Global Technocrats</title>
        <meta
          name="description"
          content="Our Resources hub is on the way. Expect insights on perimeter security, defence tech, DRDO innovations and real-world case studies from Global Technocrats."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-900 py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-700 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary-300" />
              <span className="text-sm font-medium text-white/90">
                Something insightful is on the way
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Insights,{' '}
              <span className="relative inline-block">
                <span className="relative z-10">In the Making</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-primary-500/40 -z-0" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We're building a Resources hub with original writing on perimeter security,
              defence technology and the field engineering behind Global Technocrats.
              Our first articles are on the way.
            </p>

            <a
              href="#notify"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-secondary-900 font-semibold hover:bg-primary-50 transition-colors"
            >
              Get notified when we launch
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What's coming */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What we're writing about
            </h2>
            <p className="text-gray-600">
              A preview of the themes our editorial team is preparing. Each one draws
              from real projects, real engineering and real field experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingTopics.map(({ Icon, title, description, tag }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </div>

                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors">
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>

                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {tag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Where we are right now
              </h2>
              <p className="text-gray-600">
                A transparent look at our editorial progress.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200" />
              <div className="space-y-8">
                {timeline.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative flex items-start gap-6 pl-0"
                  >
                    <div
                      className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === 'active'
                          ? 'bg-primary-600'
                          : 'bg-white border-2 border-primary-300'
                      }`}
                    >
                      {step.status === 'active' && (
                        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                      )}
                    </div>
                    <div className="pt-1">
                      <p className="text-lg font-semibold text-gray-900">
                        {step.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notify form */}
      <section id="notify" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-secondary-900 to-primary-800 rounded-3xl p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Be the first to read them
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                Leave your email and we'll send you our first articles the moment they
                go live. No spam, no filler — just useful writing on security and
                defence technology.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
                >
                  <Sparkles className="w-5 h-5 text-primary-300" />
                  You're on the list. We'll be in touch.
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white/15"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-lg bg-white text-secondary-900 font-semibold hover:bg-primary-50 transition-colors whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              )}

              <p className="text-xs text-white/50 mt-5">
                By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
