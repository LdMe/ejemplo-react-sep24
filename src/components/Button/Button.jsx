
import './Button.css';

function Button({ funcionClick, children }) {
    return (
        <button
            onClick={funcionClick}
            className="button"
        >
            {children}
        </button>
    );
}

export default Button;