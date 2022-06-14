const data = {
    coinTemplates : [
        '{oneWordWonder}', 
        '{jargonPrefix}{jargonSuffix}', 
        '{brandPrefix}{brandSuffix}', 
        '{jargonPrefix}{brandSuffix}', 
        '{brandPrefix}{jargonSuffix}', 
        '{jargonPrefix}{brandPrefix}{jargonSuffix}', 
        '{jargonPrefix}{brandPrefix}{brandSuffix}', 
        '{oneWordWonder}{brandSuffix}', 
        '{jargonSuffix}{jargonPrefix}', 
        '{brandSuffix}{brandPrefix}', 
        '{brandSuffix}{jargonPrefix}', 
        '{jargonSuffix}{brandPrefix}', 
    ],
    words : {
        brandPrefix : [ 'Doge', 'Shit', 'Shibu', 'Moon', 'Ding', 'Ape', 'Hodl', 'Shiba', 'Elon', 'Floki', 'Pancake', 'Pump' ],
        jargonPrefix : [ 'True', 'Safe', 'Wrapped', 'FTX', 'USD', 'Bit', 'Light', 'Diet', 'Pyramid', 'Charity', 'Alt', 'NFT' ],
        brandSuffix : [ 'Moon', 'Uni', 'Classic', 'Dong', 'Inu', 'Infinity', 'Gate', 'Mars', 'Bunny', 'Dump', 'Scheme', 'Rocket' ],
        jargonSuffix : [ 'Pay', 'Coin', 'Token', 'Tether', 'Link', 'Protocol', 'Cash', 'Swap', 'Chain', 'Finance', 'Network', 'Dollar' ],
        oneWordWonder : ['Soldano', 'Imperium', 'Truckano', 'Solero', 'Plaid', 'Octogon', 'Mudslide', 'Sonar', 'Clockwork', 'Coineroo', 'Fluid', 'Hydrogen' ]
    },
    pitchTemplates : [
        '{hotTake}{hotTake}{hotTake}', 
        '{hotTake}{hotTake}{selfHelp}', 
        '{hotTake}{selfHelp}{hotTake}', 
        '{hotTake}{hotTake}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hotTake}', 
        '{hotTake}{selfHelp}{hypeTrain}', 
        '{hotTake}{hypeTrain}{selfHelp}', 
        '{hotTake}{selfHelp}{selfHelp}', 
        '{hotTake}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hotTake}', 
        '{hypeTrain}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{selfHelp}', 
        '{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hotTake}{selfHelp}', 
        '{hypeTrain}{selfHelp}{hotTake}', 
        '{hypeTrain}{hotTake}{hotTake}', 
        '{hypeTrain}{selfHelp}{selfHelp}', 
        '{selfHelp}{selfHelp}{selfHelp}', 
        '{selfHelp}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{selfHelp}', 
        '{selfHelp}{selfHelp}{hotTake}', 
        '{selfHelp}{hotTake}{selfHelp}', 
        '{selfHelp}{hypeTrain}{hotTake}', 
        '{selfHelp}{hotTake}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hotTake}{hotTake}', 
        '{hotTake}{hotTake}{hotTake}{hotTake}', 
        '{hotTake}{hotTake}{selfHelp}{hotTake}', 
        '{hotTake}{selfHelp}{hotTake}{hotTake}', 
        '{hotTake}{hotTake}{hypeTrain}{hotTake}', 
        '{hotTake}{hypeTrain}{hotTake}{hotTake}', 
        '{hotTake}{selfHelp}{hypeTrain}{hotTake}', 
        '{hotTake}{hypeTrain}{selfHelp}{hotTake}', 
        '{hotTake}{selfHelp}{selfHelp}{hotTake}', 
        '{hotTake}{hypeTrain}{hypeTrain}{hotTake}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}{hotTake}', 
        '{hypeTrain}{hypeTrain}{hotTake}{hotTake}', 
        '{hypeTrain}{hotTake}{hypeTrain}{hotTake}', 
        '{hypeTrain}{hypeTrain}{selfHelp}{hotTake}', 
        '{hypeTrain}{selfHelp}{hypeTrain}{hotTake}', 
        '{hypeTrain}{hotTake}{selfHelp}{hotTake}', 
        '{hypeTrain}{selfHelp}{hotTake}{hotTake}', 
        '{hypeTrain}{hotTake}{hotTake}{hotTake}', 
        '{hypeTrain}{selfHelp}{selfHelp}{hotTake}', 
        '{selfHelp}{selfHelp}{selfHelp}{hotTake}', 
        '{selfHelp}{selfHelp}{hypeTrain}{hotTake}', 
        '{selfHelp}{hypeTrain}{selfHelp}{hotTake}', 
        '{selfHelp}{selfHelp}{hotTake}{hotTake}', 
        '{selfHelp}{hotTake}{selfHelp}{hotTake}', 
        '{selfHelp}{hypeTrain}{hotTake}{hotTake}', 
        '{selfHelp}{hotTake}{hypeTrain}{hotTake}', 
        '{selfHelp}{hypeTrain}{hypeTrain}{hotTake}', 
        '{selfHelp}{hotTake}{hotTake}{hotTake}', 
        '{hotTake}{hotTake}{hotTake}{hypeTrain}', 
        '{hotTake}{hotTake}{selfHelp}{hypeTrain}', 
        '{hotTake}{selfHelp}{hotTake}{hypeTrain}', 
        '{hotTake}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hotTake}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hotTake}{selfHelp}{selfHelp}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hotTake}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hotTake}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{selfHelp}{hypeTrain}', 
        '{selfHelp}{selfHelp}{selfHelp}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hotTake}{hypeTrain}', 
        '{selfHelp}{hotTake}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hotTake}{hypeTrain}', 
        '{selfHelp}{hotTake}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hotTake}{hotTake}{hypeTrain}', 
        '{hotTake}{hotTake}{hotTake}{selfHelp}', 
        '{hotTake}{hotTake}{selfHelp}{selfHelp}', 
        '{hotTake}{selfHelp}{hotTake}{selfHelp}', 
        '{hotTake}{hotTake}{hypeTrain}{selfHelp}', 
        '{hotTake}{hypeTrain}{hotTake}{selfHelp}', 
        '{hotTake}{selfHelp}{hypeTrain}{selfHelp}', 
        '{hotTake}{hypeTrain}{selfHelp}{selfHelp}', 
        '{hotTake}{selfHelp}{selfHelp}{selfHelp}',
        '{hotTake}{hypeTrain}{hypeTrain}{selfHelp}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}{selfHelp}', 
        '{hypeTrain}{hypeTrain}{hotTake}{selfHelp}', 
        '{hypeTrain}{hotTake}{hypeTrain}{selfHelp}', 
        '{hypeTrain}{hypeTrain}{selfHelp}{selfHelp}', 
        '{hypeTrain}{selfHelp}{hypeTrain}{selfHelp}', 
        '{hypeTrain}{hotTake}{selfHelp}{selfHelp}', 
        '{hypeTrain}{selfHelp}{hotTake}{selfHelp}', 
        '{hypeTrain}{hotTake}{hotTake}{selfHelp}', 
        '{hypeTrain}{selfHelp}{selfHelp}{selfHelp}', 
        '{selfHelp}{selfHelp}{selfHelp}{selfHelp}', 
        '{selfHelp}{selfHelp}{hypeTrain}{selfHelp}', 
        '{selfHelp}{hypeTrain}{selfHelp}{selfHelp}', 
        '{selfHelp}{selfHelp}{hotTake}{selfHelp}', 
        '{selfHelp}{hotTake}{selfHelp}{selfHelp}', 
        '{selfHelp}{hypeTrain}{hotTake}{selfHelp}', 
        '{selfHelp}{hotTake}{hypeTrain}{selfHelp}', 
        '{selfHelp}{hypeTrain}{hypeTrain}{selfHelp}', 
        '{selfHelp}{hotTake}{hotTake}{selfHelp}', 
        '{hotTake}{hotTake}{hotTake}{hotTake}{hypeTrain}', 
        '{hotTake}{hotTake}{selfHelp}{hotTake}{hypeTrain}', 
        '{hotTake}{selfHelp}{hotTake}{hotTake}{hypeTrain}', 
        '{hotTake}{hotTake}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hotTake}{hotTake}{hypeTrain}', 
        '{hotTake}{selfHelp}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hotTake}{hypeTrain}{selfHelp}{hotTake}{hypeTrain}', 
        '{hotTake}{selfHelp}{selfHelp}{hotTake}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hotTake}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{selfHelp}{hotTake}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hypeTrain}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hotTake}{selfHelp}{hotTake}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hotTake}{hotTake}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hotTake}{hotTake}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{selfHelp}{hotTake}{hypeTrain}', 
        '{selfHelp}{selfHelp}{selfHelp}{hotTake}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hypeTrain}{hotTake}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{selfHelp}{hotTake}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hotTake}{hotTake}{hypeTrain}', 
        '{selfHelp}{hotTake}{selfHelp}{hotTake}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hotTake}{hotTake}{hypeTrain}', 
        '{selfHelp}{hotTake}{hypeTrain}{hotTake}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hypeTrain}{hotTake}{hypeTrain}', 
        '{selfHelp}{hotTake}{hotTake}{hotTake}{hypeTrain}', 
        '{hotTake}{hotTake}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hotTake}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{hotTake}{selfHelp}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hotTake}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hotTake}{selfHelp}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hypeTrain}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{hotTake}{selfHelp}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hotTake}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{selfHelp}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hotTake}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hotTake}{selfHelp}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hotTake}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hotTake}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}', 
        '{selfHelp}{hotTake}{hotTake}{hypeTrain}{hypeTrain}', 
        '{hotTake}{hotTake}{hotTake}{selfHelp}{hypeTrain}', 
        '{hotTake}{hotTake}{selfHelp}{selfHelp}{hypeTrain}', 
        '{hotTake}{selfHelp}{hotTake}{selfHelp}{hypeTrain}', 
        '{hotTake}{hotTake}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hotTake}{hypeTrain}{hotTake}{selfHelp}{hypeTrain}', 
        '{hotTake}{selfHelp}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hotTake}{hypeTrain}{selfHelp}{selfHelp}{hypeTrain}', 
        '{hotTake}{selfHelp}{selfHelp}{selfHelp}{hypeTrain}',
        '{hotTake}{hypeTrain}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hotTake}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{selfHelp}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hotTake}{selfHelp}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{hotTake}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hotTake}{hotTake}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{selfHelp}{selfHelp}{selfHelp}{hypeTrain}', 
        '{selfHelp}{selfHelp}{selfHelp}{selfHelp}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{selfHelp}{selfHelp}{hypeTrain}', 
        '{selfHelp}{selfHelp}{hotTake}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hotTake}{selfHelp}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hotTake}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hotTake}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hypeTrain}{hypeTrain}{selfHelp}{hypeTrain}', 
        '{selfHelp}{hotTake}{hotTake}{selfHelp}{hypeTrain}', 
        '{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}{hypeTrain}'
    ],
    phrases : {
        selfHelp: [ 
            'trade while they sleep, learn while they party, save while they spend, live like they dream.',
            'if you don\'t go after what you want, you will never have it.',
            'if you don\'t ask, the answer will always be NO!',
            'don\'t call it a dream call it a plan.',
            'if you don\'t find a way to make money while you sleep, you will work till you die.',
            'the only regret you\'ll have is you didn\'t buy more {coin}.',               
            'action takers are {coin} makers.',
            'the rich don\'t work for money, they make money work for them.',
            'the best investment you can make, is an investment in yourself. The more you learn, the more {coin} you\'ll buy.',
            'the biggest risk in life is playing it too safe.',
            'if you want something you\'ve never had you need to do something you\'ve never done before.',
            'be a game changer, the world is already full of followers.',
            'you. Are. Going. to. Die. Do you want to regret all the {coin} you didn\'t buy? Ask yourself this question EVERY DAY.',
            'never depend on a single coin. Make investment to create a second source of income, like with {coin}.',
            'I\'m not investing {coin} for the profits. I\'m investing in {coin} so I can do what I want, when I want.',
            'Step 1: make {coin}, step 2: use the {coin} to make more {coin}, step 3: repeat.',
            'don\'t worry about what the markets are going to do, worry about what you are going to do in response to the markets.',
            'fortune favors the brave.',
            'if you have doubts about the trade, don\'t make it, wait for another opportunity.',
            'trade the market in front of you, not the one you want.',
            'trade what you see, not what you think.',
            'you can\'t have a million {coin} goal with a one {coin} investment.',
            'do you have a savings account? If so, you\'re leaving {coin} on the table.',
            'acquire assets like {coin}, never liabilities.',
            'your house is a liability, unlike {coin}.',
            'not investingin {coin} is risky.',
            'ask yourself how you can afford {coin}.',
            'let {coin} work for you.',
            'don\'t save, invest in {coin}.',
            'The goal of personal growth isn\'t to solve all your problems. It\'s to continuously find new problems to solve.',
            'Personal growth is having problems today you would have begged to have had a few years ago.',
            'Be humble, not arrogant. Never think for one second that you know the future. Remind yourself over and over again that nobody knows the future.',
            'Instead of making a key, then looking for a lock, find something locked, then make its key.',
            'The people you look up to are not that special and are no more talented than you are.',
            'Successful people are neither smarter nor more creative than you. They are simply buying more {coin}.',
            'You can complain about the game or you can learn the rules.',
            'if you do no step forward, you will always be in the same place.',
            'don\'t call it a dream call it a plan.',
        ],
        hotTake: [
            '{coin} will do to banks what email did to the postal industry.',
            '{coin} is a technological tour de force.',
            'The future of money is digital currencies like {coin}.',
            'Every informed person needs to know about {coin} because it might be one of the world\'s most important developments.',
            '{coin} is the most important invention in the history of the world since the Internet.',
            '{coin}, and the ideas behind it, will be a disrupter to the traditional notions of currency. In the end, currency will be better for it.',
            '{coin} is a very exciting development, it might lead to a world currency. I think over the next decade it will grow to become one of the most important ways to pay for things and transfer assets.',
            '{coin} is money 2.0, a huge huge huge deal.',
            '{coin} may hold long-term promise, particularly if the innovations promote a faster, more secure and more efficient payment system.',
            'I am very intrigued by {coin}. It has all the signs. Paradigm shift, hackers love it, yet it\'s derided as a toy. Just like microcomputers.',
            'I really like {coin}. I own {coin}. It\'s a store of value, a distributed ledger. It\'s also a good investment vehicle if you have an appetite for risk.',
            '{coin} is a classic network effect, a positive feedback loop. The more people who use {coin}, the more valuable {coin} is for everyone who uses it, and the higher the incentive for the next user to start using the technology.',
            '{coin} shares a network effect property with the telephone system, the web, and popular Internet services like eBay and Facebook.',
            'Instant transactions, no waiting for checks to clear, no chargebacks, no account freezes, no minimum balance, no maximum balance, worldwide access, always open, no printing press, no hyperinflation, no bank bailouts, completely voluntary. {coin} sounds like the best payment system in the world!',
            '{coin} is a remarkable cryptographic achievement, and the ability to create something that is not duplicable in the digital world has enormous value.',
            'You can\'t stop things like {coin}. It will be everywhere, and the world will have to readjust. World governments will have to readjust.',
            '{coin} is a bold entrepreneurial technology. It\'s driving a revolution.',
            'Ten percent of my net worth is in {coin}.',
            'Blockchain is the tech. {coin} is merely the first mainstream manifestation of its potential.',            
            '{coin} is the most efficient system in the history of mankind for channeling energy through time and space.',
            '{coin} won\'t make you rich today but it might tomorrow.',
            '{coin} is only risky to those who don\'t understand it.',
            '{coin} will bring an economic revolution.',
            'did you know the top 100 companies are investing in {coin}?',
            '{coin} wasn\'t created to make you rich, it was created to make you free.',
            '{coin} is the beginning of something great: a currency without a government, something necessary and imperative.',
            '{coin} at $100000 is easy to imagine.',
            'If you\'re skeptical about the idea of owning digital property, then you\'re not only denying capitalism on the internet .... You\'re saying we\'re not going to have a collectively owned future. We\'re going to have a government-owned future and corporate-owned future."',
            'It\'s not even the first inning. It\'s like the anthem before the game has even started. And I have never seen so many highly intelligent, ambitious, capable people drop whatever they\'re doing, in many cases really attractive things, to dedicate their time to {coin}.', 
            'You can\'t stop it. It\'s ultimately code and code is just speech and speech is just ideas. You can\'t stop ideas. And if you try to stop that, you\'re going to miss out on the greatest wealth creation and innovation since the internet came into being.', 
            'Crypto investing is to venture investing as venture investing is to value investing.',
            'We have elected to put our money and faith in a mathematical framework called {coin} that is free of politics and human error.',
            'Every smart person that I admire in the world, and those I semi-fear, is focused on this concept of crypto for a reason. They understand that this is the driving force of the fourth industrial revolution: steam engine, electricity, then the microchip - blockchain and {coin} is the fourth.',
            'Mobile was Internet 2.0. It changed everything. {coin} is Internet 3.0.',
            'I\'m much more confident with {coin} than with banks or fiat currency because I can actually control it, and the {coin} supply is transparent, stated up front. It makes online shopping a lot easier and a lot safer.',
            'As I was looking around, to me, what was happening in the blockchain and {coin} world was a movement.',
            'Activists need to educate themselves about the power of crypto currencies like {coin}.',
            'In 2017, people have realized there isn\'t going to be one crypto to rule them all. You\'re seeing vertical solutions where XRP is focused on payment problems, Ethereum is focused on smart contracts, and increasingly, {coin} is a store of value. Those aren\'t competitive. In fact, I want {coin} and Ethereum to be successful.',
            'Being able to borrow against one\'s {coin} assets gives one options, when wanting to purchase a property, and aligns with my philosophy that {coin} and tokenization will be a quadrillion dollar market. send tweet!',            
            'I think of an NFT as - it\'s as general a concept as the webpage. But it\'s a core new concept, the idea of owning something on the internet.  When it first comes out, people are like, "Oh it\'s a website" and they try to map it to the offline world.',
            '{coin} is an internet owned by users and builders orchestrated with tokens.',
            'Today the frontier is on the internet and even on the internet, the frontier is within Web3 and {coin} because it\'s sort of the least regulated the most decentralized, most permissionless, 24x7x365 markets that are self-funding hackers from all around the world.',
            'The internet is not bad for creative people. Web2 is bad for creative people.',
            'If Bitcoin can have value, if Ethereum can have value, then in theory, {coin} can have value as long as the smart contracts and the social contracts and the community enforcing it has value.',
            'A complex system that works is invariably found to have evolved from a simple system that worked. So in that sense, {coin} is primitive, and people are going to recombine, and assemble, and compose those primitives to create incredibly complex systems.',
            'It has to go through the same adoption curve that Web2 and Web1 did. And in theory, it could even go faster. Because tokens naturally have an incentive mechanism built-in. The token companies don\'t need to do much marketing. The marketing is done by the users.',
            'So there\'s just this huge opportunity now to make every person, a worker, an investor, a shareholder, an evangelist, an owner, a creator, a designer. We can fold it all into one. And that\'s really what Web3 is enabling with {coin} at the core. ',
            'You can do anything with {coin} that you can do with a webpage, but on top of it, you can have scarcity and ownership and allocation and rights associated with it. This is really big.',
            'NFTs are artifacts of networks. So you have your own community and the thing, and the NFTs you\'re creating (like {coin}) will be artifacts for that community. And they derive value to the extent that they kind of reinforce that community\'s values and norms and language and memes.',
            'This should be a golden period for creative people. There are eight billion people internet-connected. You only need a thousand to make a living. This should be the greatest time in history for creative people. And I think, thanks to {coin} we might have finally figured it out.',
            'An NFT is not really an object, a digital object. It is a pointer, it is a channel, it is a link, communication between you, the creator, and the community, and any kind of value can be funneled down that.',
            'The problem with most people who "follow their passion" is they never learn the core skills to monetize it (marketing, sales, copywriting, etc.) If you think monetizing your passion will make you not passionate about it…  Just wait until you get paid {coin} for doing something you love - you\'ll simply fall more in love with it.',
            'The market rewards not the best product, but the product who best positions themselves as the obvious solution *cough* {coin} *cough*.',
            '{coin} in theory is the monetization of compute by individual users.',
            'With {coin}, we can expand access to careers in human expression while leveraging the emerging technologies in the future.',
        ],
        hypeTrain: [
            'if you can\'t hodl you won\'t be rich!',
            'we\'e all going to make it!',
            'to the moon!',
            'lambos when?',
            'my hards are made of super-diamond.',
            'apes together strong!',
            '{coin} will Pump 400% 🚀 Be calm be positive 😇✨',
            'HODL!',
            'Buy the dip!',
            'RUG-PROOF!',
            'un-pumpumble, un-dumpuble, un-fungiedbles.',
            'just bought 69 {coin}s, nice!',
            'it\'s not a scam if you know it\'s a scam.',
            'the whitepaper is FOURTEEN PAGES!',
            'never gonna funge, never gonna funge, funge you up.',
            'Elon Musk LITERALLY just tweeted about {coin}.',
            'I heard a rumor that {coin} was created by Satoshi himself via ghostokenomics.',
            'I\'ve never seen tokenomics like this, I\'m speechless.',
            'has science gone too far creating {coin}?',
            'plus they can NEVER shut it off ({coin} uses schwarzschild anti-forking, literally spawns a black hole if it hits 0).',
            'let me know when you have 100 {coin}, I have a bridge for sale.',
            'OMEGA MOON!',
            'it\'s moonin\' time!',
            'it\'s mooning! it\'s mooning!',
            'To the moon, and beyond!',
            'choo! choo! all aboard the hype train!',
            'diamond hands!',
            'about to hit all time highs!'
        ]
    }
}; 

export default data;