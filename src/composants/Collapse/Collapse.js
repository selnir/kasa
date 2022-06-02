import React from 'react';
import useCollapse from 'react-collapsed';
import './Collapse.css';
function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <h3>titre</h3>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
    );
}
function Collapse() {
    return (
    <Collapsible/>
    );
}
export default Collapse;