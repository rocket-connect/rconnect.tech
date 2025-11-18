// components/shared/Table.tsx
import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return (
    <div className="not-prose my-10 w-full overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-md backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/30 dark:shadow-slate-950/50">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">{children}</table>
      </div>
    </div>
  );
};

export const TableHead = ({ children }: TableProps) => {
  return (
    <thead className="relative border-b-2 border-cyan-200/50 bg-gradient-to-r from-slate-50 via-cyan-50/30 to-slate-50 dark:border-cyan-900/30 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-slate-800/90">
      <tr className="relative">
        <td className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-cyan-500/30"></td>
      </tr>
      {children}
    </thead>
  );
};

export const TableBody = ({ children }: TableProps) => {
  return (
    <tbody className="divide-y divide-slate-100 bg-white dark:divide-slate-800/50 dark:bg-transparent">
      {children}
    </tbody>
  );
};

export const TableRow = ({ children }: TableProps) => {
  return (
    <tr className="group transition-all duration-200 hover:bg-gradient-to-r hover:from-slate-50/50 hover:via-cyan-50/20 hover:to-slate-50/50 hover:shadow-sm dark:hover:from-slate-800/20 dark:hover:via-slate-800/30 dark:hover:to-slate-800/20">
      {children}
    </tr>
  );
};

interface TableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export const TableHeader = ({ children, align = 'left' }: TableCellProps) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <th
      className={`whitespace-nowrap px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 ${alignmentClass}`}
    >
      {children}
    </th>
  );
};

export const TableCell = ({ children, align = 'left' }: TableCellProps) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <td
      className={`px-6 py-4 text-sm text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-200 ${alignmentClass}`}
    >
      {children}
    </td>
  );
};
