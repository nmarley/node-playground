function Person (type) {
  this.types = [
    'Smart',
    'Dumb',
  ]

  if (this.types.indexOf(type) > -1) {
    this.type = type
    console.log("Set person type to: " + type)
  }
  else {
    throw new Error("Person type '" + type + "' doesn't exist")
    console.error("Broke!")
  }

}

var persons = []
persons.push( new Person('Smart') )
persons.push( new Person('Smart') )
persons.push( new Person('Dumb') )
persons.push( new Person('Really Dumb') )
