console.log('hello world!')

// Array.forEach

const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
    console.log(friend.toLowerCase());
})


// const friends2 = friends.forEach(friend => friend.toLowerCase());

// console.log(friends);
// console.log(friends2);



/// Array.map


const instructors = ['Ken', 'Evan', 'Payne', 'Matthew'];

const awesomeInstructors = instructors.map(instructor => {
    if (instructor !== 'Matthew') {
        return instructor + ' is awesome!';
    } else {
        return instructor + ' is very awesome!';
    }
});
console.log(awesomeInstructors);

// Array.filter


const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];

const noJerks = people.filter(person => person !== 'jerks');
console.log(noJerks);

//array.some() uses a callback function to check if ANY item in an array satisfies a certain condition. if so, it returns true
//array.every() uses a callback function to check if EVERY item in an array satisfies a certain condition. if so, it returns true

// Array.some

const myRoom = ["evil monkey", "bed", "lamp"];
const isEvilMonkeyInRoom = myRoom.some(itemInRoom => itemInRoom === 'evil monkey');

console.log(isEvilMonkeyInRoom);

//ternary operator (cool as heck)

const wordIsLong = 'supercagigragilisticexpialidocious'.length > 4 ? true: false;

console.log(wordIsLong);