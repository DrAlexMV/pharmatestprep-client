import * as React from 'react';


interface FlashCardProps {
    front: string;
    back: string;
}


export const FlashCard:
    React.StatelessComponent<FlashCardProps> = ({front, back}) => (
        <div></div>
    );