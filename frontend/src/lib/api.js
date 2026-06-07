// Hardcoded Data for Offline Mode

export const fetchServices = async () => [
  {
    id: "makeup",
    name: "Makeup Studio",
    image: "/media/1DSC_4258 (4).jpg.jpeg",
    items: [
      "Bridal Makeup (HD & Airbrush)",
      "Engagement & Party Makeup",
      "Reception Makeup",
      "Pre-Wedding Shoots",
      "Groom Makeup"
    ]
  },
  {
    id: "hair",
    name: "Hair & Styling",
    video: "/media/IMG_7563.MOV",
    items: [
      "Botox Nanoplastia",
      "Keratin Treatment",
      "Hair Smoothening & Rebonding",
      "Global Hair Coloring & Highlights",
      "Advanced Haircuts & Styling",
      "Hair Spa & Deep Conditioning"
    ]
  },
  {
    id: "skin",
    name: "Skin & Aesthetics",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
    items: [
      "Signature Facials (O3+, Lotus, etc.)",
      "HydraFacial & Deep Cleanup",
      "Skin Whitening Treatments",
      "Anti-Tan & De-Pigmentation",
      "Full Body Waxing & Threading",
      "Manicure & Pedicure Spa"
    ]
  }
];

export const fetchReviews = async () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const placeId = process.env.REACT_APP_GOOGLE_PLACE_ID;

  const fallbackReviews = [
    {
      id: "r1",
      name: "Peeta 2244",
      rating: 5.0,
      text: "Astonishing parlour in raikot city.... .. and they give training to students with full dedication ..and ......I have great experience there... hence I would say everyone should visit there",
      service: "Verified Review",
      date: "2 years ago",
      avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&q=80",
    },
    {
      id: "r2",
      name: "Gurjeet Kaur",
      rating: 5.0,
      text: "Best parlour...❤️❤️in raikot city Customer service is brilliant😍😍😍",
      service: "Verified Review",
      date: "2 years ago",
      avatar: "https://images.unsplash.com/photo-1508214751196-bfd14092d26e?w=200&q=80",
    },
    {
      id: "r3",
      name: "Gaganpreet kaur Saroae",
      rating: 4.8,
      text: "Good experience",
      service: "Verified Review",
      date: "2 years ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    },
    {
      id: "r4",
      name: "Manpreet Kaur",
      rating: 5.0,
      text: "Booked them for party makeup for a family function. The makeup stayed intact the whole night and everyone complimented my look. Thank you!",
      service: "Party Makeup",
      date: "Recent Review",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    }
  ];

  if (!apiKey || !placeId) {
    return fallbackReviews;
  }

  return new Promise((resolve) => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => fetchFromGoogle();
      script.onerror = () => resolve(fallbackReviews);
    } else {
      fetchFromGoogle();
    }

    function fetchFromGoogle() {
      const dummyEl = document.createElement('div');
      const service = new window.google.maps.places.PlacesService(dummyEl);
      service.getDetails(
        {
          placeId: placeId,
          fields: ['reviews']
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place.reviews) {
            const liveReviews = place.reviews.filter(r => r.rating >= 4).map((r, i) => ({
              id: `live-${i}`,
              name: r.author_name,
              rating: r.rating,
              text: r.text,
              service: "Verified Google Review",
              date: r.relative_time_description,
              avatar: r.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.author_name)}&background=111111&color=ffffff`
            }));
            resolve(liveReviews.length > 0 ? liveReviews : fallbackReviews);
          } else {
            resolve(fallbackReviews);
          }
        }
      );
    }
  });
};

export const createBooking = async (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, ...payload });
    }, 800);
  });
};
