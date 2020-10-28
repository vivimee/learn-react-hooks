import React, { useContext, useState } from 'react';

const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
};

const ThemeContext = React.createContext(themes.light);

function ExampleUseContext() {
  const [theme, setTheme] = useState(themes.dark);

  const onChangeThemeClick = () => {
    setTheme((cur) => {
      return cur === themes.dark ? themes.light : themes.dark;
    });
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={onChangeThemeClick}>Change theme</button>
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am style by theme context!
    </button>
  )
}

export default ExampleUseContext;
