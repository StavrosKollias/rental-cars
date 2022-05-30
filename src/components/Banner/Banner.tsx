import React from 'react'
import { IBannerProps } from './'

export const Banner: React.FC<IBannerProps> = ({ children }) => {
  return (
    <div className="hero-banner" data-testid="hero-banner-component">
      {children}
    </div>
  )
}
