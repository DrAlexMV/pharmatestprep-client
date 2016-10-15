import * as React from 'react';
import { QuizFlashCard } from './flash_card';


interface FlashCardPracticeProps {
    card: any;
}


export const FlashCardPractice:
    React.StatelessComponent<FlashCardPracticeProps> = ({card}) => (
        <div>
            <QuizFlashCard front='Aspirin'></QuizFlashCard>
        </div>
    );