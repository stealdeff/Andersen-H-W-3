// H/A
// You need to implement a function that will take a person's name and age as arguments and then return an array of objects. Each object must be created in a unique way.
// Additionally - it is not necessary to write these properties as your own for the object, you can play with prototypes

function getPersons(name, age) {
  return [
    {
      name,
      age,
    },
    Object.assign({}, { name, age }),
    Object.create(Object.prototype, {
        name: { value: name, writable: true, enumerable: true },
        age: { value: age, writable: true, enumerable: true }
      }),
    structuredClone( { name, age }),
    Object.fromEntries(Object.entries({ name, age })),

  ];
}
console.log(JSON.stringify(getPersons('Arina', 20)));