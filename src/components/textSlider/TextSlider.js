import React, { useState, useEffect, useCallback } from 'react';

function TextSlider(props) {
    const [index, setIndex] = useState(0);

    const updateIndex = useCallback(() => {
        setIndex((currentIndex) => (currentIndex + 1) % props.textList.length);
    }, [props.textList.length]);

    useEffect(() => {
        const intervalId = setInterval(updateIndex, props.interval || 1500);
        return () => clearInterval(intervalId);
    }, [updateIndex, props.interval]);

    return (
        <div className="textSlider" aria-live="polite">
            Hello!<br />
            This is Alan Chu.
            <br />
            <strong>{props.textList[index]}</strong>
        </div>
    );
}

export default TextSlider;
