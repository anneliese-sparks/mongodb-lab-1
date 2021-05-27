// Add a person to the collection. You pick the data, but they should have an empty array for children.
db.people.insertOne({ "first_name": "Anneliese",
  "last_name": "Sparks",
  "email": "sparksanneliese@gmail.com",
  "age": 29,
  "state": "Michigan",
  "children": [] })

// Add another person. They should have at least two children.
db.people.insertMany([{ "first_name": "Joe",
  "last_name": "Karabatakis",
  "email": "jke@gmail.com",
  "age": 29,
  "state": "Michigan",
  "children": [
    {"name": "Ashlyn", "age": 9},
    {"name": "Cameron", "age": 12},
  ]})

// Update one person named Clarence. He moved from North Dakota to South Dakota.
db.people.updateOne({name: 'Clarence'}, {$set: {state: 'South Dakota'}})

// Update Rebecca Hayes. Remove her email address.
db.people.updateOne({first_name: 'Rebecca', last_name: 'Hayes'}, {last_name: 'Hayes'}, {$set: {email: ''}})

// Update everyone from Missouri. They all had a birthday today, so add one to their age. (expect 4 matches)
db.people.updateMany({state: 'Missouri'}, {$inc: {birthday: 1}})

// Jerry Baker has updated information. Replace with a new document:
// { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }
db.people.replace({first_name: 'Jerry', last_name: 'Baker-Mendez'}), { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }
// Delete Wanda Bowman.
db.people.deleteOne({first_name: Wanda, last_name: Bowman})
// Delete everyone who does not have an email address specified. (expect 37 matches)
db.people.deleteMany({email: null})

// In submissions collection
// Add several documents to a new submissions collection. Do it all in one command. (Remember, MongoDB will create the collection for you. Just start adding documents.)
// title: "The River Bend", upvotes: 10, downvotes: 2, artist: <ID of Anna Howard>
// title: "Nine Lives", upvotes: 7, downvotes: 0, artist: <ID of Scott Henderson>
// title: "Star Bright", upvotes: 19, downvotes: 3, artist: <ID of Andrea Burke>
// title: "Why Like This?", upvotes: 1, downvotes: 5, artist: <ID of Steven Marshall>
// title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: <ID of Gerald Bailey>

db.submissions.insertMany([
    {title: "The River Bend", upvotes: 10, downvotes: 2, ObjectId},
    {title: "Nine Lives", upvotes: 7, downvotes: 0, ObjectId},
    {title: "Star Bright", upvotes: 19, downvotes: 3, ObjectId},
    {title: "Why Like This?", upvotes: 1, downvotes: 5, ObjectId},
    {title: "Non Sequitur", upvotes: 11, downvotes: 1, ObjectId}
    ]);

// Add 2 upvotes for "The River Bend".
db.submissions.updateOne({title: 'The River Bend'}, {$inc: {upvotes: 2}})

// Add a field round2 = true to all submissions with at least 10 upvotes. (expect 3 matches)
db.submissions.updateMany({upvotes: {$gte: 10}}, {$set: {round2: true}})