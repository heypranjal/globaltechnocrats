import React, { useState, useEffect, useRef } from 'react';
import { X, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const BROCHURE_URL = 'https://drive.google.com/uc?export=download&id=1nf__qSSurzFLdHpNIDAgUwxbVxnP2hny';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  company: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  company?: string;
}

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormData>({ fullName: '', phone: '', email: '', company: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setForm({ fullName: '', phone: '', email: '', company: '' });
      setErrors({});
      setStatus('idle');
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s\-()]{8,15}$/.test(form.phone.trim())) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.company.trim()) errs.company = 'Company name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const triggerDownload = () => {
    const a = document.createElement('a');
    a.href = BROCHURE_URL;
    a.download = 'CrashRatedFence_Brochure.pdf';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      // TODO: Replace with NodeMailer API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      triggerDownload();
    } catch {
      setStatus('error');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200 bg-red-50'
        : 'border-gray-200 focus:ring-primary-900/20 focus:border-primary-900 bg-white'
    }`;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 rounded-t-2xl px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 id="brochure-modal-title" className="text-white font-bold text-lg leading-tight">
                Download Brochure
              </h2>
              <p className="text-blue-200 text-xs mt-0.5">Fill in your details to receive the PDF</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors text-white flex-shrink-0 ml-4"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {status === 'success' && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Download Started!</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Your brochure download has begun. If it doesn't start automatically,{' '}
                <a
                  href={BROCHURE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-900 font-semibold hover:underline"
                >
                  click here
                </a>.
              </p>
              <button onClick={onClose} className="btn btn-primary py-2.5 px-8 text-sm font-semibold">
                Close
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Something went wrong</h3>
              <p className="text-gray-500 text-sm mb-6">Please try again or contact us directly.</p>
              <button onClick={() => setStatus('idle')} className="btn btn-primary py-2.5 px-8 text-sm font-semibold">
                Try Again
              </button>
            </div>
          )}

          {(status === 'idle' || status === 'loading') && (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                  Full Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={inputClass('fullName')}
                />
                {errors.fullName && (
                  <p id="fullName-error" role="alert" className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                  Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  aria-required="true"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={inputClass('phone')}
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                  Email ID <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                  Company Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Global Technocrats Ltd."
                  autoComplete="organization"
                  aria-required="true"
                  aria-describedby={errors.company ? 'company-error' : undefined}
                  className={inputClass('company')}
                />
                {errors.company && (
                  <p id="company-error" role="alert" className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn btn-primary py-3 text-sm font-bold rounded-xl mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing…
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    Submit &amp; Download Brochure
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;
