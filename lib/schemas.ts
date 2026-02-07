/**
 * SEO Schema Utilities for JSON-LD Structured Data
 * Generates various schema.org schemas for search engine optimization
 */

export type SchemaType =
  | "Organization"
  | "LocalBusiness"
  | "Thing"
  | "Place"
  | "BreadcrumbList"
  | "Product"
  | "AggregateRating"
  | "Review"
  | "FAQPage"
  | "ImageObject"
  | "VideoObject"
  | "Event"
  | "ItemList";

interface BaseSchema {
  "@context": "https://schema.org";
  "@type": SchemaType;
}

/**
 * Organization Schema - Core identity of the gym business
 */
export const organizationSchema = (): BaseSchema & {
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  sameAs: string[];
  contactPoint: {
    "@type": "ContactPoint";
    contactType: string;
    telephone: string;
    areaServed: string;
  };
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  }[];
  foundingDate: string;
  numberOfEmployees: {
    "@type": "QuantitativeValue";
    value: number;
  };
} => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bright Gym",
  description: "Premier fitness center in Addis Ababa with premium equipment and expert trainers",
  url: "https://brightgymfitness.com",
  logo: "https://brightgymfitness.com/logo-bright.png",
  image: "https://brightgymfitness.com/og-image.png",
  sameAs: [
    "https://www.facebook.com/brightgym",
    "https://www.instagram.com/brightgym",
    "https://www.tiktok.com/@brightgym",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    telephone: "+251975427575",
    areaServed: "ET",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Ayat 49, Zemer Building",
      addressLocality: "Addis Ababa",
      postalCode: "1000",
      addressCountry: "ET",
    },
  ],
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 25,
  },
});

/**
 * LocalBusiness Schema - Geographic and operational information
 */
export const localBusinessSchema = (): BaseSchema & {
  name: string;
  image: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  }[];
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  }[];
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }[];
  priceRange: string;
  aggregateRating: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
} => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bright Gym",
  image: "https://brightgymfitness.com/og-image.png",
  description: "Forging fitness and community in Addis Ababa. Gym at Ayat 49.",
  url: "https://brightgymfitness.com",
  telephone: "+251975427575",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Ayat 49, Zemer Building",
      addressLocality: "Addis Ababa",
      postalCode: "1000",
      addressCountry: "ET",
    },
  ],
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: 9.010819,
      longitude: 38.889105,
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:00",
      closes: "20:45",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "06:00",
      closes: "22:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    reviewCount: 145,
    bestRating: 5,
    worstRating: 1,
  },
});

/**
 * BreadcrumbList Schema - Navigation path
 */
export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
): BaseSchema & {
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
} => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Product Schema - For membership plans and services
 */
export const productSchema = (product: {
  name: string;
  description: string;
  image: string;
  url: string;
  price: number;
  priceCurrency: string;
  availability: string;
  rating: number;
  reviewCount: number;
}): BaseSchema & {
  name: string;
  description: string;
  image: string;
  url: string;
  offers: {
    "@type": "Offer";
    url: string;
    priceCurrency: string;
    price: string;
    availability: string;
    priceValidUntil: string;
  };
  aggregateRating: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
  };
} => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  url: product.url,
  offers: {
    "@type": "Offer",
    url: product.url,
    priceCurrency: product.priceCurrency,
    price: product.price.toString(),
    availability: product.availability,
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      .toISOString()
      .split("T")[0],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: product.rating,
    reviewCount: product.reviewCount,
  },
});

/**
 * FAQPage Schema - FAQ content structured data
 */
export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>
): BaseSchema & {
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
} => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

/**
 * Review Schema - Customer testimonials
 */
export const reviewSchema = (review: {
  author: string;
  rating: number;
  reviewBody: string;
  reviewDate: string;
}): BaseSchema & {
  itemReviewed: {
    "@type": "LocalBusiness";
    name: string;
    url: string;
  };
  author: {
    "@type": "Person";
    name: string;
  };
  reviewRating: {
    "@type": "Rating";
    ratingValue: number;
  };
  reviewBody: string;
  datePublished: string;
} => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "Bright Gym",
    url: "https://brightgymfitness.com",
  },
  author: {
    "@type": "Person",
    name: review.author,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating,
  },
  reviewBody: review.reviewBody,
  datePublished: review.reviewDate,
});

/**
 * VideoObject Schema - For video content
 */
export const videoSchema = (video: {
  name: string;
  description: string;
  uploadDate: string;
  duration: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl?: string;
}): BaseSchema & {
  name: string;
  description: string;
  uploadDate: string;
  duration: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl?: string;
} => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.name,
  description: video.description,
  uploadDate: video.uploadDate,
  duration: video.duration,
  thumbnailUrl: video.thumbnailUrl,
  ...(video.contentUrl && { contentUrl: video.contentUrl }),
  ...(video.embedUrl && { embedUrl: video.embedUrl }),
});

/**
 * Event Schema - For fitness classes and events
 */
export const eventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: { name: string; address: string };
  image?: string;
  organizer?: string;
  eventStatus?: string;
}): BaseSchema & {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    "@type": "Place";
    name: string;
    address: string;
  };
  image?: string;
  organizer?: string;
  eventStatus?: string;
} => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    "@type": "Place",
    name: event.location.name,
    address: event.location.address,
  },
  ...(event.image && { image: event.image }),
  ...(event.organizer && { organizer: event.organizer }),
  ...(event.eventStatus && { eventStatus: event.eventStatus }),
});

/**
 * ImageObject Schema - For rich image display
 */
export const imageSchema = (image: {
  url: string;
  width: number;
  height: number;
  description?: string;
}): BaseSchema & {
  url: string;
  width: number;
  height: number;
  description?: string;
} => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: image.url,
  width: image.width,
  height: image.height,
  ...(image.description && { description: image.description }),
});

