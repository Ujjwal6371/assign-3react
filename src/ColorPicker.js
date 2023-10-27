import React, { Component } from 'react';
import './App.css'; // Import your CSS file for styling

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showColorList: false,
            selectedColor: null,
        };
    }

    toggleColorList = () => {
        this.setState((prevState) => ({
            showColorList: !prevState.showColorList,
        }));
    };

    selectColor = (color) => {
        this.setState({
            selectedColor: color,
            showColorList: false,
        });
    };

    render() {
        const { colors } = this.props;
        const { showColorList, selectedColor } = this.state;

        return (
            <div className="color-picker">
                <button onClick={this.toggleColorList}>Pick a color</button>
                {showColorList && (
                    <div className="color-list">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="color-item"
                                style={{
                                    backgroundColor: color,
                                }}
                                onClick={() => this.selectColor(color)}
                            ></div>
                        ))}
                    </div>
                )}
                {selectedColor && (
                    <div className="selected-color" style={{ backgroundColor: selectedColor }}>
                        Selected Color: {selectedColor}
                    </div>
                )}
            </div>
        );
    }
}

export default ColorPicker;
