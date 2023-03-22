import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountryInfo from '../components/CountryInfo';

describe('CountryInfo', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <CountryInfo />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
