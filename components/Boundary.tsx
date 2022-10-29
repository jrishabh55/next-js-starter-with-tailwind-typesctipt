import clsx from 'clsx';
import React from 'react';

const Label = ({
  animateRerendering,
  children,
  color,
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
  return (
    <div
      className={clsx('rounded-full px-1.5 shadow-[0_0_1px_4px_black]', {
        'animate-[highlight_1s_ease-in-out_1]': animateRerendering,
        'bg-vercel-blue text-blue-100': color === 'blue',
        'bg-vercel-cyan text-cyan-100': color === 'cyan',
        'bg-vercel-orange text-orange-100': color === 'orange',
        'bg-vercel-pink text-pink-100': color === 'pink',
        'bg-vercel-violet text-violet-100': color === 'violet',
        'bg-zinc-800 text-zinc-500': color === 'default',
      })}>
      {children}
    </div>
  );
};
export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: 'small' | 'default';
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
  animateRerendering?: boolean;
}) => {
  return (
    <section
      className={clsx('relative rounded-xl border border-dashed', {
        'animate-[rerender_1s_ease-in-out_1] text-vercel-pink': animateRerendering,
        'border-vercel-blue': color === 'blue',
        'border-vercel-cyan': color === 'cyan',
        'border-vercel-orange': color === 'orange',
        'border-vercel-pink': color === 'pink',
        'border-vercel-violet': color === 'violet',
        'border-zinc-700': color === 'default',
        'p-5': size === 'small',
        'p-9': size === 'default',
      })}>
      <div
        className={clsx('absolute -top-2.5 flex space-x-1 text-[9px] uppercase leading-4 tracking-widest', {
          'left-5': size === 'small',
          'left-9': size === 'default',
        })}>
        {labels.map((label) => {
          return (
            <Label key={label} animateRerendering={animateRerendering} color={color}>
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </section>
  );
};
