import React, { useState, useEffect, useContext } from 'react';
import './App.css';


// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

function App() {

    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );

}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
    return (
        <div>

            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    // let contextType = ThemeContext;
    const theme = useContext(ThemeContext);

    return <Button theme={theme} />;

}

class Button extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".

    render() {
        return <div class={this.props.theme}>{this.props.theme}</div>;
    }
}

export default App;