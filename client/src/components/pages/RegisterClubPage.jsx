import React, { useState } from 'react';
import { 
  Trophy, ClipboardCheck, ClipboardList, Palette, Truck, Check, ArrowRight, ArrowLeft, 
  ChevronDown, ShieldCheck, Award, HelpCircle, Send, Sparkles, Building2, 
  Users, Phone, Mail, CheckCircle2, AlertCircle, Loader2, MessageSquare,
  UploadCloud, FileText, X, Link2
} from 'lucide-react';
import { useCMS, API_BASE } from '../../context/CMSContext';

export default function RegisterClubPage({ 
  onNavigateInquiry = () => {},
  onNavigateCatalog = () => {}
}) {
  const { registerClub } = useCMS();

  // Multi-step form state (1 to 5)
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const [formError, setFormError] = useState('');

  // Logo Uploader States
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);

  const handleFileUpload = async (file) => {
    if (!file) return;

    setLogoFile(file);
    if (formError) setFormError('');

    // 1. Generate local preview immediately if image
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target.result);
        if (!formData.logoUrl || formData.logoUrl.startsWith('data:')) {
          setFormData(prev => ({ ...prev, logoUrl: e.target.result }));
        }
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }

    // 2. Upload to Cloudinary / Server in background
    setIsUploadingLogo(true);
    setUploadProgress('Uploading artwork to factory server...');

    try {
      let uploadedUrl = null;

      // Try direct Cloudinary signature first (handles files up to 25MB with zero Vercel limits)
      try {
        const sigRes = await fetch(`${API_BASE}/clubs/signature`);
        if (sigRes.ok) {
          const sigJson = await sigRes.json();
          if (sigJson.success && sigJson.data) {
            const { signature, timestamp, apiKey, cloudName, folder } = sigJson.data;
            const cldFormData = new FormData();
            cldFormData.append('file', file);
            cldFormData.append('api_key', apiKey);
            cldFormData.append('timestamp', timestamp);
            cldFormData.append('signature', signature);
            cldFormData.append('folder', folder);

            const cldRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
              method: 'POST',
              body: cldFormData
            });
            const cldData = await cldRes.json();
            if (cldData.secure_url) {
              uploadedUrl = cldData.secure_url;
            }
          }
        }
      } catch (directErr) {
        console.warn('Direct Cloudinary upload attempt failed, trying backend route:', directErr);
      }

      // If direct didn't succeed, try server upload route
      if (!uploadedUrl) {
        const formPayload = new FormData();
        formPayload.append('file', file);
        const serverRes = await fetch(`${API_BASE}/clubs/upload-artwork`, {
          method: 'POST',
          body: formPayload
        });
        if (serverRes.ok) {
          const serverData = await serverRes.json();
          if (serverData.success && serverData.url) {
            uploadedUrl = serverData.url;
          }
        }
      }

      if (uploadedUrl) {
        setFormData(prev => ({ ...prev, logoUrl: uploadedUrl }));
        setUploadProgress('Uploaded successfully!');
      } else {
        setUploadProgress('File saved locally for registration proof.');
      }
    } catch (uploadErr) {
      console.warn('Artwork upload warning:', uploadErr);
      setUploadProgress('Saved locally for direct review.');
    } finally {
      setIsUploadingLogo(false);
    }
  };

  const handleRemoveFile = () => {
    setLogoFile(null);
    setLogoPreview(null);
    setUploadProgress('');
    setFormData(prev => ({ ...prev, logoUrl: '' }));
  };

  // Form Fields
  const [formData, setFormData] = useState({
    // Step 1: Club Info
    clubName: '',
    sport: 'Baseball',
    orgType: 'Club / Travel Ball',
    league: '',
    description: '',

    // Step 2: Contact & Coach
    contactName: '',
    role: 'Head Coach',
    email: '',
    phone: '',
    preferredContact: 'Email',

    // Step 3: Players & Logo
    totalPlayers: '15-30',
    totalTeams: '1-2 Teams',
    teamColors: '',
    logoUrl: '',
    uniformNeeds: '',

    // Step 4: Billing & Shipping
    country: 'United States',
    address: '',
    city: '',
    state: '',
    zip: '',
    isTaxExempt: false,
  });

  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(0);

  const sportsOptions = [
    'Baseball', 'Basketball', 'Football', 'Soccer', 'Ice Hockey',
    'Lacrosse', 'Rugby', 'Softball', 'Volleyball', 'Wrestling',
    'Flag Football', 'Esports', 'Cricket', 'Track & Field', 'Other Sport'
  ];

  const orgTypes = [
    'Club / Travel Ball',
    'High School Varsity / JV',
    'Youth Sports Academy',
    'College / University Club',
    'Recreational / Community League',
    'Private Athletic Organization'
  ];

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formError) setFormError('');
  };

  // Step Validation before progressing
  const handleNext = () => {
    setFormError('');
    if (currentStep === 1) {
      if (!formData.clubName.trim()) {
        setFormError('Please enter your Club or Team Name.');
        return;
      }
      if (!formData.sport) {
        setFormError('Please select your primary sport.');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.contactName.trim()) {
        setFormError('Please enter the primary contact or head coach name.');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setFormError('Please enter a valid official email address.');
        return;
      }
      if (!formData.phone.trim()) {
        setFormError('Please enter a contact phone number or WhatsApp.');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleBack = () => {
    setFormError('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  // Final Form Submission
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setSubmitting(true);
    setFormError('');

    try {
      const res = await registerClub(formData);
      if (res && res.success) {
        setRegistrationData(res.data || { registrationId: `HAMLO-CLUB-${Math.floor(100000 + Math.random() * 900000)}` });
        setSubmitted(true);
        window.scrollTo({ top: 200, behavior: 'smooth' });
      } else {
        setFormError(res?.message || 'Submission failed. Please check your internet connection.');
      }
    } catch (err) {
      console.error('Club Registration Error:', err);
      setFormError('An error occurred during submission. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // 6 Verified Club Registration FAQs from benchmark reference
  const faqs = [
    {
      q: "What are the benefits of registering my club?",
      a: "Registering locks in permanent cumulative tier discounts across all age divisions (U8 through U18 and Varsity/JV), provides an assigned uniform production specialist with a direct phone/WhatsApp desk, secures permanent vector and Pantone color archiving for seamless future re-orders with 0 minimums, and includes free 12-hour 3D digital artwork proofs."
    },
    {
      q: "Is there a fee to register my club?",
      a: "No. Club registration with HAMLO SPORTS is 100% free with zero fees, no hidden platform dues, and zero exclusive contract lock-ins. You simply unlock direct-from-factory pricing for your roster."
    },
    {
      q: "What types of organizations can register?",
      a: "Any athletic program can register: travel ball clubs, AAU squads, youth sports academies, high schools (NFHS), collegiate programs, club sports leagues, municipal recreation departments, and independent tournament teams."
    },
    {
      q: "Do I need to place an order to register?",
      a: "No order is required at the time of registration. You can register your club today to secure your volume discount bracket and receive free 3D digital mockups well in advance of player tryouts or roster finalization."
    },
    {
      q: "Can I register multiple teams under one account?",
      a: "Yes. Multiple age brackets, boy's and girl's divisions, and coaching staff can all be grouped under a single club umbrella. Total uniform counts combine cumulatively to achieve the highest factory volume discount."
    },
    {
      q: "How long does the registration process take?",
      a: "Filling out the form takes under 2 minutes. Once submitted, your assigned uniform production coordinator connects with you within 1 business hour to confirm your team color codes and dispatch your 3D digital proofs."
    }
  ];

  const stepsList = [
    { num: 1, title: 'Club Info' },
    { num: 2, title: 'Contact & Coach' },
    { num: 3, title: 'Players & Logo' },
    { num: 4, title: 'Billing & Shipping' },
    { num: 5, title: 'Review' },
  ];

  return (
    <div className="w-full bg-[var(--primary)] text-[var(--secondary)] min-h-screen">

      {/* ── 1. HERO BANNER (HAMLO SPORTS THEME: NAVY #1E1B6E WITH ACCENT GLOW) ── */}
      <section className="relative w-full bg-gradient-to-b from-[#1E1B6E] via-[#161352] to-[#120F45] text-white py-14 sm:py-20 border-b border-white/10 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-[96%] max-w-[1300px] mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[var(--accent)] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] border border-white/20 mb-4">
            <Sparkles size={13} /> SIALKOT FACTORY DIRECT PARTNERSHIP
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-tight drop-shadow-md">
            REGISTER YOUR TEAM - UNLOCK EXCLUSIVE DISCOUNTS
          </h1>

          <p className="text-xs sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 sm:mb-12">
            Join the HAMLO SPORTS family and get team discounts, priority ordering, and free 12-hour 3D design services.
          </p>

          {/* 4 Feature Badges (Professional React Icons & 5px rounded corners) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-[5px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[var(--accent)] transition-colors group">
              <div className="w-11 h-11 rounded-[5px] bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Trophy size={24} className="text-amber-400" />
              </div>
              <strong className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                Team Discounts
              </strong>
              <span className="text-[10px] text-white/60 font-medium mt-0.5">Permanent Volume Tiers</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-[5px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[var(--accent)] transition-colors group">
              <div className="w-11 h-11 rounded-[5px] bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <ClipboardCheck size={24} className="text-sky-400" />
              </div>
              <strong className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                Easy Ordering
              </strong>
              <span className="text-[10px] text-white/60 font-medium mt-0.5">0 MOQ Re-Orders</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-[5px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[var(--accent)] transition-colors group">
              <div className="w-11 h-11 rounded-[5px] bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Palette size={24} className="text-purple-400" />
              </div>
              <strong className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                Custom Designs
              </strong>
              <span className="text-[10px] text-white/60 font-medium mt-0.5">Free 12h 3D Mockups</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-[5px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[var(--accent)] transition-colors group">
              <div className="w-11 h-11 rounded-[5px] bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Truck size={24} className="text-[var(--accent)]" />
              </div>
              <strong className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                Priority Shipping
              </strong>
              <span className="text-[10px] text-white/60 font-medium mt-0.5">Direct DDP Air Express</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MULTI-STEP PROGRESS STEPPER & REGISTRATION FORM ── */}
      <section className="w-[96%] max-w-[960px] mx-auto py-12 sm:py-16">
        
        {!submitted ? (
          <div className="bg-white rounded-[5px] shadow-xl border border-[var(--secondary)]/15 overflow-hidden">
            
            {/* Step Progress Bar (Screenshot 2 Benchmark) */}
            <div className="p-6 sm:p-8 bg-neutral-50/70 border-b border-neutral-200">
              <div className="flex items-center justify-between max-w-2xl mx-auto relative">
                {/* Connecting Line */}
                <div className="absolute top-4 left-6 right-6 h-0.5 bg-neutral-200 z-0" />
                <div 
                  className="absolute top-4 left-6 h-0.5 bg-[var(--accent)] z-0 transition-all duration-500" 
                  style={{ width: `${((currentStep - 1) / 4) * 88}%` }}
                />

                {stepsList.map((s) => {
                  const isActive = currentStep === s.num;
                  const isCompleted = currentStep > s.num;

                  return (
                    <div 
                      key={s.num} 
                      className="relative z-10 flex flex-col items-center cursor-pointer group"
                      onClick={() => {
                        // Allow clicking back to completed steps
                        if (isCompleted) setCurrentStep(s.num);
                      }}
                    >
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                        isActive 
                          ? 'bg-[var(--accent)] text-white ring-4 ring-[var(--accent)]/20 shadow-md' 
                          : isCompleted 
                            ? 'bg-emerald-600 text-white' 
                            : 'bg-white text-neutral-400 border-2 border-neutral-300'
                      }`}>
                        {isCompleted ? <Check size={14} strokeWidth={3} /> : s.num}
                      </div>
                      <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-2 transition-colors ${
                        isActive ? 'text-[var(--accent)] font-black' : isCompleted ? 'text-neutral-800' : 'text-neutral-400'
                      }`}>
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Error Message Alert */}
            {formError && (
              <div className="mx-6 sm:mx-10 mt-6 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-[5px] flex items-center gap-2">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Step Content Container */}
            <div className="p-6 sm:p-10">

              {/* ── STEP 1: CLUB INFORMATION (Screenshot 2 & 3) ── */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b border-neutral-100">
                    <div className="inline-flex items-center justify-center gap-2 mb-1 text-[var(--accent)]">
                      <Building2 size={20} />
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] tracking-tight">
                        CLUB INFORMATION
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                      Tell us about your team or organization
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Club/Team Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Texas Titans Baseball Club"
                        value={formData.clubName}
                        onChange={(e) => updateField('clubName', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Sport *
                      </label>
                      <select
                        value={formData.sport}
                        onChange={(e) => updateField('sport', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] cursor-pointer"
                      >
                        {sportsOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Organization Type *
                      </label>
                      <select
                        value={formData.orgType}
                        onChange={(e) => updateField('orgType', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] cursor-pointer"
                      >
                        {orgTypes.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        League / Division
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., High School Varsity, U12 Division, AAU"
                        value={formData.league}
                        onChange={(e) => updateField('league', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                      Club Description
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Brief description of your team/organization, age divisions, or current uniform requirements..."
                      value={formData.description}
                      onChange={(e) => updateField('description', e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3.5 bg-[#1E1B6E] hover:bg-[var(--accent)] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-[5px] shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>NEXT &gt;</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 2: CONTACT & COACH ── */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b border-neutral-100">
                    <div className="inline-flex items-center justify-center gap-2 mb-1 text-[var(--accent)]">
                      <Users size={20} />
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] tracking-tight">
                        CONTACT & COACH INFORMATION
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                      Who should our uniform production desk coordinate with?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Primary Contact / Coach Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Coach Mark Stevens"
                        value={formData.contactName}
                        onChange={(e) => updateField('contactName', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Head Coach, Athletic Director, Equipment Manager"
                        value={formData.role}
                        onChange={(e) => updateField('role', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="coach@yourclub.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g., +1 (555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4 pt-1">
                      {['Email', 'Phone Call', 'WhatsApp'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer text-xs font-bold uppercase text-neutral-700">
                          <input
                            type="radio"
                            name="preferredContact"
                            checked={formData.preferredContact === method}
                            onChange={() => updateField('preferredContact', method)}
                            className="accent-[var(--accent)]"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[5px] transition cursor-pointer"
                    >
                      &lt; BACK
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3.5 bg-[#1E1B6E] hover:bg-[var(--accent)] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-[5px] shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>NEXT &gt;</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 3: PLAYERS & LOGO ── */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b border-neutral-100">
                    <div className="inline-flex items-center justify-center gap-2 mb-1 text-[var(--accent)]">
                      <Palette size={20} />
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] tracking-tight">
                        ROSTER, LOGO & UNIFORM NEEDS
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                      Help us prepare your 12-hour free 3D digital artwork proof
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Approximate Total Players
                      </label>
                      <select
                        value={formData.totalPlayers}
                        onChange={(e) => updateField('totalPlayers', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--accent)] cursor-pointer"
                      >
                        <option value="15-30">15 – 30 Players (1–2 Squads)</option>
                        <option value="31-60">31 – 60 Players (3–4 Squads)</option>
                        <option value="61-120">61 – 120 Players (Whole Age Bracket)</option>
                        <option value="120+">120+ Players (Full Club / Organization)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Team Primary Colors
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Deep Navy, Radiant Orange, White"
                        value={formData.teamColors}
                        onChange={(e) => updateField('teamColors', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>

                  {/* Dedicated Logo & Artwork Uploader */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Palette size={14} className="text-[var(--accent)]" />
                        Club Logo / Team Crest Artwork
                      </span>
                      <span className="text-[10px] text-neutral-400 font-normal">Optional (Upload file or share link)</span>
                    </label>

                    {!logoFile && !formData.logoUrl ? (
                      /* Drag & Drop Dropzone Box */
                      <div
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const file = e.dataTransfer.files?.[0];
                          if (file) handleFileUpload(file);
                        }}
                        className="border-2 border-dashed border-neutral-300 hover:border-[var(--accent)] transition-all rounded-[5px] p-6 text-center bg-neutral-50/60 hover:bg-neutral-50 group cursor-pointer"
                        onClick={() => document.getElementById('club-logo-file-input')?.click()}
                      >
                        <input
                          id="club-logo-file-input"
                          type="file"
                          accept="image/*,.pdf,.ai,.eps,.svg"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file);
                            e.target.value = '';
                          }}
                        />
                        <div className="w-12 h-12 rounded-[5px] bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <UploadCloud size={24} />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-[var(--secondary)] mb-0.5">
                          Click to upload or drag &amp; drop team logo / artwork
                        </p>
                        <span className="text-[11px] text-neutral-500 font-light block mb-3">
                          PNG, SVG, JPG, WEBP, PDF, AI, or EPS (High Resolution up to 25MB)
                        </span>
                        <span className="inline-block px-4 py-1.5 bg-[#1E1B6E] group-hover:bg-[var(--accent)] text-white text-[11px] font-bold uppercase tracking-wider rounded-[5px] transition shadow-xs">
                          Choose Logo File
                        </span>
                      </div>
                    ) : (
                      /* Uploaded File Preview Card */
                      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-[5px] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 overflow-hidden">
                          {logoPreview ? (
                            <img
                              src={logoPreview}
                              alt="Club Crest Preview"
                              className="w-12 h-12 object-contain rounded-[4px] border border-neutral-200 bg-white p-1 flex-shrink-0 shadow-xs"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-[4px] bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                              <FileText size={24} />
                            </div>
                          )}
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-[var(--secondary)] truncate block">
                              {logoFile ? logoFile.name : 'Team Logo Attached'}
                            </span>
                            <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5">
                              {logoFile && (
                                <span>{(logoFile.size / (1024 * 1024)).toFixed(2)} MB •</span>
                              )}
                              {isUploadingLogo ? (
                                <span className="inline-flex items-center gap-1 text-[var(--accent)] font-medium">
                                  <Loader2 size={12} className="animate-spin" /> Uploading to server...
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                                  <CheckCircle2 size={12} /> Ready for 3D proof
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="px-3 py-1.5 border border-red-200 text-red-600 hover:bg-red-50 text-[11px] font-bold uppercase tracking-wider rounded-[5px] transition flex items-center gap-1 flex-shrink-0 cursor-pointer"
                        >
                          <X size={12} />
                          <span>Remove</span>
                        </button>
                      </div>
                    )}

                    {/* External Link Option Toggle */}
                    <div className="mt-2 text-right">
                      <button
                        type="button"
                        onClick={() => setShowLinkInput(!showLinkInput)}
                        className="text-[11px] text-[var(--accent)] hover:underline inline-flex items-center gap-1 cursor-pointer font-medium"
                      >
                        <Link2 size={11} />
                        <span>{showLinkInput ? 'Hide link option' : 'Or paste Google Drive / Dropbox link'}</span>
                      </button>
                    </div>

                    {showLinkInput && (
                      <div className="mt-2 animate-fade-in">
                        <input
                          type="url"
                          placeholder="https://drive.google.com/... or paste shared logo link"
                          value={formData.logoUrl && !formData.logoUrl.startsWith('data:') ? formData.logoUrl : ''}
                          onChange={(e) => updateField('logoUrl', e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[5px] text-xs font-mono focus:outline-none focus:border-[var(--accent)] bg-white"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                      Uniform Needs &amp; Garments
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g., Full button baseball jerseys + pants, warmup hoodies, customized socks, coaching staff polos..."
                      value={formData.uniformNeeds}
                      onChange={(e) => updateField('uniformNeeds', e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[5px] transition cursor-pointer"
                    >
                      &lt; BACK
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3.5 bg-[#1E1B6E] hover:bg-[var(--accent)] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-[5px] shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>NEXT &gt;</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 4: BILLING & SHIPPING ── */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b border-neutral-100">
                    <div className="inline-flex items-center justify-center gap-2 mb-1 text-[var(--accent)]">
                      <Truck size={20} />
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] tracking-tight">
                        BILLING & SHIPPING LOCATION
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                      For accurate DDP air freight estimates and club regional tax exemption
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => updateField('country', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm bg-neutral-50 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        Street Address
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 104 Athletic Club Way"
                        value={formData.address}
                        onChange={(e) => updateField('address', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Dallas"
                        value={formData.city}
                        onChange={(e) => updateField('city', e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                          State
                        </label>
                        <input
                          type="text"
                          placeholder="TX"
                          value={formData.state}
                          onChange={(e) => updateField('state', e.target.value)}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--secondary)] mb-1.5">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          placeholder="75001"
                          value={formData.zip}
                          onChange={(e) => updateField('zip', e.target.value)}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-[5px] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-[5px] bg-neutral-50 border border-neutral-200">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isTaxExempt}
                        onChange={(e) => updateField('isTaxExempt', e.target.checked)}
                        className="w-4 h-4 accent-[var(--accent)] cursor-pointer"
                      />
                      <div>
                        <strong className="block text-xs font-bold uppercase text-[var(--secondary)]">
                          School District / 501(c)(3) Tax Exempt Organization
                        </strong>
                        <span className="text-[11px] text-neutral-500 font-light block">
                          Check this if your team or athletic department holds an official sales-tax exemption certificate.
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[5px] transition cursor-pointer"
                    >
                      &lt; BACK
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3.5 bg-[#1E1B6E] hover:bg-[var(--accent)] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-[5px] shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>REVIEW DETAILS &gt;</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 5: REVIEW & CONFIRM ── */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b border-neutral-100">
                    <h2 className="text-2xl sm:text-3xl font-black uppercase text-[var(--secondary)] tracking-tight">
                      REVIEW &amp; SUBMIT REGISTRATION
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                      Verify your club details before unlocking your volume tier
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-neutral-50 rounded-[5px] p-5 sm:p-6 border border-neutral-200 space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-neutral-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-neutral-400 block">Club / Organization</span>
                        <strong className="text-sm font-black uppercase text-[var(--secondary)]">{formData.clubName}</strong>
                        <span className="text-xs text-neutral-600 block">{formData.sport} • {formData.orgType}</span>
                        {formData.league && <span className="text-[11px] text-neutral-500 block">League: {formData.league}</span>}
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase text-neutral-400 block">Primary Coach / Contact</span>
                        <strong className="text-sm font-black text-[var(--secondary)]">{formData.contactName} ({formData.role})</strong>
                        <span className="text-xs text-neutral-600 block">{formData.email} • {formData.phone}</span>
                        <span className="text-[11px] text-neutral-500 block">Preferred: {formData.preferredContact}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-neutral-400 block">Roster & Colors</span>
                        <span className="text-neutral-700 font-medium block">Players: {formData.totalPlayers}</span>
                        <span className="text-neutral-700 font-medium block">Colors: {formData.teamColors || 'To be specified'}</span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase text-neutral-400 block">Shipping Location</span>
                        <span className="text-neutral-700 font-medium block">
                          {formData.city ? `${formData.city}, ${formData.state} ${formData.zip}` : 'United States'}
                        </span>
                        {formData.isTaxExempt && <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">✓ Tax-Exempt Status</span>}
                      </div>
                    </div>

                    {formData.description && (
                      <div className="pt-2 border-t border-neutral-200">
                        <span className="text-[10px] font-bold uppercase text-neutral-400 block">Notes &amp; Needs</span>
                        <p className="text-neutral-600 italic font-light">{formData.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={submitting}
                      className="px-6 py-3 border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[5px] transition cursor-pointer"
                    >
                      &lt; BACK
                    </button>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="px-8 py-3.5 bg-[var(--accent)] hover:bg-[#d95316] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>ACTIVATING VOLUME TIER...</span>
                        </>
                      ) : (
                        <>
                          <Trophy size={16} />
                          <span>SUBMIT CLUB REGISTRATION</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        ) : (
          /* ── SUCCESS STATE CONFIRMATION ── */
          <div className="bg-white rounded-[5px] shadow-2xl border border-emerald-200 p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-emerald-700 block mb-1">
                REGISTRATION CONFIRMED
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] tracking-tight">
                WELCOME TO THE HAMLO SPORTS CLUB PROGRAM!
              </h2>
            </div>

            <div className="p-4 rounded-[5px] bg-neutral-50 border border-neutral-200 max-w-md mx-auto">
              <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Your Official Club ID</span>
              <strong className="text-xl sm:text-2xl font-mono font-black text-[var(--accent)] tracking-wider block">
                {registrationData?.registrationId || 'HAMLO-CLUB-ACTIVATED'}
              </strong>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto font-light leading-relaxed">
              Thank you, <strong>{formData.contactName}</strong>! Your club <strong>{formData.clubName}</strong> is now officially registered in our factory volume program. An assigned senior uniform production specialist will reach out within 1 business hour to review your 3D digital artwork proofs.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigateInquiry(formData.clubName)}
                className="w-full sm:w-auto px-6 py-3 bg-[var(--accent)] hover:bg-[#d95316] text-white text-xs font-black uppercase tracking-widest rounded-[5px] shadow transition cursor-pointer"
              >
                REQUEST 3D DESIGN PROOF
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full sm:w-auto px-6 py-3 bg-[#1E1B6E] hover:bg-[#161352] text-white text-xs font-black uppercase tracking-widest rounded-[5px] shadow transition cursor-pointer"
              >
                RETURN TO HOMEPAGE
              </button>
            </div>
          </div>
        )}

      </section>

      {/* ── 3. CLUB REGISTRATION FAQS (Matching Screenshot 4 & 5 Benchmark) ── */}
      <section className="w-full bg-white py-16 sm:py-24 border-t border-[var(--secondary)]/10">
        <div className="w-[96%] max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <HelpCircle size={28} className="text-[var(--accent)]" />
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--secondary)] leading-tight">
                CLUB REGISTRATION FAQS
              </h2>
            </div>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-neutral-500 font-light">
              Everything you need to know about registering your team or club
            </p>
          </div>

          {/* 2-Column Responsive FAQ Grid (Screenshot 4 & 5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className={`bg-white rounded-[5px] border transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-md ${
                    isOpen 
                      ? 'border-[var(--accent)] ring-1 ring-[var(--accent)]/30' 
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[var(--secondary)] leading-snug">
                      {faq.q}
                    </h3>
                    <span className={`text-base font-bold transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'text-[var(--accent)] rotate-45' : 'text-neutral-400'
                    }`}>
                      +
                    </span>
                  </div>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs text-neutral-600 font-light leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help CTA Box (Screenshot 5 Benchmark) */}
          <div className="mt-14 sm:mt-16 p-8 sm:p-10 bg-neutral-50 border border-neutral-200 rounded-[5px] text-center max-w-xl mx-auto space-y-4">
            <p className="text-xs sm:text-sm font-bold text-neutral-700">
              Have more questions? We're here to help!
            </p>
            <button
              onClick={() => onNavigateInquiry('Club Registration Inquiry')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--accent)] hover:bg-[#d95316] text-white text-xs font-black uppercase tracking-wider rounded-[5px] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Phone size={14} />
              <span>CONTACT OUR TEAM</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
