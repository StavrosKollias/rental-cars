import React from 'react'
import { IListOfBenefitsProps } from './'

export const ListOfBenefits: React.FC<IListOfBenefitsProps> = ({ content }) => {
  return (
    <div className="list-of-benefits-container">
      {content.map((e, i) => {
        return (
          <div key={i} className="flex">
            <span data-testid="icon-list" aria-hidden="true">
              <svg className="svg-white" viewBox="0 0 128 128" width="1em" height="1em">
                <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
              </svg>
            </span>

            <div>
              <div data-testid="usp-bullet-text-support" className="LPM_dc05b8b9 LPM_670105c9">
                {e}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
