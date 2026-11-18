import React, { useState, useEffect } from 'react';
import api from '../api/client';
import MediaUploadField from '../components/MediaUploadField';
import { 
  Home, Video, Image as ImageIcon, Save, RefreshCw, 
  CheckCircle, Sliders, Type, Layers, ExternalLink, Plus, Trash2, Grid 
} from 'lucide-react';

export default function HomePageManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [saveStatus, setSaveStatus] = useState('');

  // Complete Home Page Sections Data Structure with ALL 12 Categories
  const [homeData, setHomeData] = useState({
    hero: {
      badge: 'CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER',
      title: 'PRO-GRADE DYE-SUBLIMATED UNIFORMS & TEAM APPAREL FACTORY DIRECT',
      buttonText: 'Explore 2026 Sports Uniforms Collection',
      videoUrl: '/leaderhero.mp4',
      posterImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1920&auto=format&fit=crop',
    },
    ticker: {
      items: [
        'DYE-SUBLIMATION SPECIALISTS',
        'CUSTOM BASEBALL UNIFORMS',
        'PRO BASKETBALL KITS',
        'HEAVYWEIGHT FOOTBALL JERSEYS',
        'AERODYNE SOCCER APPAREL',
        'CUSTOM ESPORTS HOODIES',
        'ICE HOCKEY AIR-KNIT SWEATERS',
        'FACTORY DIRECT B2B WHOLESALE',
        'FREE 3D DIGITAL MOCKUPS'
      ],
    },
    categories: [
      { id: 'baseball', name: 'Baseball', image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1200&q=80', badge: 'PRO TACKLE TWILL' },
      { id: 'basketball', name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80', badge: 'DRI-FIT AIR-MESH' },
      { id: 'esports', name: 'Esports', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80', badge: 'ANTI-SNAG FABRIC' },
      { id: 'flag-football', name: 'Flag Football', image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1200&q=80', badge: 'ZERO-POCKET REGULATION' },
      { id: 'football', name: 'Football', image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=1200&q=80', badge: 'HEAVYWEIGHT INTERLOCK' },
      { id: 'ice-hockey', name: 'Ice Hockey', image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1200&q=80', badge: 'AIR-KNIT SWEATERS' },
      { id: 'lacrosse', name: 'Lacrosse', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80', badge: 'PRO MESH PINNIES' },
      { id: 'rugby', name: 'Rugby', image: 'https://images.unsplash.com/photo-1529763486259-17182122c451?auto=format&fit=crop&w=1200&q=80', badge: 'TEAR-RESISTANT DRILL' },
      { id: 'soccer', name: 'Soccer', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80', badge: 'AERODYNE VENTILATION' },
      { id: 'softball', name: 'Softball', image: 'https://images.unsplash.com/photo-1593341646782-e0b495cffd6d?auto=format&fit=crop&w=1200&q=80', badge: 'FASTPITCH COMFORT' },
      { id: 'volleyball', name: 'Volleyball', image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80', badge: '4-WAY STRETCH' },
      { id: 'wrestling', name: 'Wrestling', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80', badge: 'POWER-FLEX SPANDEX' },
    ],
    goalkeeperGloves: {
      tagline: '2026 TEAM UNIFORMS & SUBLIMATION',
      heading: 'CUSTOM TEAM JERSEYS',
      description: 'Equip your roster with factory-direct pro uniforms. Featuring 220 GSM moisture-wicking interlock fabrics, precision dye-sublimation with infinite color options, and reinforced bar-tack stitching engineered for peak athlete endurance.',
      buttonText: 'See all sports uniforms',
      video1: '/leaderhero.mp4',
      video2: '/herovideo.mp4',
    },
    clothingSection: {
      tagline: 'ATHLETE UNIFORM ANATOMY',
      heading: 'PRO-CUT SPORTSWEAR SPOTLIGHT',
      description: 'Hover over the interactive hotspots to inspect fabric specifications, cuts, and custom uniform tailoring.',
      bannerImage: '/hamlo-athletes-lineup.jpg',
    },
    textSlider: {
      slides: [
        {
          quote: 'UNIFORMS ENGINEERED FOR SPEED, STRENGTH, AND CHAMPIONSHIP RESILIENCE ON EVERY DIAMOND, COURT, AND PITCH',
          author: 'HEAD OF ATHLETIC ENGINEERING, HAMLO SPORTS'
        },
        {
          quote: 'MOLECULAR DYE-SUBLIMATION ENSURES NUMBERS, CRESTS, AND TEAM COLORS NEVER CRACK, PEEL, OR FADE OVER YEARS OF WASHING',
          author: 'PRINT ATELIER DIRECTOR, HAMLO SPORTS'
        },
        {
          quote: 'SIALKOT EXPORT CRAFTSMANSHIP DIRECT TO COACHES ACROSS THE USA AND WORLDWIDE — ELIMINATING MIDDLEMAN MARKUPS',
          author: 'GLOBAL LOGISTICS DESK, HAMLO SPORTS'
        }
      ]
    },
    sustainability: {
      leftTagline: 'OEKO-TEX CERTIFIED RECYCLED POLY',
      leftHeading: 'ENVIRONMENTAL TRANSITION',
      leftImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80',
      rightTagline: 'LAB-TESTED TENSILE DURABILITY',
      rightHeading: 'TECHNICAL LAB TESTING',
      rightImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
    },
    footballHistory: {
      slides: [
        {
          year: '1994',
          title: 'ATHLETIC CUT & SEW',
          subtitle: 'HAMLO FOUNDATION',
          description: 'HAMLO SPORTS started as an athletic manufacturing atelier in Sialkot, Pakistan. Crafting high-tension flatlock stitched uniforms, heavy-drill training gear, and field-tested athletic apparel engineered for endurance.',
          image: '/football/select_fodbold_1947.avif'
        },
        {
          year: '2006',
          title: 'DYE-SUBLIMATION',
          subtitle: 'MOLECULAR COLOR REVOLUTION',
          description: 'Pioneered Japanese industrial dye-sublimation print engines across team uniforms. Molecularly bonding Pantone colors, custom typography, and team crests directly into technical 220 GSM micro-interlock poly with zero cracking or fading.',
          image: '/football/Select_fodbold_1951_9c89cd36-273c-4fbf-83af-98a97ae4f3af.webp'
        },
        {
          year: '2015',
          title: 'LASER TACKLE TWILL',
          subtitle: 'COLLEGIATE 3D APPLIQUE',
          description: 'Installed multi-head laser embroidery cutting for collegiate varsity lettering and multi-layer zigzag tackle twill, bringing authentic MLB and NCAA standard baseball and hockey jerseys to club rosters worldwide.',
          image: '/football/Select_fodbold_1962_cd927d76-7d9c-490d-82cd-8531602753e5.webp'
        },
        {
          year: '2020',
          title: 'GLOBAL AIR CORRIDORS',
          subtitle: 'DIRECT DDP USA & EU',
          description: 'Launched direct door-to-door air freight with pre-cleared customs and duties (DDP). Delivering custom sublimated uniform sets directly to US high schools, colleges, and club directors with zero customs delays.',
          image: '/football/Select_harndbold_1972.webp'
        },
        {
          year: '2024',
          title: '12H 3D MOCKUP LAB',
          subtitle: 'PRECISION DIGITAL ARTWORK',
          description: 'Revolutionized team uniform ordering with our 12-hour 3D digital mockup turnaround. Coaches inspect true-scale typography, roster numbering, and Pantone color accuracy before a single stitch is sewn.',
          image: '/football/Select_Brillant_Super_iBall_fodbold_2022_061cbe02-ff5c-4b13-b07d-6a81a0bb2298.webp'
        },
        {
          year: '2026',
          title: 'HAMLO PRO FACTORY',
          subtitle: 'COMPLETE TEAM DIRECT OUTFITTER',
          description: 'Full 12-discipline sport production spanning Baseball, Basketball, Football, Soccer, Esports, Wrestling, and Hockey. Over 296 verified performance cuts delivered factory-direct with no minimum order requirements.',
          image: '/football/Select_Brillant_Super_iBall_fodbold_2022_061cbe02-ff5c-4b13-b07d-6a81a0bb2298.webp'
        }
      ]
    }
  });

  const fetchHomeContent = async () => {
    try {
      const res = await api.get('/settings/homepage_content');
      if (res.data.success && res.data.data?.value) {
        setHomeData(res.data.data.value);
      }
    } catch (err) {
      console.log('Using default home data structure');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeContent();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus('');
    try {
      await api.put('/settings/homepage_content', {
        value: homeData,
        description: 'Dynamic home page sections with all 12 categories, hero videos, posters, scrollers & timeline'
      });
      setSaveStatus('✅ All Home Page images, videos, categories & scrollers published successfully to MongoDB!');
      setTimeout(() => setSaveStatus(''), 4000);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save home page settings');
    } finally {
      setSaving(false);
    }
  };

  const sectionsList = [
    { id: 'hero', label: '1. Hero Video & Banner', icon: Video },
    { id: 'ticker', label: '2. Ticker Marquee Scroller', icon: Sliders },
    { id: 'categories', label: '3. 12 Sports Categories Bento', icon: Grid },
    { id: 'dualVideo', label: '4. Dual Video Match Section', icon: Video },
    { id: 'athleteLineup', label: '5. Athlete Lineup Section', icon: ImageIcon },
    { id: 'textSlider', label: '6. Quotes Text Scroller', icon: Type },
    { id: 'sustainability', label: '7. Sustainability Banners', icon: ImageIcon },
    { id: 'historyTimeline', label: '8. Evolution Timeline Slider', icon: Layers },
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            Home Page Media & Scroller Management
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Complete Control Over 12 Category Images, Hero Videos, Background Posters, Ticker Scroller & Timeline
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2.5 bg-[#F26522] hover:bg-[#d95316] text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow cursor-pointer disabled:opacity-50 flex-shrink-0"
        >
          <Save size={16} />
          <span>{saving ? 'Publishing Changes...' : 'Save & Publish to Live Site'}</span>
        </button>
      </div>

      {saveStatus && (
        <div className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs font-bold rounded-lg flex items-center gap-2">
          <CheckCircle size={16} />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Section Navigation (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-xs p-3 space-y-1">
          <div className="px-3 py-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
            Select Section To Edit
          </div>
          {sectionsList.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-lg text-xs font-bold transition text-left cursor-pointer ${
                  isActive 
                    ? 'bg-[#1E1B6E] text-white shadow-xs' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-[#F26522]' : 'text-slate-400'} />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Section Editor (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          
          {/* ── 1. HERO SECTION ── */}
          {activeTab === 'hero' && (
            <div className="space-y-5">
              <h3 className="font-black text-sm uppercase text-slate-900 border-b pb-2 flex items-center gap-2">
                <Video size={16} className="text-[#F26522]" />
                <span>Hero Background Video & Top Typography</span>
              </h3>

              <MediaUploadField
                label="Hero Background Video (Upload or URL)"
                value={homeData.hero.videoUrl}
                onChange={(url) => setHomeData({ ...homeData, hero: { ...homeData.hero, videoUrl: url } })}
                type="video"
                helperText="Upload .mp4 / .webm video to Cloudinary or use local /leaderhero.mp4"
              />

              <MediaUploadField
                label="Hero Fallback / Mobile Poster Image"
                value={homeData.hero.posterImage}
                onChange={(url) => setHomeData({ ...homeData, hero: { ...homeData.hero, posterImage: url } })}
                type="image"
                helperText="High-res background image shown before video loads or on mobile"
              />

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Hero Top Badge Pill
                </label>
                <input
                  type="text"
                  value={homeData.hero.badge}
                  onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, badge: e.target.value } })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Hero Main Heading
                </label>
                <textarea
                  rows="2"
                  value={homeData.hero.title}
                  onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, title: e.target.value } })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-bold focus:border-[#F26522] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Explore CTA Button Text
                </label>
                <input
                  type="text"
                  value={homeData.hero.buttonText}
                  onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, buttonText: e.target.value } })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* ── 2. TICKER SCROLLER ── */}
          {activeTab === 'ticker' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-black text-sm uppercase text-slate-900 flex items-center gap-2">
                  <Sliders size={16} className="text-[#F26522]" />
                  <span>Infinite Ticker Marquee Items ({homeData.ticker.items.length})</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setHomeData({ ...homeData, ticker: { items: [...homeData.ticker.items, 'NEW TICKER PHRASE'] } })}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold rounded flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={13} /> Add Phrase
                </button>
              </div>

              <div className="space-y-2">
                {homeData.ticker.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-6 text-[10px] font-mono text-slate-400 font-bold">{idx + 1}</span>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => {
                        const updated = [...homeData.ticker.items];
                        updated[idx] = e.target.value;
                        setHomeData({ ...homeData, ticker: { items: updated } });
                      }}
                      className="flex-1 border border-slate-300 rounded-lg p-2 text-xs font-bold text-slate-800 focus:border-[#F26522] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = homeData.ticker.items.filter((_, i) => i !== idx);
                        setHomeData({ ...homeData, ticker: { items: updated } });
                      }}
                      className="p-2 text-slate-400 hover:text-red-600 cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 3. 12 CATEGORIES BENTO GALLERY ── */}
          {activeTab === 'categories' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <h3 className="font-black text-sm uppercase text-slate-900 flex items-center gap-2">
                    <Grid size={16} className="text-[#F26522]" />
                    <span>Categories Bento Gallery Images & Names ({homeData.categories?.length || 12})</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Upload custom athlete action images for each of the 12 sports disciplines.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {homeData.categories?.map((cat, idx) => (
                  <div key={cat.id || idx} className="p-4 border border-slate-200 rounded-xl bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-xs uppercase text-[#1E1B6E]">
                        {idx + 1}. {cat.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#F26522] uppercase">
                        {cat.badge || 'PRO SPEC'}
                      </span>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Sport Name</label>
                      <input
                        type="text"
                        value={cat.name}
                        onChange={(e) => {
                          const updated = [...homeData.categories];
                          updated[idx].name = e.target.value;
                          setHomeData({ ...homeData, categories: updated });
                        }}
                        className="w-full border border-slate-300 rounded-lg p-2 text-xs font-bold bg-white"
                      />
                    </div>

                    <MediaUploadField
                      label={`${cat.name} Action Image`}
                      value={cat.image}
                      onChange={(url) => {
                        const updated = [...homeData.categories];
                        updated[idx].image = url;
                        setHomeData({ ...homeData, categories: updated });
                      }}
                      type="image"
                      helperText="Direct upload to Cloudinary or paste image URL"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 4. DUAL VIDEO SECTION ── */}
          {activeTab === 'dualVideo' && (
            <div className="space-y-5">
              <h3 className="font-black text-sm uppercase text-slate-900 border-b pb-2 flex items-center gap-2">
                <Video size={16} className="text-[#F26522]" />
                <span>Dual Video Stack & Uniform Banner</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MediaUploadField
                  label="Top Right Video (Video 1)"
                  value={homeData.goalkeeperGloves.video1}
                  onChange={(url) => setHomeData({ ...homeData, goalkeeperGloves: { ...homeData.goalkeeperGloves, video1: url } })}
                  type="video"
                />
                <MediaUploadField
                  label="Bottom Right Video (Video 2)"
                  value={homeData.goalkeeperGloves.video2}
                  onChange={(url) => setHomeData({ ...homeData, goalkeeperGloves: { ...homeData.goalkeeperGloves, video2: url } })}
                  type="video"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Section Tagline</label>
                <input
                  type="text"
                  value={homeData.goalkeeperGloves.tagline}
                  onChange={(e) => setHomeData({ ...homeData, goalkeeperGloves: { ...homeData.goalkeeperGloves, tagline: e.target.value } })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Main Heading</label>
                <input
                  type="text"
                  value={homeData.goalkeeperGloves.heading}
                  onChange={(e) => setHomeData({ ...homeData, goalkeeperGloves: { ...homeData.goalkeeperGloves, heading: e.target.value } })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-bold focus:border-[#F26522] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Description</label>
                <textarea
                  rows="3"
                  value={homeData.goalkeeperGloves.description}
                  onChange={(e) => setHomeData({ ...homeData, goalkeeperGloves: { ...homeData.goalkeeperGloves, description: e.target.value } })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:border-[#F26522] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* ── 5. ATHLETE LINEUP SECTION ── */}
          {activeTab === 'athleteLineup' && (
            <div className="space-y-5">
              <h3 className="font-black text-sm uppercase text-slate-900 border-b pb-2 flex items-center gap-2">
                <ImageIcon size={16} className="text-[#F26522]" />
                <span>Athlete Uniform Anatomy Spotlight Image</span>
              </h3>

              <MediaUploadField
                label="Full-Width Athlete Lineup Banner Image"
                value={homeData.clothingSection.bannerImage}
                onChange={(url) => setHomeData({ ...homeData, clothingSection: { ...homeData.clothingSection, bannerImage: url } })}
                type="image"
                helperText="Upload your team athlete photo directly to Cloudinary or use local file"
              />

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Heading</label>
                <input
                  type="text"
                  value={homeData.clothingSection.heading}
                  onChange={(e) => setHomeData({ ...homeData, clothingSection: { ...homeData.clothingSection, heading: e.target.value } })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs font-bold focus:border-[#F26522] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* ── 6. QUOTES TEXT SCROLLER ── */}
          {activeTab === 'textSlider' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-black text-sm uppercase text-slate-900 flex items-center gap-2">
                  <Type size={16} className="text-[#F26522]" />
                  <span>Interactive Quotes Slides ({homeData.textSlider.slides.length})</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setHomeData({
                    ...homeData,
                    textSlider: {
                      slides: [...homeData.textSlider.slides, { quote: 'ENTER NEW CHAMPIONSHIP QUOTE', author: 'DIRECTOR, HAMLO SPORTS' }]
                    }
                  })}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold rounded flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={13} /> Add Slide
                </button>
              </div>

              <div className="space-y-4">
                {homeData.textSlider.slides.map((s, idx) => (
                  <div key={idx} className="p-4 border border-slate-200 rounded-xl bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#F26522]">Slide #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = homeData.textSlider.slides.filter((_, i) => i !== idx);
                          setHomeData({ ...homeData, textSlider: { slides: updated } });
                        }}
                        className="text-slate-400 hover:text-red-600 cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Quote Text</label>
                      <textarea
                        rows="2"
                        value={s.quote}
                        onChange={(e) => {
                          const updated = [...homeData.textSlider.slides];
                          updated[idx].quote = e.target.value;
                          setHomeData({ ...homeData, textSlider: { slides: updated } });
                        }}
                        className="w-full border border-slate-300 rounded-lg p-2 text-xs font-bold text-slate-800 bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Author / Title</label>
                      <input
                        type="text"
                        value={s.author}
                        onChange={(e) => {
                          const updated = [...homeData.textSlider.slides];
                          updated[idx].author = e.target.value;
                          setHomeData({ ...homeData, textSlider: { slides: updated } });
                        }}
                        className="w-full border border-slate-300 rounded-lg p-2 text-xs text-slate-700 bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── 7. SUSTAINABILITY BANNERS ── */}
          {activeTab === 'sustainability' && (
            <div className="space-y-5">
              <h3 className="font-black text-sm uppercase text-slate-900 border-b pb-2 flex items-center gap-2">
                <ImageIcon size={16} className="text-[#F26522]" />
                <span>Environmental & Lab Testing High-Res Images</span>
              </h3>

              <div className="p-4 border border-slate-200 rounded-xl space-y-3 bg-slate-50/50">
                <h4 className="font-bold text-xs uppercase text-slate-800">Left Side: Recycled Poly Banner</h4>
                <MediaUploadField
                  label="Left Image (Recycled Textile)"
                  value={homeData.sustainability.leftImage}
                  onChange={(url) => setHomeData({ ...homeData, sustainability: { ...homeData.sustainability, leftImage: url } })}
                  type="image"
                />
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Heading</label>
                  <input
                    type="text"
                    value={homeData.sustainability.leftHeading}
                    onChange={(e) => setHomeData({ ...homeData, sustainability: { ...homeData.sustainability, leftHeading: e.target.value } })}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs font-bold bg-white"
                  />
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl space-y-3 bg-slate-50/50">
                <h4 className="font-bold text-xs uppercase text-slate-800">Right Side: Lab Testing Banner</h4>
                <MediaUploadField
                  label="Right Image (Lab Durability Testing)"
                  value={homeData.sustainability.rightImage}
                  onChange={(url) => setHomeData({ ...homeData, sustainability: { ...homeData.sustainability, rightImage: url } })}
                  type="image"
                />
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Heading</label>
                  <input
                    type="text"
                    value={homeData.sustainability.rightHeading}
                    onChange={(e) => setHomeData({ ...homeData, sustainability: { ...homeData.sustainability, rightHeading: e.target.value } })}
                    className="w-full border border-slate-300 rounded-lg p-2 text-xs font-bold bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── 8. EVOLUTION TIMELINE ── */}
          {activeTab === 'historyTimeline' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-black text-sm uppercase text-slate-900 flex items-center gap-2">
                  <Layers size={16} className="text-[#F26522]" />
                  <span>The Hamlo Sports Evolution Eras ({homeData.footballHistory.slides.length})</span>
                </h3>
              </div>

              <div className="space-y-4">
                {homeData.footballHistory.slides.map((era, idx) => (
                  <div key={idx} className="p-4 border border-slate-200 rounded-xl bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-base font-black text-[#F26522]">Era: {era.year}</span>
                      <span className="text-[10px] font-bold uppercase bg-slate-200 px-2 py-0.5 rounded text-slate-700">
                        Milestone {idx + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Title</label>
                        <input
                          type="text"
                          value={era.title}
                          onChange={(e) => {
                            const updated = [...homeData.footballHistory.slides];
                            updated[idx].title = e.target.value;
                            setHomeData({ ...homeData, footballHistory: { slides: updated } });
                          }}
                          className="w-full border border-slate-300 rounded-lg p-2 text-xs font-bold bg-white"
                        />
                      </div>
                      <div>
                        <MediaUploadField
                          label="Product Visual Image"
                          value={era.image}
                          onChange={(url) => {
                            const updated = [...homeData.footballHistory.slides];
                            updated[idx].image = url;
                            setHomeData({ ...homeData, footballHistory: { slides: updated } });
                          }}
                          type="image"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Historical Milestone Description</label>
                      <textarea
                        rows="2"
                        value={era.description}
                        onChange={(e) => {
                          const updated = [...homeData.footballHistory.slides];
                          updated[idx].description = e.target.value;
                          setHomeData({ ...homeData, footballHistory: { slides: updated } });
                        }}
                        className="w-full border border-slate-300 rounded-lg p-2 text-xs bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
