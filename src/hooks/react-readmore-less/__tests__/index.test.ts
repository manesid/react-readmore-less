import { renderHook } from '@testing-library/react-hooks';
import ReadMoreLess from '../index';

//   const differentTheme = {
//     variableOne: 'blue',
//     variableThree: 'hotpink',
//   };

test('ReadMoreLess', () => {
  const { result } = renderHook(() => ReadMoreLess({ text: 'demo', cutSize: 2 }));

  expect(result.current).toBe('demo');
});

// describe('Button component', () => {
//   test('Matches the snapshot', () => {
//     const button = create(<ReadMoreLess />);
//     expect(button.toJSON()).toMatchSnapshot();
//   });
// });
