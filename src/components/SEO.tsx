
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEOProps } from '../types/seo';
import { createAbsoluteUrl, enhanceKeywords, createKeywordString } from '../utils/seoHelpers';
import {
  createOrganizationStructuredData,
  createBlogPostStructuredData,
  createEducationCenterFAQData,
  createGeneralFAQData,
  createProgramsFAQData,
  createDonationFAQData
} from '../data/structuredData';

const SEO: React.FC<SEOProps> = ({
  title = 'Bright Futures Foundation - Transforming Lives Through Love and Care',
  description = 'Bright Futures Foundation is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs.',
  type = 'website',
  name = 'Bright Futures Foundation',
  imageUrl = '/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['children foundation', 'Uganda foundation', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = createAbsoluteUrl(location.pathname);
  const absoluteImageUrl = createAbsoluteUrl(imageUrl);
  
  // Enhanced keywords for specific posts
  const enhancedKeywords = enhanceKeywords(location.pathname, keywords);
  const keywordString = createKeywordString(enhancedKeywords, category);

  // Create structured data
  const organizationStructuredData = createOrganizationStructuredData();
  
  const blogPostStructuredData = isBlogPost && publishDate 
    ? createBlogPostStructuredData(
        currentUrl,
        title,
        absoluteImageUrl,
        publishDate,
        modifiedDate || publishDate,
        author || name,
        description,
        enhancedKeywords,
        category
      ) 
    : null;

  // Page-specific FAQ data
  const generalFAQData = location.pathname === '/' 
    ? createGeneralFAQData() 
    : null;
    
  const programsFAQData = location.pathname.includes('programs') 
    ? createProgramsFAQData() 
    : null;
    
  const donationFAQData = location.pathname.includes('donate') 
    ? createDonationFAQData() 
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bright Futures Foundation" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://brightfuturesfoundation.org" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#ea580c" />
      <meta name="msapplication-TileColor" content="#ea580c" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {generalFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(generalFAQData)}
        </script>
      )}
      
      {programsFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(programsFAQData)}
        </script>
      )}
      
      {donationFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(donationFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
