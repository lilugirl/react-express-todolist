import React from 'react'
import {ThemeContext} from './context'

const connect = (Component) => class WrappedComponent extends React.Component {
    render (){
        return (
            <ThemeContext.Consumer>
                {context=>(<Component {...context.store} />)}
            </ThemeContext.Consumer>
        )
    }
}
export default connect