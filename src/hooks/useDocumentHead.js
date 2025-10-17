import { useEffect } from 'react';

/**
 * Custom hook to manage document head tags (title, meta tags)
 * Replaces react-helmet-async functionality with native DOM manipulation
 */
export const useDocumentHead = ({ title, description, keywords, ogTitle, ogDescription, ogType = 'website' }) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('og:type', ogType, true);

    // Cleanup function to restore original title when component unmounts
    return () => {
      // You could store the original title and restore it here if needed
      // For now, we'll leave the title as is since it's common to keep the last page's title
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogType]);
};
