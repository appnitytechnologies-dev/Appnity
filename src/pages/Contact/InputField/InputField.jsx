import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../../store/slices/contactSlice';
import './InputField.css';

export default function InputField({ label, fieldKey, type = 'text', placeholder = '' }) {
  const dispatch = useDispatch();
  const value = useSelector(s => s.contact.form[fieldKey]);

  return (
    <label className="input-field">
      <span className="input-field__label">{label}</span>
      <input
        className="input-field__input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => dispatch(updateField({ field: fieldKey, value: e.target.value }))}
      />
    </label>
  );
}
