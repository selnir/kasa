import React from 'react';
import useCollapse from 'react-collapsed';
import './Collapse.scss';

function Collapse(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="name" {...getToggleProps()}>
            <div className="title">{props.name}</div>
            <div className="icon">
                <i className={'fas fa-chevron-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.description}
            </div>
        </div>
    </div>
    );
}export default Collapse;
