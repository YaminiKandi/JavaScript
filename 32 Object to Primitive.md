### Object to Primitive:
* The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.
* There are 3 types (hints) of it:
  1. "string" (for alert and other operations that need a string)
  2. "number" (for maths)
  3. "default" (few operators)

The conversion algorithm is:
* Call obj `[Symbol.toPrimitive](hint)` if the method exists,
* Otherwise if hint is "string", try obj.toString() and obj.valueOf(), whatever exists.
* Otherwise if hint is "number" or "default", try obj.valueOf() and obj.toString(), whatever exists.
* Two main types of object-to-primitive conversions: "ToPrimitive" and "valueOf"/"toString" conversions.

#### 1. ToPrimitive:
* This method allows the object to define its preferred type of conversion, either to a number or to a string.
* The `[[ToPrimitive]]` method is defined by default, but we can customize it by implementing the `Symbol.toPrimitive` symbol on our object.

#### 2. valueOf and toString Conversions:
* These methods are called in that order, and the first one to return a primitive value is used as the result of the conversion.

```js
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
  toString() {
    return `{name: "${this.name}"}`;
  },
  valueOf() {
    return this.money;
  },
};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```

#### Property getters, setters and Computed Names:
```js
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};
```

* the outside, an accessor property looks like a regular one. That’s the idea of accessor properties.
* We don’t call obj.propName as a function, we read it normally: the getter runs behind the scenes.
* If obj.propName setter is not present, If we attempt to assign obj.propName=, there will be an error

```js
let obj2 = {
  ['say' + 'Hi']() {
    alert("Hello");
  }
}
```

obj2.sayHi();
