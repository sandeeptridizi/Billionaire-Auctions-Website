import api from "./api";

const categoryLabelMap = {
  REAL_ESTATE: "Real Estate",
  CARS: "Cars & Bikes",
  BIKES: "Bikes",
  FURNITURE: "Furniture",
  JEWELLERY_AND_WATCHES: "Jewellery & Watches",
  ARTS_AND_PAINTINGS: "Arts & Paintings",
  ANTIQUES: "Antiques",
  COLLECTABLES: "Collectables",
};

export const categoryOrder = [
  "REAL_ESTATE",
  "CARS",
  "BIKES",
  "FURNITURE",
  "JEWELLERY_AND_WATCHES",
  "ARTS_AND_PAINTINGS",
  "ANTIQUES",
  "COLLECTABLES",
];

export const formatCategoryLabel = (category) =>
  categoryLabelMap[category] || "Others";

export const mapProductToCard = (product) => ({
  id: product.id,
  title: product.title,
  image: product.media?.[0] || "",
  cost: typeof product.value === "number"
    ? product.value.toLocaleString("en-IN")
    : "Price on request",
  location: product.meta?.city || product.meta?.location || "Location not specified",

  category: product.listingType === "TO_LET" && product.category === "REAL_ESTATE"
    ? "Residential"
    : formatCategoryLabel(product.category),
  tier: product.tier || "GENERAL",
  meta: product.meta || {},
  categoryKey: product.listingType === "TO_LET" ? "TO_LET" : (product.category || ""),
});

export const getPublicProducts = async (params = {}) => {
  const response = await api.get("/api/product/public", { params });
  return response.data?.data || [];
};

export const getMarketplaceProducts = async (params = {}) => {
  return getPublicProducts({ listingType: "MARKETPLACE", ...params });
};

export const getBuyNowProducts = async (params = {}) => {
  return getPublicProducts({ listingType: "BUY_NOW", ...params });
};

export const getAuctionsProducts = async (params = {}) => {
  return getPublicProducts({ listingType: "AUCTIONS", ...params });
};

export const getToLetProducts = async (params = {}) => {
  return getPublicProducts({ listingType: "TO_LET", ...params });
};

export const getPublicProductById = async (id) => {
  const response = await api.get(`/api/product/public/${id}`);
  return response.data?.data;
};

export const getFeaturedProducts = async (params = {}) => {
  const response = await api.get("/api/product", {
    params: { approvalStatus: "APPROVED", isFeatured: "true", ...params },
  });
  return response.data?.data || [];
};

export const getRecommendedProducts = async (params = {}) => {
  const response = await api.get("/api/product", {
    params: { approvalStatus: "APPROVED", isRecommended: "true", ...params },
  });
  return response.data?.data || [];
};

export const submitEnquiry = async ({ productId, visitorName, visitorEmail, visitorPhone, message, source }) => {
  const payload = { visitorName, visitorEmail, visitorPhone, message };
  if (productId) payload.productId = productId;
  if (source) payload.source = source;
  const response = await api.post("/api/enquiry", payload);
  return response.data;
};
