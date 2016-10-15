import * as React from 'react';


interface FlashCardFrontProps {
    front?: string;
    nextWordHandler?: () => any;
    seeMeaningHandler?: () => any;
}


const cssClasses = {
    coloredButton: `mdl-button mdl-button--colored mdl-js-button 
        mdl-js-ripple-effect`
};


export const FlashCardFront: React.StatelessComponent<FlashCardFrontProps> =
    ({front, nextWordHandler, seeMeaningHandler}) => (
        <div>
            <div className='mdl-card mdl-shadow--4dp'>
                <div className='mdl-card__title mdl-card--expand'>
                    <h4 className='mdl-card__title-text'>
                        {front}
                    </h4>
                </div>
                <div className='mdl-card__actions mdl-card--border'>
                    <a onClick={seeMeaningHandler}
                        className={cssClasses.coloredButton}>
                        Click to see meaning
                    </a>
                    <div className='mdl-layout-spacer'></div>
                    <i className='material-icons'>navigate_next</i>
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