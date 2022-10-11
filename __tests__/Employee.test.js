const Employee = require('../lib/Employee');

describe("Employee", () => {
    
    describe("Initialization", () => {
      it("should return an object containing a name, id and email property when called with the 'new' keyword", () => {
        const obj = new Employee();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
      })
    });

    describe("getName", () => {
        it("should return an object containing a name, equal to the name 'John' with which it was initialized", () => {
          
        const name = 'John';
        const obj = new Employee('John','someID','someEmail');
    
          expect(obj.name).toEqual(name);
        
        })
      });

      describe("getID", () => {
        it("should return an object containing an id equal to the id with which it was initialized", () => {
          
            const id = 'someID';
            const obj = new Employee('someName','someID','someEmail');
        
              expect(obj.id).toEqual(id);
            
            })
      });

      describe("getEmail", () => {
        it("should return an object containing the email with which it was initialized", () => {
          
            const email = 'someEmail';
            const obj = new Employee('someName','someID','someEmail');
        
              expect(obj.email).toEqual(email);
            
            })
      });

});

