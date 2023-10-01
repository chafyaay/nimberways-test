import { FC } from 'react';
import { DateComponent } from './Date.component/date.component';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <DateComponent />{' '}
    </div>
  );
};
