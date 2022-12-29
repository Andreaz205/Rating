import React, {FC, useEffect, useRef} from 'react';

const Area:FC<{width?: number, setActiveId: (id: number) => void, elementId: number}> = ({width, setActiveId, elementId}) => {

    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current) {
            ref.current.style.cssText = `width: ${width}%; height: 100%; border: 1px; display: inline-block; white-space: nowrap;`
            ref.current.addEventListener('mouseover', mouseOverCallback)
        }
    }, [ref, width])

    const mouseOverCallback = () => {
        setActiveId(elementId)
    }

    return (
        <div ref={ref}></div>
    );
};

export default Area;