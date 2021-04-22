import ReactDOM from 'react-dom';

// local files
import EventComponent from './events/EventComponent'

const App = () => {
    return <div>
        <EventComponent />
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)