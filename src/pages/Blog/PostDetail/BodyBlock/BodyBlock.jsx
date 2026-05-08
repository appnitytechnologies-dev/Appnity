import { Icons } from '../../../../components/ui/Icons';
import './BodyBlock.css';

export default function BodyBlock({ block }) {
  if (block.type === 'h3') {
    return <h3 className="body-block__h3">{block.text}</h3>;
  }
  if (block.type === 'list') {
    return (
      <ul className="body-block__list">
        {block.items.map((item, i) => (
          <li key={i} className="body-block__list-item">
            <div className="body-block__list-icon">
              <Icons.Check width="12" height="12" />
            </div>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="body-block__paragraph">{block.text}</p>;
}
