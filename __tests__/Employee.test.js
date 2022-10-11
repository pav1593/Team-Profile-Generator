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
          
        const name = 'someName';
        const obj = new Employee('someName','someID','someEmail');
        const getName = obj.getName();
    
          expect(getName).toEqual(name);
        
        })
      });

      describe("getID", () => {
        it("should return an object containing an id equal to the id with which it was initialized", () => {
          
            const id = 'someID';
            const obj = new Employee('someName','someID','someEmail');
            const getId = obj.getID();
        
            expect(getId).toEqual(id);
            
            })
      });

      describe("getEmail", () => {
        it("should return an object containing the email with which it was initialized", () => {
          
            const email = 'someEmail';
            const obj = new Employee('someName','someID','someEmail');
            const getEmail = obj.getEmail();
        
            expect(getEmail).toEqual(email);
            
            })
      });

      describe("getRole", () => {
        it("should return an object containing the role from the original class", () => {
          
            const role = 'Employee';
            const obj = new Employee('someName','someID','someEmail');
            const getRole = obj.getRole();
        
            expect(getRole).toEqual(role);
            
            })
      });

});

