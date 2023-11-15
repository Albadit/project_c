import React, { useState } from 'react';
import Link from 'next/link';
const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="font-sans bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="prose max-w-none">

          <div className="mt-4">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="acceptTerms" className="text-sm">
            Ja, ik heb de informatie gelezen en begrepen en stem in met {' '}
            <Link href="/terms_page">
             <a href="/terms_page" className="text-blue-500">deze voorwaarden</a>.
            </Link>
            </label>
          </div>

          <button
            type="button"
            disabled={!isChecked}
            className={`mt-4 py-2 px-4 bg-blue-500 text-white rounded ${!isChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Verder
          </button>

        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;