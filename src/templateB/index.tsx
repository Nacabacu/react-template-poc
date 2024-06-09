import React from 'react';
import { createRoot } from 'react-dom/client';
import '../shared/style.css';
import Shared from '../shared/sharedComponent';

const TemplateB = ({ message }: { message: string}) => (
  <div className='flex flex-col gap-y-3 items-center justify-center h-screen bg-orange-300'>
    <Shared />
    <h1>Template B</h1>
    <h2>Message: {message}</h2>
  </div>
);

const root = createRoot(document.getElementById('template-b-root') as HTMLElement);
root.render(
  <React.StrictMode>
    {React.createElement(TemplateB, {
      message: TEMPLATE_DATA.message,
    })}
  </React.StrictMode>
);