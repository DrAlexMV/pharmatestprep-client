import * as React from 'react';


interface FlashCardBackProps {
    front?: string;
    back?: string;
    nextWordHandler?: () => any;
}


const cssClasses = {
    coloredButton: `mdl-button mdl-button--colored mdl-js-button 
        mdl-js-ripple-effect`
};


export const FlashCardBack: React.StatelessComponent<FlashCardBackProps> =
    ({front, nextWordHandler}) => (
        <div>
            <div className='mdl-card mdl-shadow--4dp'>
                <div className='mdl-card__title mdl-card--expand'>
                    <h4 className='mdl-card__title-text'>{front}</h4>
                </div>
                <div className='mdl-card__supporting-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </div>
                <div className='mdl-card__menu'>
                    <button onClick={nextWordHandler} 
                    className={cssClasses.coloredButton}>
                        Next word
                    </button>
                </div>
            </div>
        </div>
    );