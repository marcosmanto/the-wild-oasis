import { colors, shadows, borderRadius } from '@/styles/constants'
import { useSearchParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useEffect } from 'react'

const StyledFilter = styled.div`
  border: 1px solid ${colors['grey-100']};
  background-color: ${colors['grey-0']};
  box-shadow: ${shadows.sm};
  border-radius: ${borderRadius.sm};
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`

const FilterButton = styled.button`
  background-color: ${colors['grey-0']};
  border: none;

  ${props =>
    props.$active &&
    css`
      background-color: ${colors['brand-600']};
      color: ${colors['brand-50']};
    `}

  border-radius: ${borderRadius.sm};
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: ${colors['brand-600']};
    color: ${colors['brand-50']};
  }
`

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Validate only one default value
  useEffect(() => {
    const defaultOptions = options.filter(option => option.defaultValue)
    if (defaultOptions.length > 1) {
      console.warn('Filter component should only have one default option. Using first default option found.')
    }
  }, [options])

  function handleClick(value) {
    searchParams.set(filterField, value)
    setSearchParams(searchParams)
  }

  function isActive(value) {
    const currentFilter = searchParams.get(filterField)

    // If no filter is set, first try to use the default option
    if (!currentFilter) {
      const defaultOption = options.find(option => option.defaultValue)
      return defaultOption ? value === defaultOption.value : value === options[0].value
    }

    return currentFilter === value
  }

  return (
    <StyledFilter>
      {options.map(function (option) {
        const active = isActive(option.value)
        return (
          <FilterButton disabled={active} key={option.value} onClick={() => handleClick(option.value)} $active={active}>
            {option.label}
          </FilterButton>
        )
      })}
    </StyledFilter>
  )
}

export default Filter
