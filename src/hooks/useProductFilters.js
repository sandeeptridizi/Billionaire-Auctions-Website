import { useState, useMemo, useEffect, useCallback } from 'react';
import { getFiltersForCategory, getMetaValue, FILTER_TYPES } from '../lib/filterConfig';

const useProductFilters = (products, category, listingType) => {
  const [filters, setFilters] = useState({});

  const filterDefs = useMemo(
    () => getFiltersForCategory(category, listingType),
    [category, listingType]
  );

  useEffect(() => {
    setFilters({});
  }, [category, listingType]);

  const setFilter = useCallback((key, value) => {
    setFilters((prev) => {
      const next = { ...prev };
      if (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) {
        delete next[key];
      } else {
        next[key] = value;
      }
      return next;
    });
  }, []);

  const clearAllFilters = useCallback(() => setFilters({}), []);

  const activeFilterCount = useMemo(
    () => Object.keys(filters).length,
    [filters]
  );

  const filteredProducts = useMemo(() => {
    if (activeFilterCount === 0) return products;

    const defsByKey = {};
    for (const def of filterDefs) {
      defsByKey[def.key] = def;
      if (def.type === FILTER_TYPES.RANGE) {
        defsByKey[def.key + 'Min'] = def;
        defsByKey[def.key + 'Max'] = def;
      }
    }

    return products.filter((product) => {
      const meta = product.meta || {};

      for (const [filterKey, filterValue] of Object.entries(filters)) {
        if (filterValue === null || filterValue === undefined || filterValue === '') continue;

        const def = defsByKey[filterKey];

        if (filterKey === 'priceMin') {
          if (typeof product.value === 'number' && product.value < filterValue) return false;
          continue;
        }
        if (filterKey === 'priceMax') {
          if (typeof product.value === 'number' && product.value > filterValue) return false;
          continue;
        }

        if (filterKey.endsWith('Min')) {
          const baseKey = filterKey.slice(0, -3);
          const baseDef = defsByKey[baseKey];
          const raw = baseDef
            ? getMetaValue(meta, baseDef.key, baseDef.fallbacks)
            : meta[baseKey];
          const val = parseFloat(raw);
          if (!isNaN(val) && val < filterValue) return false;
          continue;
        }
        if (filterKey.endsWith('Max')) {
          const baseKey = filterKey.slice(0, -3);
          const baseDef = defsByKey[baseKey];
          const raw = baseDef
            ? getMetaValue(meta, baseDef.key, baseDef.fallbacks)
            : meta[baseKey];
          const val = parseFloat(raw);
          if (!isNaN(val) && val > filterValue) return false;
          continue;
        }

        if (Array.isArray(filterValue)) {
          if (filterValue.length === 0) continue;
          const metaVal = def
            ? getMetaValue(meta, def.key, def.fallbacks)
            : String(meta[filterKey] || '');
          if (!metaVal) return false;
          const metaValues = metaVal.split(',').map((v) => v.trim().toLowerCase());
          const hasMatch = filterValue.some((fv) =>
            metaValues.some((mv) => mv === fv.toLowerCase())
          );
          if (!hasMatch) return false;
          continue;
        }

        if (typeof filterValue === 'boolean') {
          const metaVal = def
            ? getMetaValue(meta, def.key, def.fallbacks)
            : String(meta[filterKey] || '');
          const boolVal =
            metaVal === 'true' ||
            metaVal === 'Yes' ||
            metaVal === 'yes' ||
            metaVal === '1';
          if (filterValue !== boolVal) return false;
          continue;
        }

        const metaVal = def
          ? getMetaValue(meta, def.key, def.fallbacks)
          : String(meta[filterKey] || '');
        if (!metaVal) return false;
        if (!metaVal.toLowerCase().includes(String(filterValue).toLowerCase())) return false;
      }

      return true;
    });
  }, [products, filters, activeFilterCount, filterDefs]);

  return { filters, filteredProducts, setFilter, clearAllFilters, activeFilterCount, filterDefs };
};

export default useProductFilters;
