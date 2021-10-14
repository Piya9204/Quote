//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Alan Kay', 
     'quote': 'The best way to predict the future is to invent it.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': ' Joel Randymar', 
     'quote': '“Life is not about having everything. It’s about finding meaning in everything.”'
    },
    {'author': 'Ritu Ghatourey', 
     'quote': 'Beauty is hidden in everything, just learn how to observe'
    },
    {'author': 'Anonymous', 
     'quote': 'Challenge yourself with something you know you could never do, and what you’ll find is that you can overcome anything.'
    },
    {'author': 'joan crawfoard', 
     'quote': 'I have always known what I wanted, and that was beauty… in every form'
    },
     {'author': 'George Eliot', 
     'quote': 'It is never too late to be what you might have been.'
    },
     {'author': 'walt Disney', 
     'quote': 'All our dreams can come true if we have the courage to pursue them.'
    },
    //  {'author': '', 
    //  'quote': ''
    // },
    //  {'author': '', 
    //  'quote': ''
    // },
    //  {'author': '', 
    //  'quote': ''
    // },
    //  {'author': '', 
    //  'quote': ''
    // },
    //  {'author': '', 
    //  'quote': ''
    // },
    //  {'author': '', 
    //  'quote': ''
    // },
    //  {'author': '', 
    //  'quote': ''
    // },
    //  {'author': '', 
    //  'quote': ''
    // },


    
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}


