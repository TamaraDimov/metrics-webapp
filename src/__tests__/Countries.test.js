import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Countries from '../components/Countries';

describe('Countries', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
