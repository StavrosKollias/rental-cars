import React from 'react'
import { useSearchContext } from '../../contexts/SearchContext'
import { Header } from '../Header'
import { Banner } from '../Banner'
import { SearchBar } from '../SearchBar'
import { ListOfBenefits } from '../ListOfBenefits'
import { InputCheckBox } from '../Shared/InputCheckBox'
import { Label } from '../Shared/Label'
import { Labels } from '../../constants/Labels'

export const Body: React.FC = () => {
  const { locationsList, content, setDropOffLocationFlag, dropOffLocationFlag } = useSearchContext()

  return (
    <div className="body" data-testid="body">
      <Header />
      <Banner>
        <div className="container" data-role="main">
          <h1 data-testid="main-title">{content.pageContnet.title}</h1>
          <ListOfBenefits content={content.pageContnet.benefits} />
          <SearchBar />

          <div className="txt-white">
            <InputCheckBox
              value={'false'}
              label={Labels.checkboxDifferentDropoffLocation.label}
              {...Labels.checkboxDifferentDropoffLocation.input}
              checked={dropOffLocationFlag}
              onChange={(event) => setDropOffLocationFlag(!dropOffLocationFlag)}
            />
          </div>
        </div>
      </Banner>
    </div>
  )
}
