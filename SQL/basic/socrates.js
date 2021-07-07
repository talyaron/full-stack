const socrates = {
    type: {
        is: Human,
        probability: 1,
        corroboration: 0
    }
    

}

const Human = {
    mortal: {
        is: true,
        probability: 1,
        corroboration: 1
    },
    walk: (settings) => {
        return {
            outcome1: {
                outocme:some_outcome,
                probability: 1,
                corroboration: 1
            },
            outcome2: {
                outocme:some_outcome,
                probability: .32,
                corroboration: 0.6,
            }
        }

    }
}

const swan = {
    type: {
        is: Swans,
        probability: 1,
        corroboration: 1
    }
}

const Swans = {
    color: {
        white: {
            probability: 0.999,
            corroboration: 1
        },
        black: {
            probability: 0.001,
            corroboration: .5
        }
    }
}