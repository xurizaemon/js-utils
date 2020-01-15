import { randomElement } from './randomUtil';

/*
const _NOUN_ = [
];
*/

/**
 * The list of plural nouns.
 * @const
 */
const _PLURALNOUN_ = [
    'Alkalis', 'Animals', 'Antelopes', 'Ants', 'Apartments', 'Apples', 'Bananas',
    'Bacteria', 'Badgers', 'Bananas', 'Bats', 'Bears', 'Birds', 'Bonobos',
    'Bridges', 'Bugs', 'Bulls', 'Butterflies', 'Cheetahs', 'Cherries', 'Chicken',
    'Children', 'Chinchillas', 'Clowns', 'Crows', 'Creatures', 'Dinosaurs', 'Dollars',
    'Dolphins', 'Donkeys', 'Dragons', 'Ducks', 'Dawns', 'Eagles', 'Elephants',
    'Elves', 'Falcons', 'Fish', 'Flowers', 'Frogs', 'Fruit', 'Fungi',
    'Galaxies', 'Geese', 'Goats', 'Guineapigs', 'Hedgehogs', 'Hippos', 'Horses',
    'Hunters', 'Insects', 'Kids', 'Knights', 'Lemons', 'Lemurs', 'Leopards',
    'LifeForms', 'Lions', 'Lizards', 'Mice', 'Mongeese', 'Monsters', 'Mushrooms',
    'Octopodes', 'Oranges', 'Orators', 'Organisms', 'Pans', 'Parrots',
    'Penguins', 'People', 'Pigeons', 'Pikes', 'Pineapples', 'Plants', 'Potatoes',
    'Priests', 'Rats', 'Reptiles', 'Reptilians', 'Rhinos', 'Seagulls', 'Sheep',
    'Sitcoms', 'Snakes', 'Spaghetti', 'Spiders', 'Squid', 'Squirrels',
    'Stars', 'Studios', 'Teams', 'Tigers', 'Tomatoes', 'Trees', 'Vampires',
    'Vegetables', 'Viruses', 'Vulcans', 'Weasels', 'Werewolves', 'Whales',
    'Wisps', 'Witnesses', 'Wolves', 'Workers', 'Worms', 'Zebras'
];

/*
const _PLACE_ = [
    'Pub', 'University', 'Airport', 'Library', 'Mall', 'Theater', 'Stadium',
    'Office', 'Show', 'Galleon', 'Beach', 'Cemetery', 'Hospital', 'Reception',
    'Restaurant', 'Bar', 'Church', 'House', 'Schooner', 'Square', 'Village',
    'Cinema', 'Movies', 'Party', 'Restroom', 'End', 'Jungle', 'PostOffice',
    'Station', 'Circuit', 'Gates', 'Entrance', 'Bridge'
];
*/

/**
 * The list of verbs.
 * @const
 */
const _VERB_ = [
    'Abate', 'Adapt', 'Advertise', 'Answer', 'Anticipate', 'Appreciate',
    'Approach', 'Argue', 'Ask', 'Bite', 'Blossom', 'Blush', 'Breathe', 'Breed',
    'Bribe', 'Burst', 'Calculate', 'Clean', 'Code', 'Communicate', 'Compute',
    'Confess', 'Confiscate', 'Conjoin', 'Conjure', 'Consume', 'Contemplate',
    'Crawl', 'Dance', 'Delegate', 'Devour', 'Develop', 'Differ', 'Discuss',
    'Dissolve', 'Drink', 'Eat', 'Elaborate', 'Emancipate', 'Estimate', 'Expire',
    'Extinguish', 'Extract', 'Facilitate', 'Fall', 'Feed', 'Finish', 'Floss',
    'Fly', 'Follow', 'Fragment', 'Freeze', 'Gather', 'Glow', 'Grow', 'Hex',
    'Hide', 'Hug', 'Hurry', 'Improve', 'Intersect', 'Investigate', 'Jinx',
    'Joke', 'Jubilate', 'Kiss', 'Laugh', 'Manage', 'Meet', 'Merge', 'Move',
    'Object', 'Observe', 'Offer', 'Paint', 'Participate', 'Party', 'Perform',
    'Plan', 'Pursue', 'Pierce', 'Play', 'Postpone', 'Pray', 'Proclaim',
    'Question', 'Read', 'Reckon', 'Rejoice', 'Represent', 'Resize', 'Rhyme',
    'Scrape', 'Search', 'Select', 'Share', 'Ship', 'Shout', 'Signal', 'Sing',
    'Skate', 'Sleep', 'Smile', 'Smoke', 'Solve', 'Spell', 'Steer', 'Stink',
    'Substitute', 'Swim', 'Taste', 'Teach', 'Terminate', 'Think', 'Type',
    'Unite', 'Vanish', 'Worship'
];

/**
 * The list of adverbs.
 * @const
 */
const _ADVERB_ = [
    'Absently', 'Accurately', 'Accusingly', 'Adorably', 'AllTheTime', 'Alone',
    'Always', 'Amazingly', 'Angrily', 'Anxiously', 'Anywhere', 'Appallingly',
    'Apparently', 'Articulately', 'Astonishingly', 'Badly', 'Barely',
    'Beautifully', 'Blissfully', 'Bravely', 'Brightly', 'Briskly', 'Bruskly',
    'Calmly', 'Carefully', 'Casually', 'Cautiously', 'Cleverly', 'Constantly',
    'Correctly', 'Creatively', 'Curiously', 'Cynically', 'Daily', 'Dangerously',
    'Deliberately', 'Delicately', 'Desperately', 'Discreetly', 'Eagerly',
    'Easily', 'Euphoricly', 'Evenly', 'Everywhere', 'Exactly', 'Expectantly',
    'Extensively', 'Ferociously', 'Fiercely', 'Finely', 'Flatly', 'Frequently',
    'Frighteningly', 'Gently', 'Gloriously', 'Grimly', 'Guiltily', 'Happily',
    'Hardly', 'Hastily', 'Heroically', 'High', 'Highly', 'Hourly', 'Humbly',
    'Hypnotically', 'Immensely', 'Impartially', 'Impolitely', 'Indifferently',
    'Intensely', 'Jealously', 'Jovially', 'Kindly', 'Lazily', 'Lightly',
    'Loudly', 'Lovingly', 'Loyally', 'Magnificently', 'Malevolently', 'Merrily',
    'Mightily', 'Miserably', 'Mysteriously', 'Notably', 'Nervously', 'Nicely',
    'Nowhere', 'Objectively', 'Obnoxiously', 'Obsessively', 'Obviously',
    'Often', 'Painfully', 'Patiently', 'Playfully', 'Politely', 'Poorly',
    'Precisely', 'Promptly', 'Quickly', 'Quietly', 'Randomly', 'Rapidly',
    'Rarely', 'Recklessly', 'Regularly', 'Remorsefully', 'Responsibly',
    'Rudely', 'Ruthlessly', 'Sadly', 'Scornfully', 'Seamlessly', 'Seldom',
    'Selectively', 'Seriously', 'Shakily', 'Sharply', 'Sideways', 'Silently',
    'Sleepily', 'Slightly', 'Slowly', 'Slyly', 'Smoothly', 'Softly', 'Solemnly',
    'Steadily', 'Sternly', 'Strangely', 'Strongly', 'Stunningly', 'Surely',
    'Tenderly', 'Thoughtfully', 'Tightly', 'Uneasily', 'Vanishingly',
    'Violently', 'Warmly', 'Weakly', 'Wearily', 'Weekly', 'Weirdly', 'Well',
    'Well', 'Wickedly', 'Wildly', 'Wisely', 'Wonderfully', 'Yearly'
];

/**
 * The list of adjectives.
 * @const
 */
const _ADJECTIVE_ = [
    'Abominable', 'Accurate', 'Adorable', 'All', 'Alleged', 'Ancient', 'Angry',
    'Anxious', 'Appalling', 'Apparent', 'Astonishing', 'Attractive', 'Awesome',
    'Baby', 'Bad', 'Beautiful', 'Benign', 'Big', 'Bionic', 'Blissful', 'Blue',
    'Bold', 'Brave', 'Bright', 'Brisk', 'Calm', 'Camouflaged', 'Casual',
    'Cautious', 'Choppy', 'Chosen', 'Clever', 'Cold', 'Cool', 'Crawly',
    'Crazy', 'Creepy', 'Cruel', 'Curious', 'Cynical', 'Dangerous', 'Dark',
    'Delicate', 'Desperate', 'Difficult', 'Discreet', 'Disguised', 'Dizzy',
    'Dusty', 'Eager', 'Eccentric', 'Edgy', 'Electric', 'Elegant', 'Emancipated',
    'Enormous', 'Euphoric', 'Evil', 'Fast', 'Ferocious', 'Fierce', 'Fine',
    'Flawed', 'Flying', 'Foolish', 'Foxy', 'Freezing', 'Funny', 'Furious',
    'Gentle', 'Glorious', 'Golden', 'Good', 'Green', 'Green', 'Guilty',
    'Hairy', 'Happy', 'Harvested', 'Hasty', 'Hazy', 'Heroic', 'Hostile', 'Hot',
    'Humble', 'Humongous', 'Humorous', 'Hypnotic', 'Idealistic', 'Ignorant',
    'Immense', 'Impartial', 'Impolite', 'Indifferent', 'Infuriated',
    'Insightful', 'Intense', 'Interesting', 'Intimidated', 'Intriguing',
    'Jealous', 'Jolly', 'Jovial', 'Jumpy', 'Kind', 'Laughing', 'Lazy', 'Liquid',
    'Lonely', 'Longing', 'Loud', 'Loving', 'Loyal', 'Macabre', 'Mauve', 'Magical',
    'Magnificent', 'Malevolent', 'Medieval', 'Memorable', 'Mere', 'Merry',
    'Mighty', 'Mischievous', 'Misspelt', 'Modified', 'Moldy', 'Most',
    'Mysterious', 'Mystical', 'Neutral', 'Nervous', 'Nice', 'Objective',
    'Obnoxious', 'Obsessive', 'Obvious', 'Opining', 'Orange', 'Painful',
    'Passionate', 'Perfect', 'Pink', 'Playful', 'Poisonous', 'Polite', 'Poor',
    'Popular', 'Powerful', 'Precise', 'Preserved', 'Pretty', 'Purple', 'Quick',
    'Quiet', 'Random', 'Rapid', 'Rare', 'Real', 'Reassuring', 'Reckless', 'Reedy',
    'Regular', 'Remorseful', 'Responsible', 'Rich', 'Rude', 'Ruthless', 'Sad',
    'Scared', 'Scary', 'Scornful', 'Scratchy', 'Select', 'Serious', 'Shady',
    'Shaky', 'Sharp', 'Shiny', 'Shy', 'Simple', 'Sleepy', 'Slow', 'Sly',
    'Small', 'Smart', 'Smelly', 'Smiling', 'Smooth', 'Smug', 'Sober', 'Soft',
    'Solemn', 'Square', 'Square', 'Steady', 'Strange', 'Strong', 'Stunning',
    'Subjective', 'Successful', 'Surly', 'Sweet', 'Tactful', 'Tense',
    'Thoughtful', 'Tight', 'Tiny', 'Tolerant', 'Uneasy', 'Unique', 'Unseen',
    'Warm', 'Weak', 'Weird', 'WellCooked', 'Wild', 'Wise', 'Witty', 'Wonderful',
    'Worried', 'Yearning', 'Young', 'Zealous'
];

/*
const _PRONOUN_ = [
];
*/

/*
const _CONJUNCTION_ = [
    'And', 'Or', 'For', 'Above', 'Before', 'Against', 'Between'
];
*/

/**
 * Maps a string (category name) to the array of words from that category.
 * @const
 */
const CATEGORIES = {
    _ADJECTIVE_,
    _ADVERB_,
    _PLURALNOUN_,
    _VERB_

//    _CONJUNCTION_,
//    _NOUN_,
//    _PLACE_,
//    _PRONOUN_,
};

/**
 * The list of room name patterns.
 * @const
 */
const PATTERNS = [
    '_ADJECTIVE__PLURALNOUN__VERB__ADVERB_'

    // BeautifulFungiOrSpaghetti
    //    '_ADJECTIVE__PLURALNOUN__CONJUNCTION__PLURALNOUN_',

    // AmazinglyScaryToy
    //    '_ADVERB__ADJECTIVE__NOUN_',

    // NeitherTrashNorRifle
    //    'Neither_NOUN_Nor_NOUN_',
    //    'Either_NOUN_Or_NOUN_',

    // EitherConjoinOrInvestigate
    //    'Either_VERB_Or_VERB_',
    //    'Neither_VERB_Nor_VERB_',

    //    'The_ADJECTIVE__ADJECTIVE__NOUN_',
    //    'The_ADVERB__ADJECTIVE__NOUN_',
    //    'The_ADVERB__ADJECTIVE__NOUN_s',
    //    'The_ADVERB__ADJECTIVE__PLURALNOUN__VERB_',

    // WolvesComputeBadly
    //    '_PLURALNOUN__VERB__ADVERB_',

    // UniteFacilitateAndMerge
    //    '_VERB__VERB_And_VERB_',

    // NeutralWitchesAtThePub
    //    '_ADJECTIVE__PLURALNOUN_AtThe_PLACE_',
];

/**
 * Generates a new room name.
 *
 * @returns {string} A newly-generated room name.
 */
export function generateRoomWithoutSeparator() {
    // XXX Note that if more than one pattern is available, the choice of 'name'
    // won't have a uniform distribution amongst all patterns (names from
    // patterns with fewer options will have higher probability of being chosen
    // that names from patterns with more options).
    let name = randomElement(PATTERNS);

    while (_hasTemplate(name)) {
        for (const template in CATEGORIES) { // eslint-disable-line guard-for-in
            const word = randomElement(CATEGORIES[template]);

            name = name.replace(template, word);
        }
    }

    return name;
}

/**
 * Determines whether a specific string contains at least one of the
 * templates/categories.
 *
 * @param {string} s - String containing categories.
 * @private
 * @returns {boolean} True if the specified string contains at least one of the
 * templates/categories; otherwise, false.
 */
function _hasTemplate(s) {
    for (const template in CATEGORIES) {
        if (s.indexOf(template) >= 0) {
            return true;
        }
    }

    return false;
}
