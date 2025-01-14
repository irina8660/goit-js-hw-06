class StringBuilder {
    #values;

    constructor(initialValue = "") {
        this.#values = initialValue;
    }

    getValue() {
        return this.#values;
    }

    padEnd(str) {
         this.#values = this.#values.concat(str);
    }

    padStart(str) {
       this.#values = str.concat(this.#values);
    }

    padBoth(str) {
        this.#values = str.concat(this.#values).concat(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
