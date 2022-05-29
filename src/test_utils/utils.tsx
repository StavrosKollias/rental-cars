//EXPORTS
import React from 'react'
export default '@testing-library/user-event'
export { render, act, waitFor, fireEvent } from '@testing-library/react'

// IMPORTS
import { render, act } from '@testing-library/react'
import { SearchContext } from '../contexts/SearchContext'

let SearchContextMock

export const renderComponent = (component: any) => {
  return render(<SearchContext.Provider value={SearchContextMock}>{component}</SearchContext.Provider>)
}

export const setSearchContext = (SearchContext) => {
  SearchContextMock = { ...SearchContextMock, ...SearchContext }
}
