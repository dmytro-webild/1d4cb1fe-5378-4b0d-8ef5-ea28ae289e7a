"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="medium"
        background="blurBottom"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Asterion Construction"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Building Ghana's Infrastructure Future"
      description="Asterion Construction is a leading Ghanaian firm committed to excellence in infrastructure development, road works, and high-quality renovations."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/heavy-excavator-digging-day-light_23-2149194826.jpg",
          imageAlt: "Large infrastructure project",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-lady-safety-helmet-eyeglasses-near-building-construction_23-2148039962.jpg",
          imageAlt: "Construction team reviewing plans",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-seeder-attached-tractor-field_146671-19092.jpg",
          imageAlt: "Close up of seeder attached to tractor in field.",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/heavy-excavator-digging-day-light_23-2149194838.jpg",
          imageAlt: "Heavy excavator for digging on day light",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/heavy-excavator-digging-day-light_23-2149194824.jpg",
          imageAlt: "Heavy excavator for digging on day light",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-american-woman-near-model-building-table-with-equipments_23-2148040028.jpg",
          imageAlt: "Building renovation site",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/office-building-road_1127-2155.jpg",
          imageAlt: "Road construction work",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/excavator-digging-ground-day-light_23-2149194770.jpg",
          imageAlt: "Excavator digging in the ground on day light",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cafe-revision_1098-14404.jpg",
          imageAlt: "Cafe revision",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-african-american-woman-safety-helmet-near-model-building_23-2148039860.jpg",
          imageAlt: "Pensive African-American woman in safety helmet near model of building",
        },
      ]}
      buttons={[
        {
          text: "Our Services",
          href: "#services",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/view-construction-work-site_1398-2983.jpg",
          alt: "View of construction work site",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-african-american-lady-chair-with-vacuum-cup-near-plan-model-house-table_23-2148039927.jpg",
          alt: "Happy African-American lady on chair with vacuum cup near plan and model of house on table",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
          alt: "happy client portrait professional",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mobile-colleagues_1098-14113.jpg",
          alt: "satisfied business client office",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-engineer-architect-shaking-hands_23-2148233782.jpg",
          alt: "professional client site meeting",
        },
      ]}
      avatarText="Trusted by 500+ satisfied clients"
      marqueeItems={[
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lfh3ak",
          alt: "construction partner company logo",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/flat-construction-labels-collection_23-2149571564.jpg",
          alt: "architectural partner logo company",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/labels-collection-construction-domain_23-2149554644.jpg",
          alt: "commercial property logo business",
        },
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=p9c29a",
          alt: "engineering consultancy logo modern",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/shimmering-titanic-belfast-museum_1057-3176.jpg",
          alt: "real estate agency brand logo",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Quality Construction Professionals"
      description="Asterion Construction has built a reputation for reliable, professional project execution across Accra and Ghana. From site preparation to final structural delivery, our focus remains on quality and integrity."
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-orange-building-seen-through-glass-window_181624-3923.jpg"
      imageAlt="Our project office and management team"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Infrastructure Development",
          author: "Asterion",
          description: "Large-scale infrastructure and road construction projects.",
          tags: [
            "Roads",
            "Civils",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-construction-site_23-2151933429.jpg",
        },
        {
          id: "f2",
          title: "Renovations & Building",
          author: "Asterion",
          description: "Quality renovations and new building construction services.",
          tags: [
            "Renovation",
            "Building",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-safety-vests-with-tablet_23-2148269350.jpg",
        },
        {
          id: "f3",
          title: "Site Preparation",
          author: "Asterion",
          description: "Expert site clearing and earthworks for new sites.",
          tags: [
            "Preparation",
            "Excavation",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/backhoe-digger_1388-576.jpg",
        },
      ]}
      title="Comprehensive Construction Solutions"
      description="We deliver a full range of expert construction and real estate support services tailored to Ghanaian development requirements."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "16+",
          title: "Verified Reviews",
          description: "Positive industry recognition.",
          imageSrc: "http://img.b2bpic.net/free-photo/architecture-concept-with-blank-page-clipboard_23-2147813103.jpg",
        },
        {
          id: "m2",
          value: "3.9",
          title: "Google Rating",
          description: "Commitment to professional service quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-side-view-construction-engineer-using-tablet_23-2148233673.jpg",
        },
        {
          id: "m3",
          value: "Fast-Growing",
          title: "Market Impact",
          description: "Recognized in Ghana's top companies lists.",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-drawings-new-ideas-office_176420-1687.jpg",
        },
      ]}
      title="Built on Reliability"
      description="We are proud of our ongoing contributions to local real estate development and urban growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Kwame Osei",
          date: "2024-05",
          title: "Best in Accra",
          quote: "They are the best construction agency I know so far.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/business-managers-meeting-with-realtor-real-estate-office-tour_482257-91748.jpg",
        },
        {
          id: "t2",
          name: "Ama Serwaa",
          date: "2024-08",
          title: "Reliable",
          quote: "Efficient project execution for our commercial office space.",
          tag: "Business",
          avatarSrc: "http://img.b2bpic.net/free-photo/mobile-colleagues_1098-14113.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-136.jpg",
        },
        {
          id: "t3",
          name: "John Mensah",
          date: "2023-11",
          title: "High Quality",
          quote: "Professional team that delivered according to expectations.",
          tag: "Building",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-engineer-architect-shaking-hands_23-2148233782.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/business-colleagues-reviewing-discussing-report_1262-20984.jpg",
        },
        {
          id: "t4",
          name: "Efia B.",
          date: "2024-01",
          title: "Great Agency",
          quote: "Professional communication made a difference.",
          tag: "Renovation",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-old-man-with-glasses-safety-helmet_23-2148269397.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-men-with-safety-equipment_23-2148269351.jpg",
        },
        {
          id: "t5",
          name: "Samuel Adjei",
          date: "2024-03",
          title: "Solid Work",
          quote: "Asterion is very reliable for property construction.",
          tag: "Development",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-back-view-engineer-architect-supervising-construction_23-2148233787.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-fun-with-paintbrush-their-new-home_23-2149086848.jpg",
        },
      ]}
      title="Voices of Our Clients"
      description="What partners and clients say about working with Asterion Construction."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What types of construction projects do you handle?",
          content: "We handle infrastructure, road construction, building renovations, and site preparation.",
        },
        {
          id: "q2",
          title: "Where is your office located?",
          content: "We are located at Indian Ocean Lake, Accra, with an office at Christman House, Aviation Road, Airport Residential Area.",
        },
        {
          id: "q3",
          title: "How can I get a project estimate?",
          content: "Reach out to us at info@asterionghana.com or call us at +233 24 334 9950 for initial consultations.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common inquiries about our construction and real estate services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Construction Corp",
        "Real Estate Partners",
        "Ghana Builders",
        "Civils Group",
        "Accra Development",
        "Infrastructure Link",
        "Urban Build",
      ]}
      title="Our Partners & Industry Reach"
      description="Collaborating for building a better Ghana infrastructure."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Let's Build Together"
      title="Start Your Project"
      description="Ready to discuss your building requirements? Contact our professional team during business hours."
      imageSrc="http://img.b2bpic.net/free-photo/new-recently-built-highway-brcko-district-bosnia-herzegovina_181624-3402.jpg"
      imageAlt="Asterion Construction Site in Accra"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/urban-wall-surface_23-2148107040.jpg"
      logoText="Asterion Construction"
      columns={[
        {
          title: "Info",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "+233 24 334 9950",
              href: "tel:+233243349950",
            },
            {
              label: "info@asterionghana.com",
              href: "mailto:info@asterionghana.com",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
