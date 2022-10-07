import { TextStyle, Text } from 'pixi.js';

const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 48,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});
const basicText = new Text('Mardi8', style);
basicText.x = 50;
basicText.y = 100;

export default basicText;
