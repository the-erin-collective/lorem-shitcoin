import data from '../Data/data'

const coinKeyWords = [ 'brandPrefix', 'jargonPrefix', 'brandSuffix', 'jargonSuffix', 'oneWordWonder'];
const pitchKeyWords = [ 'hypeTrain', 'selfHelp', 'hotTake'];
let previousPitchTemplate = '';
const getRandomArbitrary = (min: number, max: number):number => {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomElementFromList = (keyword:string):string => {
    let resultItem: string = null;
    switch(keyword){
        case '{coinTemplates}':
            resultItem = data.coinTemplates[getRandomArbitrary(0,  data.coinTemplates.length)];
            break;
        case '{pitchTemplates}':
            resultItem = data.pitchTemplates[getRandomArbitrary(0,  data.pitchTemplates.length)];
            break;
        case '{brandPrefix}':
            resultItem = data.words.brandPrefix[getRandomArbitrary(0,  data.words.brandPrefix.length)];
            break;
        case '{jargonPrefix}':
            resultItem = data.words.jargonPrefix[getRandomArbitrary(0,  data.words.jargonPrefix.length)];
            break;
        case '{brandSuffix}':
            resultItem = data.words.brandSuffix[getRandomArbitrary(0,  data.words.brandSuffix.length)];
             break;
        case '{jargonSuffix}':
            resultItem = data.words.jargonSuffix[getRandomArbitrary(0,  data.words.jargonSuffix.length)];
            break;
        case '{oneWordWonder}':
            resultItem = data.words.oneWordWonder[getRandomArbitrary(0,  data.words.oneWordWonder.length)];
            break;
        case '{hypeTrain}':
            resultItem = data.phrases.hypeTrain[getRandomArbitrary(0,  data.phrases.hypeTrain.length)];
            break;
        case '{selfHelp}':
            resultItem = data.phrases.selfHelp[getRandomArbitrary(0,  data.phrases.selfHelp.length)];
            break;
        case '{hotTake}':
            resultItem = data.phrases.hotTake[getRandomArbitrary(0,  data.phrases.hotTake.length)];
            break;
        default:
            break;
    }
    return resultItem;
};

const generateCoinName = ():string => {
    const thisTemplate = getRandomElementFromList('{coinTemplates}');
    const regex = /{(.*?)}/g;
    const found = thisTemplate.match(regex);
    let result = '';
    found.forEach((tag:string) => {
        result+= getRandomElementFromList(tag);
        if(Math.random() < 0.25){
            result += ' ';
        }
    }); 
    return result;
};

const createPitch = (useOldPitch:boolean, coinName: string):string => {
    let pitch = '';
    const regex = /{(.*?)}/g;
    console.log(useOldPitch, previousPitchTemplate);
    if(!useOldPitch){
        const thisTemplate = getRandomElementFromList('{pitchTemplates}');
        const found = thisTemplate.match(regex);
        found.forEach((tag:string) => {
            pitch += getRandomElementFromList(tag) + ' ';
        }); 
        previousPitchTemplate = pitch;
    }else{
        pitch = previousPitchTemplate;
    }
    return pitch.replace(regex, coinName);
};

const getCoin = () => {
    return generateCoinName();
};

const getPitch = (useOldPitch:boolean, coinName:string) => {
    if(!coinName || coinName.length == 0){
        coinName = generateCoinName();
    }
    return createPitch(useOldPitch, coinName);
};

const innovationService = {
    getCoin: getCoin,
    getPitch
};
  
export default innovationService;
  