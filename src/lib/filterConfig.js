export const FILTER_TYPES = {
  SELECT: 'select',
  MULTI_SELECT: 'multi_select',
  RANGE: 'range',
  BOOLEAN: 'boolean',
  TEXT: 'text',
};

const commonLocationFilter = {
  key: 'city',
  label: 'City',
  type: FILTER_TYPES.TEXT,
  options: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune', 'Surat'],
  fallbacks: ['location', 'locality']
};
const priceRangeFilter = { key: 'price', label: 'Price Range', type: FILTER_TYPES.RANGE, unit: '₹', isTopLevel: true };

export const categoryFilterConfig = {
  REAL_ESTATE: [
    commonLocationFilter,
    { key: 'areaLocality', label: 'Area / Locality', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['locality', 'area'] },
    { key: 'landmark', label: 'Landmark', type: FILTER_TYPES.SELECT, deriveOptions: true },
    priceRangeFilter,
    { key: 'propertyType', label: 'Property Type', type: FILTER_TYPES.SELECT, options: ['House', 'Villa', 'Apartment', 'Flat', 'Plot', 'Land', 'Commercial'] },
    { key: 'ownershipType', label: 'Ownership Type', type: FILTER_TYPES.SELECT, options: ['Freehold', 'Leasehold', 'Co-operative Society', 'Power of Attorney'] },
    { key: 'approvalStatus', label: 'Approval Status', type: FILTER_TYPES.SELECT, options: ['RERA Approved', 'Authority Approved', 'Under Process', 'Not Approved'] },
    { key: 'availability', label: 'Availability', type: FILTER_TYPES.SELECT, options: ['Immediate', 'Ready to Move', 'Under Construction', 'Within 3 Months', 'Within 6 Months'] },
    { key: 'facing', label: 'Facing', type: FILTER_TYPES.SELECT, options: ['North', 'South', 'East', 'West', 'NE', 'NW', 'SE', 'SW'] },
    { key: 'parking', label: 'Parking', type: FILTER_TYPES.SELECT, options: ['None', '1', '2', '3+'] },
    { key: 'propertyAge', label: 'Age of Property', type: FILTER_TYPES.SELECT, options: ['New', '0-5 Years', '5-10 Years', '10+ Years'], fallbacks: ['age'] },
    // Houses & Villas
    { key: 'builtUpArea', label: 'Built-up Area', type: FILTER_TYPES.RANGE, unit: 'sq ft', showWhen: { key: 'propertyType', values: ['House', 'Villa', 'Apartment', 'Flat'] } },
    { key: 'plotArea', label: 'Plot Area', type: FILTER_TYPES.RANGE, unit: 'sq ft', showWhen: { key: 'propertyType', values: ['House', 'Villa', 'Plot', 'Land'] } },
    { key: 'bedrooms', label: 'Bedrooms', type: FILTER_TYPES.SELECT, options: ['1', '2', '3', '4', '5+'], showWhen: { key: 'propertyType', values: ['House', 'Villa'] } },
    { key: 'bathrooms', label: 'Bathrooms', type: FILTER_TYPES.SELECT, options: ['1', '2', '3', '4+'], showWhen: { key: 'propertyType', values: ['House', 'Villa'] } },
    { key: 'floors', label: 'Floors', type: FILTER_TYPES.SELECT, options: ['G', 'G+1', 'G+2', 'G+3', 'More'], showWhen: { key: 'propertyType', values: ['House', 'Villa'] } },
    { key: 'furnishing', label: 'Furnishing', type: FILTER_TYPES.SELECT, options: ['Unfurnished', 'Semi-Furnished', 'Fully Furnished'], fallbacks: ['furnishingStatus'] },
    { key: 'garden', label: 'Garden', type: FILTER_TYPES.BOOLEAN, showWhen: { key: 'propertyType', values: ['House', 'Villa'] } },
    { key: 'powerBackup', label: 'Power Backup', type: FILTER_TYPES.SELECT, options: ['None', 'Partial', 'Full'] },
    { key: 'gatedCommunity', label: 'Gated Community', type: FILTER_TYPES.BOOLEAN, showWhen: { key: 'propertyType', values: ['House', 'Villa'] } },
    // Apartments & Flats
    { key: 'bhk', label: 'BHK', type: FILTER_TYPES.SELECT, options: ['1', '2', '3', '4+'], showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] } },
    { key: 'floorNumber', label: 'Floor Number', type: FILTER_TYPES.TEXT, showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] } },
    { key: 'totalFloors', label: 'Total Floors', type: FILTER_TYPES.TEXT, showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] } },
    { key: 'lift', label: 'Lift', type: FILTER_TYPES.BOOLEAN, showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] } },
    { key: 'maintenance', label: 'Maintenance', type: FILTER_TYPES.SELECT, options: ['Included', 'Excluded', 'On Request'], showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] } },
    { key: 'balconyCount', label: 'Balcony Count', type: FILTER_TYPES.SELECT, options: ['0', '1', '2', '3+'], showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] }, fallbacks: ['balconies'] },
    { key: 'parkingType', label: 'Parking Type', type: FILTER_TYPES.SELECT, options: ['None', 'Open', 'Covered'], showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] } },
    { key: 'amenities', label: 'Amenities', type: FILTER_TYPES.MULTI_SELECT, options: ['Gym', 'Pool', 'Clubhouse', 'Security', 'Power Backup'], showWhen: { key: 'propertyType', values: ['Apartment', 'Flat'] } },
    // Plots & Land
    { key: 'roadWidth', label: 'Road Width', type: FILTER_TYPES.SELECT, options: ['<20 ft', '20-30 ft', '30-40 ft', '40+ ft'], showWhen: { key: 'propertyType', values: ['Plot', 'Land'] } },
    { key: 'approvalType', label: 'Approval Type', type: FILTER_TYPES.SELECT, options: ['DTCP', 'HMDA', 'RERA', 'Panchayat', 'NA'], showWhen: { key: 'propertyType', values: ['Plot', 'Land'] } },
    { key: 'cornerPlot', label: 'Corner Plot', type: FILTER_TYPES.BOOLEAN, showWhen: { key: 'propertyType', values: ['Plot', 'Land'] } },
    { key: 'boundaryWall', label: 'Boundary Wall', type: FILTER_TYPES.BOOLEAN, showWhen: { key: 'propertyType', values: ['Plot', 'Land'] } },
    { key: 'electricityAvailable', label: 'Electricity Available', type: FILTER_TYPES.BOOLEAN, showWhen: { key: 'propertyType', values: ['Plot', 'Land'] } },
    { key: 'waterConnection', label: 'Water Connection', type: FILTER_TYPES.SELECT, options: ['Municipal', 'Borewell', 'Both', 'None'], showWhen: { key: 'propertyType', values: ['Plot', 'Land'] } },
    // Commercial
    { key: 'commercialType', label: 'Commercial Type', type: FILTER_TYPES.SELECT, options: ['Office', 'Shop', 'Showroom', 'Warehouse', 'Industrial'], showWhen: { key: 'propertyType', values: ['Commercial'] } },
    { key: 'suitableFor', label: 'Suitable For', type: FILTER_TYPES.MULTI_SELECT, options: ['Office', 'Retail', 'Clinic', 'Restaurant', 'Storage'], showWhen: { key: 'propertyType', values: ['Commercial'] } },
    { key: 'powerLoad', label: 'Power Load', type: FILTER_TYPES.SELECT, options: ['<5 KW', '5-10 KW', '10+ KW'], showWhen: { key: 'propertyType', values: ['Commercial'] } },
    { key: 'washroom', label: 'Washroom', type: FILTER_TYPES.SELECT, options: ['Private', 'Common', 'None'], showWhen: { key: 'propertyType', values: ['Commercial'] } },
    { key: 'fireSafetyCompliance', label: 'Fire Safety', type: FILTER_TYPES.BOOLEAN, showWhen: { key: 'propertyType', values: ['Commercial'] } },
  ],

  CARS: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'brand', label: 'Brand', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'model', label: 'Model', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'year', label: 'Year', type: FILTER_TYPES.RANGE, fallbacks: ['yearOfManufacture'] },
    { key: 'kmDriven', label: 'KM Driven', type: FILTER_TYPES.RANGE, unit: 'km' },
    { key: 'fuelType', label: 'Fuel Type', type: FILTER_TYPES.SELECT, options: ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'] },
    { key: 'transmission', label: 'Transmission', type: FILTER_TYPES.SELECT, options: ['Manual', 'Automatic', 'AMT'] },
    { key: 'sellerType', label: 'Seller Type', type: FILTER_TYPES.SELECT, options: ['Owner', 'Dealer'] },
    { key: 'ownership', label: 'Ownership', type: FILTER_TYPES.SELECT, options: ['1st', '2nd', '3rd', '4th+'] },
    { key: 'insuranceValidity', label: 'Insurance', type: FILTER_TYPES.SELECT, options: ['Active', 'Expired'], fallbacks: ['insurance', 'insuranceStatus'] },
    { key: 'colour', label: 'Colour', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['color'] },
    { key: 'condition', label: 'Condition', type: FILTER_TYPES.SELECT, options: ['Excellent', 'Good', 'Fair'] },
    { key: 'serviceHistory', label: 'Service History', type: FILTER_TYPES.SELECT, options: ['Available', 'Not Available'] },
    { key: 'numberOfKeys', label: 'Number of Keys', type: FILTER_TYPES.SELECT, options: ['1', '2', 'More'] },
    { key: 'negotiable', label: 'Negotiable', type: FILTER_TYPES.BOOLEAN },
    { key: 'accidentHistory', label: 'Accident History', type: FILTER_TYPES.BOOLEAN },
  ],

  BIKES: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'brand', label: 'Brand', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'model', label: 'Model', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'year', label: 'Year', type: FILTER_TYPES.RANGE, fallbacks: ['yearOfManufacture'] },
    { key: 'kmDriven', label: 'KM Driven', type: FILTER_TYPES.RANGE, unit: 'km' },
    { key: 'fuelType', label: 'Fuel Type', type: FILTER_TYPES.SELECT, options: ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'] },
    { key: 'transmission', label: 'Transmission', type: FILTER_TYPES.SELECT, options: ['Manual', 'Automatic', 'AMT'] },
    { key: 'sellerType', label: 'Seller Type', type: FILTER_TYPES.SELECT, options: ['Owner', 'Dealer'] },
    { key: 'ownership', label: 'Ownership', type: FILTER_TYPES.SELECT, options: ['1st', '2nd', '3rd', '4th+'] },
    { key: 'insuranceValidity', label: 'Insurance', type: FILTER_TYPES.SELECT, options: ['Active', 'Expired'], fallbacks: ['insurance', 'insuranceStatus'] },
    { key: 'colour', label: 'Colour', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['color'] },
    { key: 'condition', label: 'Condition', type: FILTER_TYPES.SELECT, options: ['Excellent', 'Good', 'Fair'] },
    { key: 'serviceHistory', label: 'Service History', type: FILTER_TYPES.SELECT, options: ['Available', 'Not Available'] },
    { key: 'numberOfKeys', label: 'Number of Keys', type: FILTER_TYPES.SELECT, options: ['1', '2', 'More'] },
    { key: 'negotiable', label: 'Negotiable', type: FILTER_TYPES.BOOLEAN },
    { key: 'accidentHistory', label: 'Accident History', type: FILTER_TYPES.BOOLEAN },
  ],

  FURNITURE: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'furnitureType', label: 'Furniture Type', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['type'] },
    { key: 'material', label: 'Material', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'colour', label: 'Colour', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['color', 'colorFinish'] },
    { key: 'seatingCapacity', label: 'Seating Capacity', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['seatingCapacityIfApplicable'] },
    { key: 'ageOfFurniture', label: 'Age of Furniture', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['age'] },
    { key: 'condition', label: 'Condition', type: FILTER_TYPES.SELECT, options: ['Brand New', 'Pre-Owned', 'Refurbished'] },
    { key: 'usageCondition', label: 'Usage Condition', type: FILTER_TYPES.SELECT, options: ['Never Used', 'Lightly Used', 'Moderately Used', 'Heavily Used'] },
    { key: 'sellerType', label: 'Seller Type', type: FILTER_TYPES.SELECT, options: ['Owner', 'Dealer'] },
  ],

  JEWELLERY_AND_WATCHES: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'condition', label: 'Condition', type: FILTER_TYPES.SELECT, options: ['New', 'Pre-Owned'] },
    { key: 'gender', label: 'Gender', type: FILTER_TYPES.SELECT, options: ['Male', 'Female'] },
    { key: 'type', label: 'Type', type: FILTER_TYPES.SELECT, options: ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Bangle', 'Set Chains', 'Ear Studs', 'Custom'], fallbacks: ['itemType'] },
    { key: 'material', label: 'Material', type: FILTER_TYPES.SELECT, options: ['Gold', 'Silver', 'Platinum', 'Diamond', 'Mixed'] },
    { key: 'weight', label: 'Weight', type: FILTER_TYPES.RANGE, unit: 'g' },
    { key: 'purity', label: 'Purity', type: FILTER_TYPES.SELECT, options: ['18K', '20K', '22K', '24K'] },
    { key: 'certification', label: 'Certification', type: FILTER_TYPES.SELECT, options: ['BIS', 'GIA', 'IGI', 'Others'] },
    { key: 'hallmarkType', label: 'Hallmark Type', type: FILTER_TYPES.SELECT, options: ['BIS', 'International', 'Others'] },
    { key: 'makingCharges', label: 'Making Charges', type: FILTER_TYPES.SELECT, options: ['Included', 'Excluded'] },
    { key: 'watchBrand', label: 'Watch Brand', type: FILTER_TYPES.TEXT, deriveOptions: true, fallbacks: ['brand'] },
    { key: 'watchModel', label: 'Watch Model', type: FILTER_TYPES.TEXT, deriveOptions: true, fallbacks: ['model'] },
    { key: 'dialType', label: 'Dial Type', type: FILTER_TYPES.SELECT, options: ['Analog', 'Digital', 'Automatic'] },
    { key: 'strapType', label: 'Strap Type', type: FILTER_TYPES.SELECT, options: ['Leather', 'Metal', 'Rubber', 'Fabric'] },
    { key: 'boxAndPapers', label: 'Box & Papers', type: FILTER_TYPES.SELECT, options: ['Available', 'Not Available'], fallbacks: ['boxPapers', 'boxPappers'] },
    { key: 'yearOfPurchase', label: 'Year of Purchase', type: FILTER_TYPES.TEXT, deriveOptions: true },
    { key: 'workingCondition', label: 'Working Condition', type: FILTER_TYPES.SELECT, options: ['Working', 'Needs Repair'] },
    { key: 'originalParts', label: 'Original Parts', type: FILTER_TYPES.BOOLEAN },
  ],

  ARTS_AND_PAINTINGS: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'artType', label: 'Art Type', type: FILTER_TYPES.SELECT, options: ['Painting', 'Sculpture', 'Print', 'Digital'], fallbacks: ['type'] },
    { key: 'artistName', label: 'Artist Name', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['artist'] },
    { key: 'medium', label: 'Medium', type: FILTER_TYPES.SELECT, options: ['Oil', 'Acrylic', 'Watercolor', 'Mixed'] },
    { key: 'size', label: 'Size', type: FILTER_TYPES.RANGE, unit: 'inches' },
    { key: 'yearCreated', label: 'Year Created', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['year'] },
    { key: 'signed', label: 'Signed', type: FILTER_TYPES.BOOLEAN },
    { key: 'certificate', label: 'Certificate', type: FILTER_TYPES.BOOLEAN },
    { key: 'framed', label: 'Framed', type: FILTER_TYPES.BOOLEAN },
  ],

  ANTIQUES: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'antiqueType', label: 'Antique Type', type: FILTER_TYPES.SELECT, options: ['Furniture', 'Coins', 'Artefacts', 'Decor'], fallbacks: ['type'] },
    { key: 'approximateAge', label: 'Approximate Age', type: FILTER_TYPES.RANGE, unit: 'years', fallbacks: ['age'] },
    { key: 'origin', label: 'Origin', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'material', label: 'Material', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'condition', label: 'Condition', type: FILTER_TYPES.SELECT, options: ['Excellent', 'Good', 'Fair'] },
    { key: 'restoration', label: 'Restoration', type: FILTER_TYPES.BOOLEAN },
    { key: 'documentation', label: 'Documentation', type: FILTER_TYPES.SELECT, options: ['Available', 'Not Available'] },
    { key: 'historicalPeriod', label: 'Historical Period', type: FILTER_TYPES.SELECT, options: ['Colonial', 'Victorian', 'Mughal', 'Other'] },
  ],

  COLLECTABLES: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'itemType', label: 'Item Type', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['type'] },
    { key: 'rarityLevel', label: 'Rarity Level', type: FILTER_TYPES.SELECT, options: ['Common', 'Rare', 'Very Rare', 'One-of-One'], fallbacks: ['rarity'] },
    { key: 'limitedEdition', label: 'Limited Edition', type: FILTER_TYPES.BOOLEAN },
    { key: 'serialNumber', label: 'Serial Number', type: FILTER_TYPES.SELECT, options: ['Available', 'Not Available'] },
    { key: 'authentication', label: 'Authentication', type: FILTER_TYPES.BOOLEAN },
    { key: 'conditionGrade', label: 'Condition Grade', type: FILTER_TYPES.SELECT, options: ['Fair', 'Excellent', 'Mint'], fallbacks: ['condition'] },
  ],

  TO_LET: [
    commonLocationFilter,
    { key: 'locality', label: 'Locality', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['areaLocality', 'area'] },
    { key: 'monthlyRent', label: 'Rent Range', type: FILTER_TYPES.RANGE, unit: '₹', fallbacks: ['rentPerMonth'] },
    { key: 'propertyType', label: 'Property Type', type: FILTER_TYPES.SELECT, options: ['Flat', 'Apartment', 'House', 'Villa', 'Studio', 'Penthouse'] },
    { key: 'bhk', label: 'BHK', type: FILTER_TYPES.SELECT, options: ['1 RK', '1', '2', '3', '4+'] },
    { key: 'bathrooms', label: 'Bathrooms', type: FILTER_TYPES.SELECT, options: ['1', '2', '3', '4+'] },
    { key: 'balconies', label: 'Balconies', type: FILTER_TYPES.SELECT, options: ['0', '1', '2', '3+'], fallbacks: ['balconyCount'] },
    { key: 'propertyFloor', label: 'Property Floor', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['floorNumber'] },
    { key: 'totalFloors', label: 'Total Floors', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'carpetArea', label: 'Carpet Area', type: FILTER_TYPES.RANGE, unit: 'sq ft' },
    { key: 'facing', label: 'Facing', type: FILTER_TYPES.SELECT, options: ['North', 'South', 'East', 'West', 'NE', 'NW', 'SE', 'SW'] },
    { key: 'furnishingStatus', label: 'Furnishing Status', type: FILTER_TYPES.SELECT, options: ['Unfurnished', 'Semi-Furnished', 'Fully-Furnished'], fallbacks: ['furnishing'] },
    { key: 'furnishingItems', label: 'Furnishing Items', type: FILTER_TYPES.MULTI_SELECT, options: ['Wardrobes', 'AC', 'Bed', 'TV', 'Sofa', 'Fridge', 'Geyser', 'Water Purifier'] },
    { key: 'preferredTenants', label: 'Preferred Tenants', type: FILTER_TYPES.MULTI_SELECT, options: ['Bachelors', 'Families', 'Company Lease', 'Vegetarians Only'] },
    { key: 'societyAmenities', label: 'Society Amenities', type: FILTER_TYPES.MULTI_SELECT, options: ['Lift', 'Power Backup', '24/7 Security', 'Gym', 'Swimming Pool', 'Reserved Parking'] },
    { key: 'securityDeposit', label: 'Security Deposit', type: FILTER_TYPES.RANGE, unit: '₹' },
    { key: 'maintenance', label: 'Maintenance', type: FILTER_TYPES.SELECT, options: ['Included', 'Extra'] },
    { key: 'availableFrom', label: 'Available From', type: FILTER_TYPES.TEXT },
  ],

  _DEFAULT: [
    commonLocationFilter,
    priceRangeFilter,
    { key: 'category', label: 'Item Category', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'brand', label: 'Brand', type: FILTER_TYPES.SELECT, deriveOptions: true },
    { key: 'condition', label: 'Condition', type: FILTER_TYPES.SELECT, options: ['New', 'Used'] },
    { key: 'usage', label: 'Usage', type: FILTER_TYPES.SELECT, options: ['Unused', 'Lightly Used', 'Heavily Used'], fallbacks: ['usageType'] },
    { key: 'warranty', label: 'Warranty', type: FILTER_TYPES.SELECT, options: ['Available', 'Not Available'] },
    { key: 'purchaseYear', label: 'Purchase Year', type: FILTER_TYPES.SELECT, deriveOptions: true, fallbacks: ['year'] },
  ],
};

export const getFiltersForCategory = (category, listingType) => {
  if (listingType === 'TO_LET') return categoryFilterConfig.TO_LET;
  return categoryFilterConfig[category] || categoryFilterConfig._DEFAULT;
};

export const getMetaValue = (meta, key, fallbacks) => {
  if (meta[key] !== undefined && meta[key] !== null && meta[key] !== '') return String(meta[key]);
  if (fallbacks) {
    for (const fb of fallbacks) {
      if (meta[fb] !== undefined && meta[fb] !== null && meta[fb] !== '') return String(meta[fb]);
    }
  }
  return null;
};

export const deriveOptionsFromProducts = (products, filterDef) => {
  const values = new Set();
  for (const product of products) {
    const meta = product.meta || {};
    const val = meta[filterDef.key];
    if (val !== null && val !== undefined && val !== '') values.add(String(val));
    if (filterDef.fallbacks) {
      for (const fb of filterDef.fallbacks) {
        const fbVal = meta[fb];
        if (fbVal !== null && fbVal !== undefined && fbVal !== '') values.add(String(fbVal));
      }
    }
  }
  return Array.from(values).sort();
};
