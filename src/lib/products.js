import api from "./api";

const categoryLabelMap = {
  REAL_ESTATE: "Real Estate",
  CARS: "Cars",
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
  cost: product.value ?? "Price on request",
  location: product.meta?.location || "Location not specified",
  views: "0 views",
  category: formatCategoryLabel(product.category),
  tier: product.tier || "GENERAL",
});

export const getPublicProducts = async (params = {}) => {
  const response = await api.get("/api/product/public", { params });
  return response.data?.data || [];
};

export const getPublicProductById = async (id) => {
  const response = await api.get(`/api/product/public/${id}`);
  return response.data?.data;
};
