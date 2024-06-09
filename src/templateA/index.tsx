import React from 'react';
import { createRoot }  from 'react-dom/client';
import '../shared/style.css';
import Shared from '../shared/sharedComponent';

const TemplateA = ({ message }: { message: string}) => (
  <div className='flex flex-col gap-y-3 items-center justify-center h-screen bg-slate-300'>
    <Shared />
    <h1>Template A</h1>
    <h2>Message: {message}</h2>
  </div>
);

const root = createRoot(document.getElementById('template-a-root') as HTMLElement);
root.render(
  <React.StrictMode>
    {React.createElement(TemplateA, {
      message: TEMPLATE_DATA.message,
    })}
  </React.StrictMode>
);
