import piano from "../assets/image/piano.jpg";
import guitar from "../assets/image/guitar.jpg";
import bass from "../assets/image/bass.jpeg";
import repair from "../assets/image/musicrepair.jpg";
import drums from "../assets/image/drums.jpg";

export const products = [
    {
        id: 1,
        name: 'Pianos',
        price: 10000,
        description: "We sell different kinds of pianos, ranging from grand pianos to digital pianos even until portable pianos that you can easily bring to your gigs.",
        description2: "As one of the most trusted piano sellers, we guarantee all of our pianos, whatever brand it is, are of high quality without any defects.",
        description3: "Some of the brands that we are selling: Steinway & Sons, Fazioli, Yamaha, Kawai, Roland, Nord, Baldwin",
        img: piano,
    },
    {
        id: 2,
        name: 'Guitars',
        price: 20000,
        description: 'We sell both electric guitars and acoustic guitars that satisfy your needs. We also sell smaller size guitars if you feel regular guitar are too hard to play...',
        description2: "Guitars are one of the cheaper instruments compared to other instruments such as pianos and basses due to its more compact size. We have lots of units ready to be sold every day for our customers. Feel free to test the guitars in our shop and make sure you go back home with the most suitable guitar for you.",
        description3: "Some of the brands that we are selling: Fender, Ibanez, PRS, Gibson, Parker, Musicman, and many more...",
        img: guitar,
    },
    {
        id: 3,
        name: 'Bass Guitars',
        price: 30000,
        description: 'For you low-end lovers, we sell various bass guitars to accompany your band. Be it 4-string, 5-string, or even 6-string bass guitars, we have them all!',
        description2: "Just beware though, this is a heavy-weight instrument. Make sure your shoulder is strong enough to bear the weight of these bass guitars...",
        description3: "Some of the brands that we are selling: Fender, Ibanez, Musicman, Warwick",
        img: bass,
    },
    {
        id: 4,
        name: 'Drums',
        price: 40000,
        description: "Playing in a band does not feel complete without the drums, isn't it?",
        description2: "We sell various drum kits according to your needs, from the smaller kits for kids to the more expensive and larger kits for professional drummers. You can also buy the drum parts such as snare drums, bass kick, toms, and cymbals separately. Don't forget, we also have electric drum kits that you can bring everywhere you want to gig!",
        description3: "Some of the brands that we are selling: DW Drums, SONOR, Yamaha",
        img: drums,
    },
    {
        id: 5,
        name: 'Instrument Repair',
        price: 50000,
        description: "Your music instrument is broken? MUSIC SHOP does not only sell, but we can also fix things!",
        description2: "Just come to us, tell us what's the problem, let our expert take care of things for you, and enjoy your newly fixed instrument!",
        description3: "",
        img: repair,
    },
]