import './CardMetaGrid.css';
import { getMetaFieldsForCategory, getMetaIcon } from '../../lib/categoryMetaConfig';

const CardMetaGrid = ({ categoryKey, meta }) => {
  const fields = getMetaFieldsForCategory(categoryKey, meta);
  if (fields.length === 0) return null;

  return (
    <div className="card-meta-grid">
      {fields.map((field) => {
        const Icon = getMetaIcon(field.key);
        return (
          <div className="card-meta-item" key={field.key}>
            <Icon className="card-meta-icon" />
            <span className="card-meta-value">{field.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CardMetaGrid;
