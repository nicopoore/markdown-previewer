import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';
import Header from './Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const UPDATE = 'UPDATE';
const defaultState = {
  input: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://dummyimage.com/100x80/6153CA/fff.jpg&text=image)
`
}

function rootReducer(state = defaultState, action) {
  switch(action.type) {
    case UPDATE:
      return {
        input: action.input,
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Editor />
      <Previewer />
    </Provider>
  );
}

export default App;
