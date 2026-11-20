import type { PanelProps } from '../../types';
import './Panel.css';

function Panel({ title, children, actions }: PanelProps) {
  return (
    <section className="panel">
      <header className="panel__header">
        <h2 className="panel__title">{title}</h2>
      </header>

      <div className="panel__content">{children}</div>
      {actions && <div className="panel__actions">{actions}</div>}
    </section>
  );
}

export default Panel;
