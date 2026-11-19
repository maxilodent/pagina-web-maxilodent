import React from 'react';

export const FinancialStatementsButton: React.FC = () => (
  <div className="flex w-full justify-end bg-[#F6F8F8] px-4 py-4 sm:px-8">
    <a
      href="https://maxilodentrx.com/estados_financieros/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#F0CCB9] bg-[#FFF5EF] px-4 py-2 text-sm font-bold text-[#A94321] shadow-sm transition-colors hover:bg-[#FCE8DC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A94321]"
    >
      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">account_balance</span>
      <span>Estados financieros</span>
    </a>
  </div>
);
