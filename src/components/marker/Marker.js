import React from "react";

export default class Marker extends React.Component{
    render() {

        const colorTheme = this.props.theme;

        const index = this.props.word.indexOf(this.props.pattern);
        if(index === -1){
            return this.props.word;
        }

        const leftPart = this.props.word.substr(0,index);
        const middlePart = this.props.word.substr(index, this.props.pattern.length);
        const rightPart = this.props.word.substr(index + this.props.pattern.length);

        return <label>{leftPart}<label className={colorTheme.marker}>{middlePart}</label>{rightPart}</label>
    }
}
