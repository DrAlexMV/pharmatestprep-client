import * as React from 'react';
import {
    connect,
    MapStateToProps,
    MapDispatchToPropsFunction
} from 'react-redux';
import { FlashCardBack } from './flash_card_back';
import { FlashCardFront } from './flash_card_front';
import { PTPState } from '../../store';
import { showCardBack, nextCard } from '../reducers/flash_cards';


interface FlashCardProps {
    front?: string;
    back?: string;
    showingBack?: boolean;
    nextWordHandler?: () => any;
    seeMeaningHandler?: () => any;
}


export class FlashCard extends React.Component<FlashCardProps, {}> {
    render(): JSX.Element {
        const front = (
            <FlashCardFront front={this.props.front}
                seeMeaningHandler={this.props.seeMeaningHandler}
                nextWordHandler={this.props.nextWordHandler}>
            </FlashCardFront>
        );
        const back = (
            <FlashCardBack back={this.props.back}></FlashCardBack>
        );
        return (
            <div>{this.props.showingBack ? back : front}</div>
        );
    }
}


const mapStateToProps: MapStateToProps<any, FlashCardProps> =
    (state: PTPState) => ({
        showingBack: state.flashCards.showingBack
    });


const mapDispatchToProps: MapDispatchToPropsFunction<any, FlashCardProps> =
    (dispatch: any) => ({
        nextWordHandler: () => dispatch(nextCard()),
        seeMeaningHandler: () => dispatch(showCardBack())
    });


export const QuizFlashCard = connect(
    mapStateToProps,
    mapDispatchToProps)(FlashCard);