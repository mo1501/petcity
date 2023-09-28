import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import './error-display.styles.css'

function ErrorDisplay({ errorMessage, clearError }) {
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                clearError();  // Clear the error after 5 seconds
            }, 5000);

            return () => clearTimeout(timer);  // Clear the timeout if the component is unmounted before the timer expires
        }
    }, [errorMessage, clearError]);
    if (!errorMessage) return null;

    return (
        <div className="error">
            <FontAwesomeIcon icon={faExclamation} />{errorMessage}!
        </div>
    );
}

export default ErrorDisplay;
