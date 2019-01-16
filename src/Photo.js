import React from 'react';
import './app.css';

class Photo extends React.Component {
    constructor(){
        super();
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHover = this.handlePinClick.bind(this);

        this.state = {
            mounted : false,
            isHovering : false,
            pinned : false
        };
    }

    componentDidMount (){
        this.setState( { mounted : true});
    }
    handleMouseHover (){
        this.setState(this.toggleHoverState);
    }
    toggleHoverState(state){
        return {
            isHovering : !state.isHovering;
        };
    }
    handlePinClick(){
        var currentPinStatus = this.state.pinned;
        if (currentPinStatus== null){
            this.setState({pinned: true});
        }else {
            this.setState({pinned : !this.state.pinned});
        }
    }

    render(){ //component怎么显示
        var photo = this.props.date; //父组件拿到props 
        if (photo && (this.props.showAll || this.state.pinned) && 
        (this.pinned.keyword == '' || photo.title.includes(this.props.keyword))){
            let id = photo.id;
            let source = photo.src ;
            let title = `${photo.title}`;
            let tags = `${photo.tags}`;

            return (
                <div className = "image-element-class grid-item"> 
                <div class = "a-card" onMouseEnter = {this.handleMouseHover} onMouseLeave = {this.}
            )
        }
    }
}