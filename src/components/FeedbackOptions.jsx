


//         return <>
//             <button  onClick={this.handleFeedback('good')}>Good</button>
//             <button onClick={this.handleFeedback('neutral')}>Neutral</button>
//             <button  onClick={this.handleFeedback('bad')}>Bad</button>
//             <div>
//                 <p>Good: {this.state.good}</p>
//                 <p>Neutral: {this.state.neutral}</p>
//                 <p>Bad: {this.state.bad}</p>
//                 <p>Total: {total}</p>
//                 <p>Positive Feedback: {Math.round(positivePercentage)}%</p>
//             </div>

//         </>
//     }




export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option) => (
            <button key={option} onClick={() => onLeaveFeedback(option)}>
                {option}
            </button>
        ))}
    </div>
);



