import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Homepage - Client Boilerplate/g })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
