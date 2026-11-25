import React, { createContext, useContext, useState, useEffect } from 'react';
import { sportsCategories as staticCategories } from '../data/sportsCategoriesData';
import { executeRecaptcha, initLazyRecaptcha } from '../utils/recaptcha';

const CMSContext = createContext();

export const API_BASE = import.meta.env.VITE_API_URL || 
  (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' 
    ? 'https://leathercorporation-jmrv.vercel.app/api' 
    : 'http://localhost:5000/api');

export const resolveMediaUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }
  // If it's a local upload from backend server, prepend backend origin
  if (url.startsWith('/uploads/')) {
    const apiOrigin = API_BASE.replace(/\/api\/?$/, '');
    return `${apiOrigin}${url}`;
  }
  return url;
};

export const CMSProvider = ({ children }) => {
  const [homeContent, setHomeContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Default fallback data matching static components
  const defaultHome = {
    hero: {
      badge: 'CUSTOM SPORTSWEAR & ATHLETIC UNIFORMS MANUFACTURER',
      title: 'PRO-GRADE DYE-SUBLIMATED UNIFORMS & TEAM APPAREL FACTORY DIRECT',
      buttonText: 'Explore 2026 Sports Uniforms Collection',
      videoUrl: '/leaderheros.mp4',
      posterImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=70&w=960&auto=format&fit=crop',
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
    categories: staticCategories.map(c => ({
      id: c.id,
      name: c.name,
      image: c.image,
      badge: c.badge || 'PRO SPEC',
      slug: c.slug
    })),
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
          quote: "UNIFORMS ENGINEERED FOR SPEED, STRENGTH, AND CHAMPIONSHIP RESILIENCE ON EVERY DIAMOND, COURT, AND PITCH",
          author: "HEAD OF ATHLETIC ENGINEERING, HAMLO SPORTS"
        },
        {
          quote: "MOLECULAR DYE-SUBLIMATION ENSURES NUMBERS, CRESTS, AND TEAM COLORS NEVER CRACK, PEEL, OR FADE OVER YEARS OF WASHING",
          author: "PRINT ATELIER DIRECTOR, HAMLO SPORTS"
        },
        {
          quote: "SIALKOT EXPORT CRAFTSMANSHIP DIRECT TO COACHES ACROSS THE USA AND WORLDWIDE — ELIMINATING MIDDLEMAN MARKUPS",
          author: "GLOBAL LOGISTICS DESK, HAMLO SPORTS"
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
          year: "1994",
          title: "ATHLETIC CUT & SEW",
          subtitle: "HAMLO FOUNDATION",
          description: "HAMLO SPORTS started as an athletic manufacturing atelier in Sialkot, Pakistan. Crafting high-tension flatlock stitched uniforms, heavy-drill training gear, and field-tested athletic apparel engineered for endurance.",
          image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1000&q=80"
        },
        {
          year: "2006",
          title: "DYE-SUBLIMATION",
          subtitle: "MOLECULAR COLOR REVOLUTION",
          description: "Pioneered Japanese industrial dye-sublimation print engines across team uniforms. Molecularly bonding Pantone colors, custom typography, and team crests directly into technical 220 GSM micro-interlock poly with zero cracking or fading.",
          image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80"
        },
        {
          year: "2015",
          title: "LASER TACKLE TWILL",
          subtitle: "COLLEGIATE 3D APPLIQUÉ",
          description: "Installed multi-head laser embroidery cutting for collegiate varsity lettering and multi-layer zigzag tackle twill, bringing authentic MLB and NCAA standard baseball and hockey jerseys to club rosters worldwide.",
          image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=1000&q=80"
        },
        {
          year: "2020",
          title: "GLOBAL AIR CORRIDORS",
          subtitle: "DIRECT DDP USA & EU",
          description: "Launched direct door-to-door air freight with pre-cleared customs and duties (DDP). Delivering custom sublimated uniform sets directly to US high schools, colleges, and club directors with zero customs delays.",
          image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80"
        },
        {
          year: "2024",
          title: "12H 3D MOCKUP LAB",
          subtitle: "PRECISION DIGITAL ARTWORK",
          description: "Revolutionized team uniform ordering with our 12-hour 3D digital mockup turnaround. Coaches inspect true-scale typography, roster numbering, and Pantone color accuracy before a single stitch is sewn.",
          image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80"
        },
        {
          year: "2026",
          title: "HAMLO PRO FACTORY",
          subtitle: "COMPLETE TEAM DIRECT OUTFITTER",
          description: "Full 12-discipline sport production spanning Baseball, Basketball, Football, Soccer, Esports, Wrestling, and Hockey. Over 296 verified performance cuts delivered factory-direct with no minimum order requirements.",
          image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=80"
        }
      ]
    }
  };

  useEffect(() => {
    const fetchCMS = async () => {
      // If deployed on HTTPS but API_BASE is pointing to insecure localhost, skip to prevent Mixed Content browser error
      if (typeof window !== 'undefined' && window.location.protocol === 'https:' && API_BASE.startsWith('http://localhost')) {
        setHomeContent(defaultHome);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/settings/homepage_content`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data?.value) {
            setHomeContent({ ...defaultHome, ...data.data.value });
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // Fallback gracefully to defaultHome without breaking
        console.warn('API unreachable, using built-in home content fallback');
      }
      setHomeContent(defaultHome);
      setLoading(false);
    };

    fetchCMS();

    // Lazy load reCAPTCHA v3 on first real user interaction to keep Lighthouse & PageSpeed audits free of console errors
    initLazyRecaptcha();
  }, []);

  // Submit Inquiry to MongoDB
  const submitInquiry = async (payload) => {
    try {
      // Execute reCAPTCHA v3 verification (invisible)
      const recaptchaToken = await executeRecaptcha('submit_inquiry');

      const res = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          recaptchaToken
        })
      });
      return await res.json();
    } catch (err) {
      console.error('Failed to submit inquiry:', err);
      return { success: false, message: 'Network error submitting inquiry' };
    }
  };

  // Submit Club Partnership Registration
  const registerClub = async (payload) => {
    try {
      const recaptchaToken = await executeRecaptcha('register_club');
      const res = await fetch(`${API_BASE}/clubs/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          recaptchaToken
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return data;
      }
      throw new Error(data.message || 'Club registration endpoint error');
    } catch (err) {
      console.warn('Direct /clubs/register failed, submitting via inquiries fallback:', err);
      // Resilient fallback to submitInquiry
      return await submitInquiry({
        name: `${payload.contactName || 'Club Coach'} (${payload.clubName})`,
        email: payload.email,
        phone: payload.phone,
        company: payload.clubName,
        sport: payload.sport,
        quantity: parseInt(payload.totalPlayers, 10) || 25,
        message: `🏆 NEW CLUB REGISTRATION [DIRECT FALLBACK]\n` +
          `• Club/Team: ${payload.clubName} (${payload.sport})\n` +
          `• Org Type: ${payload.orgType || 'Club'} | League: ${payload.league || 'N/A'}\n` +
          `• Contact: ${payload.contactName} (${payload.role || 'Head Coach'})\n` +
          `• Phone: ${payload.phone} | Preferred: ${payload.preferredContact || 'Email'}\n` +
          `• Teams: ${payload.totalTeams || 'N/A'} | Players: ${payload.totalPlayers || 'N/A'}\n` +
          `• Colors: ${payload.teamColors || 'N/A'}\n` +
          `• Address: ${payload.address || ''}, ${payload.city || ''}, ${payload.state || ''} ${payload.zip || ''}\n` +
          `• Description / Needs: ${payload.description || payload.uniformNeeds || 'Club Volume Program'}`,
        source: 'club_registration'
      });
    }
  };

  return (
    <CMSContext.Provider value={{ homeContent, loading, submitInquiry, registerClub }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => useContext(CMSContext);
