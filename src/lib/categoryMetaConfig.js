import {
  LuBedDouble, LuRuler, LuCalendar, LuArmchair, LuCompass,
  LuCar, LuGauge, LuFuel, LuSettings2, LuUser, LuShieldCheck,
  LuLayers, LuStar, LuUsers, LuClock, LuGem, LuWeight,
  LuBadgeCheck, LuAward, LuWrench, LuBox, LuPuzzle,
  LuPaintbrush, LuPalette, LuPenTool, LuGlobe, LuFileText,
  LuHash, LuChartColumnIncreasing, LuIndianRupee, LuWallet, LuCalendarCheck,
  LuSmartphone, LuTag, LuInfo, LuLandmark, LuMapPin, LuKeyRound,
  LuBath, LuHouse,
} from "react-icons/lu";

export const metaFieldIconMap = {
  bhk: LuBedDouble,
  builtUpArea: LuRuler,
  carpetArea: LuRuler,
  propertyAge: LuCalendar,
  furnishing: LuArmchair,
  furnishingStatus: LuArmchair,
  facing: LuCompass,
  parking: LuCar,
  monthlyRent: LuIndianRupee,
  rentPerMonth: LuIndianRupee,
  securityDeposit: LuWallet,
  availableFrom: LuCalendarCheck,
  brand: LuTag,
  model: LuCar,
  year: LuCalendar,
  yearOfManufacture: LuCalendar,
  kmDriven: LuGauge,
  fuelType: LuFuel,
  transmission: LuSettings2,
  ownership: LuUser,
  insuranceStatus: LuShieldCheck,
  furnitureType: LuArmchair,
  material: LuLayers,
  condition: LuStar,
  dimensions: LuRuler,
  seatingCapacity: LuUsers,
  ageOfFurniture: LuClock,
  type: LuGem,
  weight: LuWeight,
  purity: LuBadgeCheck,
  certification: LuAward,
  yearOfPurchase: LuCalendar,
  workingCondition: LuWrench,
  boxAndPapers: LuBox,
  originalParts: LuPuzzle,
  artistName: LuPaintbrush,
  medium: LuPalette,
  size: LuRuler,
  yearCreated: LuCalendar,
  signed: LuPenTool,
  certificate: LuAward,
  antiqueType: LuLandmark,
  approximateAge: LuClock,
  origin: LuGlobe,
  documentation: LuFileText,
  itemType: LuBox,
  rarityLevel: LuStar,
  limitedEdition: LuHash,
  serialNumber: LuHash,
  authentication: LuShieldCheck,
  conditionGrade: LuChartColumnIncreasing,
  purchaseYear: LuCalendar,
  warranty: LuShieldCheck,
  usageType: LuSmartphone,
  category: LuTag,
  brandModel: LuTag,
  areaLocality: LuMapPin,
  ownershipType: LuKeyRound,
  plotArea: LuRuler,
  plotDimensions: LuRuler,
  plotAreaInSqYards: LuRuler,
  builtUpAreaInSqYards: LuRuler,
  cornerPlot: LuMapPin,
  approvalType: LuShieldCheck,
  roadWidth: LuRuler,
  boundaryWall: LuLayers,
  electricityAvailable: LuSettings2,
  waterConnection: LuFuel,
  noOfCarParking: LuCar,
  ageOfPropertyYears: LuCalendar,
  ageOfProperty: LuCalendar,
  boxPappers: LuBox,
  boxPapers: LuBox,
  raretyLevel: LuStar,
  approximateAgeYears: LuClock,
  dimensionsLWH: LuRuler,
  noOfOwners: LuUser,
  bedrooms: LuBedDouble,
  bathrooms: LuBath,
  rentalType: LuHouse,
  rent: LuIndianRupee,
  furnishedStatus: LuArmchair,
};

export const getMetaIcon = (key) => metaFieldIconMap[key] || LuInfo;

const categoryMetaFields = {
  REAL_ESTATE: [
    { key: 'bhk', label: 'BHK' },
    { key: 'builtUpArea', label: 'Built-up Area', compose: (meta) => (meta.builtUpArea || meta.builtUpAreaInSqYards) ? `${meta.builtUpArea || meta.builtUpAreaInSqYards} sq. yards` : null },
    { key: 'areaLocality', label: 'Area Locality', fallbacks: ['locality', 'area'] },
    { key: 'propertyAge', label: 'Property Age', fallbacks: ['ageOfPropertyYears', 'ageOfProperty'] },
    { key: 'furnishing', label: 'Furnishing' },
    { key: 'ownershipType', label: 'Ownership Type' },
    { key: 'parking', label: 'Parking', fallbacks: ['noOfCarParking'] },
  ],
  REAL_ESTATE_PLOT: [
    { key: 'plotArea', label: 'Plot Area', compose: (meta) => (meta.plotArea || meta.plotAreaInSqYards) ? `${meta.plotArea || meta.plotAreaInSqYards} sq. yards` : null },
    { key: 'plotDimensions', label: 'Dimensions' },
    { key: 'areaLocality', label: 'Locality', fallbacks: ['locality', 'area'] },
    { key: 'cornerPlot', label: 'Corner Plot' },
    { key: 'approvalType', label: 'Approval Type' },
    { key: 'roadWidth', label: 'Road Width' },
    { key: 'ownershipType', label: 'Ownership' },
    { key: 'waterConnection', label: 'Water' },
  ],
  CARS: [
    { key: 'brandModel', label: 'Brand + Model', compose: (meta) => [meta.brand, meta.model].filter(Boolean).join(' ') || meta.brandModel },
    { key: 'year', label: 'Year', fallbacks: ['yearOfManufacture'] },
    { key: 'kmDriven', label: 'KM Driven' },
    { key: 'fuelType', label: 'Fuel Type' },
    { key: 'transmission', label: 'Transmission' },
    { key: 'ownership', label: 'Ownership', fallbacks: ['noOfOwners'] },
  ],
  BIKES: [
    { key: 'brandModel', label: 'Brand + Model', compose: (meta) => [meta.brand, meta.model].filter(Boolean).join(' ') || meta.brandModel },
    { key: 'yearOfManufacture', label: 'Year', fallbacks: ['year'] },
    { key: 'kmDriven', label: 'KM Driven' },
    { key: 'fuelType', label: 'Fuel Type' },
    { key: 'ownership', label: 'Ownership', fallbacks: ['noOfOwners'] },
    { key: 'insuranceStatus', label: 'Insurance', fallbacks: ['insurance'] },
  ],
  FURNITURE: [
    { key: 'furnitureType', label: 'Type', fallbacks: ['type'] },
    { key: 'material', label: 'Material' },
    { key: 'condition', label: 'Condition' },
    { key: 'dimensions', label: 'Dimensions', fallbacks: ['dimensionsLWH'] },
    { key: 'seatingCapacity', label: 'Seating', fallbacks: ['seatingCapacityIfApplicable'] },
    { key: 'ageOfFurniture', label: 'Age', fallbacks: ['age'] },
  ],
  JEWELLERY: [
    { key: 'type', label: 'Type' },
    { key: 'itemType', label: 'Item Type', fallbacks: ['type'] },
    { key: 'condition', label: 'Condition' },
    { key: 'material', label: 'Material' },
    { key: 'weight', label: 'Weight' },
    { key: 'purity', label: 'Purity' },
    { key: 'certification', label: 'Certification' },
  ],
  JEWELLERY_AND_WATCHES: [
    { key: 'type', label: 'Type' },
    { key: 'itemType', label: 'Item Type', fallbacks: ['type'] },
    { key: 'condition', label: 'Condition' },
    { key: 'material', label: 'Material' },
    { key: 'weight', label: 'Weight' },
    { key: 'purity', label: 'Purity' },
    { key: 'certification', label: 'Certification' },
  ],
  JEWELLERY_AND_WATCHES_WATCH: [
    { key: 'brand', label: 'Brand' },
    { key: 'model', label: 'Model' },
    { key: 'yearOfPurchase', label: 'Year', fallbacks: ['year'] },
    { key: 'workingCondition', label: 'Condition', fallbacks: ['condition'] },
    { key: 'boxAndPapers', label: 'Box & Papers', fallbacks: ['boxPappers', 'boxPapers'] },
    { key: 'originalParts', label: 'Original Parts' },
  ],
  WATCHES: [
    { key: 'brand', label: 'Brand' },
    { key: 'model', label: 'Model' },
    { key: 'yearOfPurchase', label: 'Year', fallbacks: ['year'] },
    { key: 'workingCondition', label: 'Condition', fallbacks: ['condition'] },
    { key: 'boxAndPapers', label: 'Box & Papers', fallbacks: ['boxPappers', 'boxPapers'] },
    { key: 'originalParts', label: 'Original Parts' },
  ],
  ARTS_AND_PAINTINGS: [
    { key: 'artistName', label: 'Artist', fallbacks: ['artist'] },
    { key: 'medium', label: 'Medium' },
    { key: 'size', label: 'Size' },
    { key: 'yearCreated', label: 'Year', fallbacks: ['year'] },
    { key: 'signed', label: 'Signed' },
    { key: 'certificate', label: 'Certificate' },
  ],
  ANTIQUES: [
    { key: 'antiqueType', label: 'Type', fallbacks: ['type'] },
    { key: 'approximateAge', label: 'Age', fallbacks: ['approximateAgeYears', 'age'] },
    { key: 'origin', label: 'Origin' },
    { key: 'material', label: 'Material' },
    { key: 'condition', label: 'Condition' },
    { key: 'documentation', label: 'Documentation' },
  ],
  COLLECTABLES: [
    { key: 'itemType', label: 'Type', fallbacks: ['type'] },
    { key: 'rarityLevel', label: 'Rarity', fallbacks: ['raretyLevel', 'rarity'] },
    { key: 'limitedEdition', label: 'Limited Edition' },
    { key: 'serialNumber', label: 'Serial No.' },
    { key: 'authentication', label: 'Authentication' },
    { key: 'conditionGrade', label: 'Condition', fallbacks: ['condition'] },
  ],
  RENTALS: [
    { key: 'bhk', label: 'BHK' },
    { key: 'carpetArea', label: 'Carpet Area' },
    { key: 'monthlyRent', label: 'Monthly Rent', fallbacks: ['rentPerMonth'] },
    { key: 'furnishingStatus', label: 'Furnishing', fallbacks: ['furnishing'] },
    { key: 'securityDeposit', label: 'Deposit' },
    { key: 'availableFrom', label: 'Available From' },
  ],
  TO_LET: [
    { key: 'bedrooms', label: 'Bedrooms', fallbacks: ['bhk'] },
    { key: 'bathrooms', label: 'Bathrooms' },
    { key: 'furnishedStatus', label: 'Furnishing', fallbacks: ['furnishingStatus', 'furnishing'] },
    { key: 'securityDeposit', label: 'Deposit' },
    { key: 'carpetArea', label: 'Carpet Area' },
    { key: 'rentalType', label: 'Type' },
    { key: 'builtUpArea', label: 'Built-up Area' },
    { key: 'availableFrom', label: 'Available From' },
  ],
};

const defaultMetaFields = [
  { key: 'category', label: 'Category' },
  { key: 'brand', label: 'Brand' },
  { key: 'condition', label: 'Condition' },
  { key: 'purchaseYear', label: 'Purchase Year', fallbacks: ['year'] },
  { key: 'warranty', label: 'Warranty' },
  { key: 'usageType', label: 'Usage Type' },
];

const getFieldValue = (field, meta) => {
  if (field.compose) {
    const composed = field.compose(meta);
    if (composed) return composed;
  }
  if (meta[field.key] !== undefined && meta[field.key] !== null && meta[field.key] !== '') {
    return String(meta[field.key]);
  }
  if (field.fallbacks) {
    for (const fb of field.fallbacks) {
      if (meta[fb] !== undefined && meta[fb] !== null && meta[fb] !== '') {
        return String(meta[fb]);
      }
    }
  }
  return null;
};

const resolveFieldsKey = (categoryKey, meta) => {
  if (categoryKey === 'JEWELLERY_AND_WATCHES' && meta.itemType === 'Watch') {
    return 'JEWELLERY_AND_WATCHES_WATCH';
  }
  if (categoryKey === 'REAL_ESTATE') {
    const pt = meta.propertyType;
    if (pt === 'Plot' || pt === 'Land') return 'REAL_ESTATE_PLOT';
  }
  return categoryKey;
};

export const getMetaFieldsForCategory = (categoryKey, meta) => {
  if (!meta || typeof meta !== 'object') return [];
  const resolvedKey = resolveFieldsKey(categoryKey, meta);
  const fields = categoryMetaFields[resolvedKey] || categoryMetaFields[categoryKey] || defaultMetaFields;
  const result = [];
  for (const field of fields) {
    const value = getFieldValue(field, meta);
    if (value) {
      result.push({ key: field.key, label: field.label, value });
    }
    if (result.length >= 4) break;
  }
  return result;
};
