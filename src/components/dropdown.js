"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export default function Dropdown(props) {
    const [opened, setOpened] = useState(false);
    const dropdownRef = useRef(null);

    const toggle = useCallback(() => setOpened(!opened), [opened, setOpened]);

    const handleClickOutside = useCallback((event) => {
        if (opened && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpened(false);
          event.preventDefault();
        }
    }, [opened]);
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const onSelect = (val) => {
        if (props.onSelect) {
            props.onSelect(val);
        }
        setOpened(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className={"flex items-center gap-4 px-2 py-1 border-2 rounded-lg focus:outline-none " + props.containerClass}
                onClick={toggle}>
                {props.renderItem(props.value)}
                <i className={"fa-solid fa-caret-down " + props.iconClass}></i>
            </button>
            {opened && (
                <div className={"absolute left-0 right-0 mt-2  shadow-lg z-10 rounded-lg overflow-hidden " + props.dropdownClass}>
                {props.values.map((val) => (
                    <button key={val} className={"flex items-center w-full px-2 py-1 " + props.dropdownItemClass} onClick={() => onSelect(val)}>
                        {props.renderItem(val)}
                    </button>
                ))}
                </div>
            )}
        </div>
    )
}