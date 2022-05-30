import React from 'react'
import { Logo } from '../../assets/Icons/Logo'

export const Header: React.FC = () => {
  return (
    <header data-testid="header-component">
      <div className="logo-container" data-testid="logo-container">
        <Logo />
      </div>
    </header>
  )
}
