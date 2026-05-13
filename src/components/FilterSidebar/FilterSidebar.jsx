import { useState, useMemo } from 'react';
import { LuSlidersHorizontal, LuX, LuChevronDown, LuChevronUp } from 'react-icons/lu';
import { FILTER_TYPES, deriveOptionsFromProducts } from '../../lib/filterConfig';
import {
  SelectFilter,
  MultiSelectFilter,
  RangeFilter,
  BooleanFilter,
  TextFilter,
} from '../FilterWidgets/FilterWidgets';
import './FilterSidebar.css';

const FilterGroup = ({ label, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="filter-group">
      <button className="filter-group-header" onClick={() => setOpen(!open)}>
        <span className="filter-group-label">{label}</span>
        {open ? <LuChevronUp size={16} /> : <LuChevronDown size={16} />}
      </button>
      {open && <div className="filter-group-body">{children}</div>}
    </div>
  );
};

const FilterSidebar = ({
  filterDefs = [],
  products = [],
  filters = {},
  onFilterChange,
  onClearAll,
  activeFilterCount,
  isOpen,
  onClose,
  drawerOnly = false,
}) => {
  const derivedOptionsMap = useMemo(() => {
    const map = {};
    for (const def of filterDefs) {
      if (def.deriveOptions) {
        map[def.key] = deriveOptionsFromProducts(products, def);
      }
    }
    return map;
  }, [products, filterDefs]);

  const shouldShow = (def) => {
    if (!def.showWhen) return true;
    const current = filters[def.showWhen.key];
    if (!current) return true; 
    return def.showWhen.values.includes(current);
  };

  const visibleDefs = filterDefs.filter((def) => {
    if (!shouldShow(def)) return false;
    if (def.deriveOptions && (derivedOptionsMap[def.key] || []).length === 0) return false;
    return true;
  });

  if (visibleDefs.length === 0) return null;

  const renderFilter = (def) => {
    const options = def.options || derivedOptionsMap[def.key] || [];

    switch (def.type) {
      case FILTER_TYPES.SELECT:
        return (
          <SelectFilter
            label={def.label}
            value={filters[def.key]}
            onChange={(v) => onFilterChange(def.key, v)}
            options={options}
          />
        );

      case FILTER_TYPES.MULTI_SELECT:
        return (
          <MultiSelectFilter
            value={filters[def.key]}
            onChange={(v) => onFilterChange(def.key, v)}
            options={options}
          />
        );

      case FILTER_TYPES.RANGE: {
        const minKey = def.isTopLevel ? 'priceMin' : def.key + 'Min';
        const maxKey = def.isTopLevel ? 'priceMax' : def.key + 'Max';
        return (
          <RangeFilter
            value={{ min: filters[minKey], max: filters[maxKey] }}
            onChange={(v) => {
              onFilterChange(minKey, v?.min ?? null);
              onFilterChange(maxKey, v?.max ?? null);
            }}
            unit={def.unit}
          />
        );
      }

      case FILTER_TYPES.BOOLEAN:
        return (
          <BooleanFilter
            value={filters[def.key]}
            onChange={(v) => onFilterChange(def.key, v)}
          />
        );

      case FILTER_TYPES.TEXT:
        return (
          <TextFilter
            label={def.label}
            value={filters[def.key]}
            onChange={(v) => onFilterChange(def.key, v)}
            suggestions={Array.from(new Set([...(def.options || []), ...(derivedOptionsMap[def.key] || [])])).sort()}
          />
        );

      default:
        return null;
    }
  };

  const sidebarContent = (
    <>
      <div className="filter-sidebar-header">
        <div className="filter-sidebar-title">
          <LuSlidersHorizontal size={18} />
          Filters
          {activeFilterCount > 0 && (
            <span className="filter-count-badge">{activeFilterCount}</span>
          )}
        </div>
        <div className="filter-sidebar-actions">
          {activeFilterCount > 0 && (
            <button className="filter-clear-btn" onClick={onClearAll}>
              Clear All
            </button>
          )}
          {isOpen && (
            <button className="filter-close-btn" onClick={onClose}>
              <LuX size={20} />
            </button>
          )}
        </div>
      </div>
      <div className="filter-sidebar-body">
        {visibleDefs.map((def) => (
          <FilterGroup key={def.key} label={def.label}>
            {renderFilter(def)}
          </FilterGroup>
        ))}
      </div>
    </>
  );

  return (
    <>
      {!drawerOnly && (
        <aside className="filter-sidebar filter-sidebar--desktop">
          {sidebarContent}
        </aside>
      )}

      {isOpen && (
        <>
          <div className={`filter-sidebar-overlay ${drawerOnly ? 'filter-sidebar-overlay--force' : ''}`} onClick={onClose} />
          <aside className={`filter-sidebar filter-sidebar--mobile ${drawerOnly ? 'filter-sidebar--force' : ''}`}>
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
};

export default FilterSidebar;
