import React from 'react';
export class Icon extends React.Component {
    getShape(shape){
        let content;
        switch (shape) {
            case "checkmark":
                content = <path d = "M2 20 L12 28 30 4" / >
                break;
            case "clock":
                content = <>
                            <circle cx="16" cy="16" r="14" />
                            <path d="M16 8 L16 16 20 20" />
                        </>
                break;
            case "close":
                content = <path d="M2 30 L30 2 M30 30 L2 2" />
                break;
            case "edit":
                content = <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
                break;
            case "plus":
                content = <path d="M16 2 L16 30 M2 16 L30 16" />
                break;
            default:
                content = <path d="M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25" />
        }
        return content;
    }

    render(){
        let id = "i-" + this.props.shape
        return(
            <svg id = {id}
                xmlns = "http://www.w3.org/2000/svg"
                viewBox = "0 0 32 32"
                width = "16"
                height = "16"
                fill = "none"
                stroke = "currentcolor"
                strokeLinecap = "round"
                strokeLinejoin = "round"
                strokeWidth = "3" >
                    {this.getShape(this.props.shape)}
                </svg>
        );
    }
}
