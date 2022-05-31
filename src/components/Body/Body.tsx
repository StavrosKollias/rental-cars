import React from 'react'
import { useSearchContext } from '../../contexts/SearchContext'
import { Header } from '../Header'
import { Banner } from '../Banner'
import { SearchBar } from '../SearchBar'
import { ListOfBenefits } from '../ListOfBenefits'

export const Body: React.FC = () => {
  const { locationsList, content, setDropOffLocationFlag } = useSearchContext()

  return (
    <div className="body" data-testid="body">
      <Header />
      <Banner>
        <div className="container" data-role="main">
          <h1 data-testid="main-title">{content.pageContnet.title}</h1>
          <ListOfBenefits content={content.pageContnet.benefits} />
          <SearchBar />

          <div>
            <input type="checkbox" onChange={(event) => setDropOffLocationFlag(event.target.checked)} />
          </div>
        </div>
      </Banner>
    </div>
  )
}
