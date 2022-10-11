const Manager = require('../lib/Manager');

describe("Manager", () => {
    
    describe("Initialization", () => {
      it("should return an object containing a name, id, email and github property when called with the 'new' keyword", () => {
        const obj = new Manager();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("officeNumber" in obj).toEqual(true);
      })
    });

    describe("getName", () => {
        it("should return a name, equal to the name with which it was initialized", () => {
          
        const name = 'someName';
        const obj = new Manager('someName','someID','someEmail','someOfficeNumber');
        const getName = obj.getName();
    
        expect(getName).toEqual(name);
        
        })
      });

      describe("getID", () => {
        it("should return an id equal to the id with which it was initialized", () => {
          
            const id = 'someID';
            const obj = new Manager('someName','someID','someEmail','someOfficeNumber');
            const getId = obj.getID();
        
            expect(getId).toEqual(id);
            
            })
      });

      describe("getEmail", () => {
        it("should return the email with which it was initialized", () => {
          
            const email = 'someEmail';
            const obj = new Manager('someName','someID','someEmail','someOfficeNumber');
            const getEmail = obj.getEmail();
        
            expect(getEmail).toEqual(email);
            
            })
      });

      describe("officeNumber", () => {
        it("should return the officeNumber profile with which it was initialized", () => {
          
            const officeNumber = 'someOfficeNumber';
            const obj = new Manager('someName','someID','someEmail','someOfficeNumber');
        
              expect(obj.officeNumber).toEqual(officeNumber);
            
            })
      });

      describe("getRole", () => {
        it("should return athe role from the original class", () => {
          
            const role = 'Manager';
            const obj = new Manager('someName','someID','someEmail','someSchool');
            const getRole = obj.getRole();
        
            expect(getRole).toEqual(role);
            
            })
      });

});