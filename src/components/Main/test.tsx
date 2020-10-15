import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/g })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
