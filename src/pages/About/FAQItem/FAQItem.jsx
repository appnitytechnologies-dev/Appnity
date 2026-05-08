import { Icons } from '../../../components/ui/Icons';
import './FAQItem.css';

export default function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-item__btn" onClick={onToggle}>
        <span className="faq-item__question">{q}</span>
        <span className={`faq-item__icon${open ? ' faq-item__icon--open' : ''}`}>
          {open ? <Icons.Minus width="16" height="16" /> : <Icons.Plus width="16" height="16" />}
        </span>
      </button>
      <div className={`faq-item__answer${open ? ' faq-item__answer--open' : ''}`}>
        <p className="faq-item__answer-text">{a}</p>
      </div>
    </div>
  );
}
