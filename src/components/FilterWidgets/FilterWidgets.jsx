import { useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import './FilterWidgets.css';

export const SelectFilter = ({ label, value, onChange, options }) => (
  <div className="filter-widget">
    <select
      className="filter-select"
      value={value || ''}
      onChange={(e) => onChange(e.target.value || null)}
    >
      <option value="">All {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export const MultiSelectFilter = ({ value = [], onChange, options }) => {
  const [expanded, setExpanded] = useState(false);
  const maxVisible = 5;
  const visibleOptions = expanded ? options : options.slice(0, maxVisible);

  const toggle = (opt) => {
    const current = value || [];
    const next = current.includes(opt)
      ? current.filter((v) => v !== opt)
      : [...current, opt];
    onChange(next.length > 0 ? next : null);
  };

  return (
    <div className="filter-widget">
      <div className="filter-checkbox-group">
        {visibleOptions.map((opt) => (
          <label key={opt} className="filter-checkbox-label">
            <input
              type="checkbox"
              className="filter-checkbox"
              checked={(value || []).includes(opt)}
              onChange={() => toggle(opt)}
            />
            <span className="filter-checkbox-custom" />
            <span className="filter-checkbox-text">{opt}</span>
          </label>
        ))}
      </div>
      {options.length > maxVisible && (
        <button className="filter-show-more" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <>Show less <LuChevronUp size={14} /></>
          ) : (
            <>+{options.length - maxVisible} more <LuChevronDown size={14} /></>
          )}
        </button>
      )}
    </div>
  );
};

export const RangeFilter = ({ value = {}, onChange, unit }) => {
  const handleChange = (field, val) => {
    const num = val === '' ? undefined : Number(val);
    const next = { ...value, [field]: num };
    if (next.min === undefined && next.max === undefined) {
      onChange(null);
    } else {
      onChange(next);
    }
  };

  return (
    <div className="filter-widget">
      <div className="filter-range-row">
        <input
          type="number"
          className="filter-range-input"
          placeholder="Min"
          value={value?.min ?? ''}
          onChange={(e) => handleChange('min', e.target.value)}
        />
        <span className="filter-range-separator">to</span>
        <input
          type="number"
          className="filter-range-input"
          placeholder="Max"
          value={value?.max ?? ''}
          onChange={(e) => handleChange('max', e.target.value)}
        />
      </div>
      {unit && <span className="filter-range-unit">{unit}</span>}
    </div>
  );
};

export const BooleanFilter = ({ value, onChange }) => (
  <div className="filter-widget">
    <div className="filter-boolean-row">
      <button
        className={`filter-bool-btn ${value === true ? 'filter-bool-active' : ''}`}
        onClick={() => onChange(value === true ? null : true)}
      >
        Yes
      </button>
      <button
        className={`filter-bool-btn ${value === false ? 'filter-bool-active' : ''}`}
        onClick={() => onChange(value === false ? null : false)}
      >
        No
      </button>
    </div>
  </div>
);

export const TextFilter = ({ label, value, onChange, suggestions = [] }) => (
  <div className="filter-widget">
    <input
      type="text"
      className="filter-text-input"
      placeholder={`Search ${label}...`}
      value={value || ''}
      onChange={(e) => onChange(e.target.value || null)}
      list={suggestions.length > 0 ? `suggestions-${label}` : undefined}
    />
    {suggestions.length > 0 && (
      <datalist id={`suggestions-${label}`}>
        {suggestions.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>
    )}
  </div>
);
