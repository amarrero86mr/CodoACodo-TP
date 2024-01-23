new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 50,
    breakpoints: {
        768: {
            perView: 2
        },
        425: {
            perView: 1
        }
    },
    
}).mount();