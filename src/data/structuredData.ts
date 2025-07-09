
export const createOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Bright Futures Foundation',
  alternateName: 'Bright Futures Foundation Uganda',
  url: 'https://brightfuturesfoundation.online',
  logo: 'https://brightfuturesfoundation.online/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  description: 'Transforming children\'s lives through love, care, education, and community development in Uganda',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@brightfuturesfoundation.org',
      availableLanguage: ['en', 'sw']
    },
    {
      '@type': 'ContactPoint',
      contactType: 'donations',
      email: 'donate@brightfuturesfoundation.org'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Uganda',
    addressRegion: 'Central Region',
    addressLocality: 'Kampala'
  },
  foundingDate: '2020',
  mission: 'To transform the lives of children through love, care, education, health, protection, and community development programs',
  areaServed: {
    '@type': 'Country',
    name: 'Uganda'
  },
  knowsAbout: ['Child Welfare', 'Education', 'Community Development', 'Child Protection', 'Health Programs'],
  nonprofitStatus: 'NonprofitType',
  taxID: 'TBD',
  seeks: 'Donations and volunteers to support children in Uganda'
});

export const createBlogPostStructuredData = (
  currentUrl: string,
  title: string,
  absoluteImageUrl: string,
  publishDate: string,
  modifiedDate: string,
  author: string,
  description: string,
  keywords: string[],
  category?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': currentUrl
  },
  headline: title,
  image: {
    '@type': 'ImageObject',
    url: absoluteImageUrl,
    width: 1200,
    height: 630
  },
  datePublished: publishDate,
  dateModified: modifiedDate || publishDate,
  author: {
    '@type': 'Organization',
    name: author || 'Bright Futures Foundation',
    url: 'https://brightfuturesfoundation.online'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Bright Futures Foundation',
    logo: {
      '@type': 'ImageObject',
      url: 'https://brightfuturesfoundation.online/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
      width: 512,
      height: 512
    },
    url: 'https://brightfuturesfoundation.online'
  },
  description: description,
  keywords: keywords.join(', '),
  articleSection: category,
  inLanguage: 'en-US',
  isAccessibleForFree: true
});

export const createEducationCenterFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does the new education center provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The new education center in Kampala provides quality learning facilities, dedicated teachers, educational support programs, and serves over 200 children in the area with comprehensive educational services.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can children enroll in Bright Futures Foundation programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Families can contact Bright Futures Foundation directly through our website or visit our education center in Kampala. We work with families to ensure children have access to quality education regardless of their financial situation.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes this education center different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our education center focuses on holistic child development, combining quality academics with character building, health support, and community involvement. We provide not just education, but comprehensive care for each child.'
      }
    }
  ]
});

export const createGeneralFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Bright Futures Foundation do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bright Futures Foundation is a Ugandan non-profit organization dedicated to transforming children\'s lives through comprehensive programs in education, health, protection, and community development. We work directly with vulnerable children and families to provide sustainable support and opportunities.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I donate to Bright Futures Foundation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can donate through our secure online platform, bank transfer, or contact us directly. We accept one-time donations and monthly sponsorships. All donations go directly to supporting our programs and the children we serve.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I volunteer with Bright Futures Foundation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We welcome volunteers in various capacities including education support, healthcare assistance, community outreach, and administrative support. Contact us through our website to learn about current volunteer opportunities and requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where does Bright Futures Foundation operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bright Futures Foundation operates primarily in Uganda, with programs focused in Central Region communities around Kampala. We work directly with local communities to ensure our programs meet specific needs and cultural contexts.'
      }
    }
  ]
});

export const createProgramsFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What education programs does Bright Futures Foundation offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide education support including school fees, learning materials, uniforms, after-school tutoring, scholarship programs, and direct educational support to help children stay in school and succeed academically.'
      }
    },
    {
      '@type': 'Question',
      name: 'What health programs are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our health programs include regular health screenings, vaccination campaigns, nutrition support, health education, and access to medical care. We focus on preventive healthcare and early intervention to ensure children grow up healthy.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you ensure child protection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Child protection is central to our mission. We provide safe spaces, child rights education, counseling services, and work with families and communities to create protective environments. All our staff are trained in child protection protocols.'
      }
    }
  ]
});

export const createDonationFAQData = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is my donation tax-deductible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bright Futures Foundation is a registered non-profit organization. Donation receipts are provided for tax purposes. Please consult with your tax advisor regarding deductibility in your jurisdiction.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much of my donation goes directly to programs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain high transparency standards with the majority of donations going directly to program implementation. Administrative costs are kept minimal to ensure maximum impact for the children and communities we serve.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I sponsor a specific child?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer child sponsorship programs where you can support a specific child\'s education, health, and well-being. Sponsors receive regular updates and can build meaningful connections with the children they support.'
      }
    }
  ]
});
