import { useSpaceApiContext } from '../contexts/spaceapi-state'

const NavState = () => {
    const spaceApi = useSpaceApiContext()

    var classNamees = "label doorstatelabel badge "
    var stateText = "Loading"

    if (spaceApi === undefined || spaceApi.state === undefined) {
        classNamees += "bg-warning"
        stateText = "Defekt"
    } else if (spaceApi.state.open) {
        classNamees += "bg-success"
        stateText = "Offen"
    } else {
        classNamees += "bg-danger"
        stateText = "Geschlossen"
    }

    return (
        <span id="doorstate" className={classNamees}>
            <a className="nav-link" href="#state" id="doorstateString">{stateText}</a>
        </span>
    );
}

export default NavState