
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://brightfuturesfoundation.online'): string => {
  return path.startsWith('http') ? path : `${baseUrl}${path}`;
};

export const enhanceKeywords = (pathname: string, baseKeywords: string[]): string[] => {
  if (pathname.includes('programs')) {
    return [
      ...baseKeywords,
      'children programs Uganda',
      'education programs',
      'health programs',
      'community development',
      'child welfare programs',
      'youth development',
      'educational support',
      'mentorship programs'
    ];
  }
  
  if (pathname.includes('donate')) {
    return [
      ...baseKeywords,
      'donate to children',
      'Uganda charity donations',
      'support children Uganda',
      'charitable giving',
      'help children in need',
      'foundation donations',
      'child welfare support'
    ];
  }
  
  if (pathname.includes('volunteer')) {
    return [
      ...baseKeywords,
      'volunteer Uganda',
      'volunteer with children',
      'community service',
      'help children Uganda',
      'volunteer opportunities',
      'make a difference',
      'youth mentoring'
    ];
  }
  
  if (pathname.includes('about')) {
    return [
      ...baseKeywords,
      'about bright futures foundation',
      'Uganda children\'s foundation',
      'mission and vision',
      'foundation leadership',
      'our story',
      'foundation history'
    ];
  }
  
  if (pathname.includes('impact')) {
    return [
      ...baseKeywords,
      'foundation impact',
      'children\'s lives changed',
      'success stories',
      'community transformation',
      'measurable impact',
      'foundation results'
    ];
  }
  
  return baseKeywords;
};

export const createKeywordString = (keywords: string[], category?: string): string => {
  return category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');
};
