import React from 'react';
import useCollapse from 'react-collapsed';
import './Collapse.scss';

function Collapse(props) {
    const { getCollapseProps, getToggleProps } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <div>{props.name}</div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.description}
            </div>
        </div>
    </div>
    );
}export default Collapse;
