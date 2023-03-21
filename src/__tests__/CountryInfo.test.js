import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountryInfo from '../components/CountryInfo';

describe('Details', () => {
  it('should render the component', () => {
    const detail = renderer
      .create(
        <Provider store={store}>
          <CountryInfo />
        </Provider>,
      )
      .toJSON();
    expect(detail).toMatchSnapshot();
  });
});
