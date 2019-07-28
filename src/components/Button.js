import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import AnimatedFAB from 'material-ui-animated-fab'
import ContentAdd from 'material-ui/svg-icons/content/add'

// export class Button extends Component {
//     render() {
//         return (
//             <div>
//                 <p> button </p>
//             </div>
//         )
//     }
// }
let fab = ''
if (smth) {
    fab = (
        <AnimatedFAB
            key={1}
            style={style}
            onClick={handleFabClicked}
            onDidLeave={handleDidLeave}
        >
            <ContentAdd />
        </AnimatedFAB>
    )
} else if (smth2) {
    fab = (
        <AnimatedFAB
            key={2}
            style={style2}
            onClick={handleFabClicked}
            onDidLeave={handleDidLeave}
        >
            <ContentAdd />
        </AnimatedFAB>
    )
}

<ReactTransitionGroup>
    {fab}
</ReactTransitionGroup>