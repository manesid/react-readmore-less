# react-readmore-less

Add highly customisable read more/less wrapper to your long text.

## Features

- built for `React` with zero dependencies
- option for `Read More` and `Read Less` text
- customizable ellipsis text
- customizable CSS classes for wrapper

## Install

```bash
npm install react-readmore-less
```

or

```bash
yarn add react-readmore-less
```

## Usage

```tsx
import ReadMoreLess from 'react-readmore-less';
import './App.css';

function App() {
  const longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (
    <div className="App">
      <header className="App-header">
        <ReadMoreLess
          text={longText}
          cutSize={70}
          wrapperClass={'wrapper'}
          readLesstext="less"
          readMoretext="more"
        />
      </header>
    </div>
  );
}

export default App;
```

## Props

`text` - `required` Your long text.

`cutSize` - `default:100` Max characters to show

`wrapperClass` - Adds a class to wrapper which is a `div` element.

`readMoretext` - `default: Read More` Read More text value

`readLesstext` - `default: Read Less` Read Less text value

`ellipsis` - `default: ...` Text content for the ellipsis
