const Intern = require('../lib/Intern');

describe("Intern", () => {
    
    describe("Initialization", () => {
      it("should return an object containing a name, id, email and github property when called with the 'new' keyword", () => {
        const obj = new Intern();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
      })
    });

    describe("getName", () => {
        it("should return an object containing a name, equal to the name 'John' with which it was initialized", () => {
          
        const name = 'someName';
        const obj = new Intern('someName','someID','someEmail','someSchool');
        const getName = obj.getName();
    
        expect(getName).toEqual(name);
        
        })
      });

      describe("getID", () => {
        it("should return an object containing an id equal to the id with which it was initialized", () => {
          
            const id = 'someID';
            const obj = new Intern('someName','someID','someEmail','someSchool');
            const getId = obj.getID();
        
            expect(getId).toEqual(id);
            
            })
      });

      describe("getEmail", () => {
        it("should return an object containing the email with which it was initialized", () => {
          
            const email = 'someEmail';
            const obj = new Intern('someName','someID','someEmail','someSchool');
            const getEmail = obj.getEmail();
        
            expect(getEmail).toEqual(email);
            
            })
      });

      describe("getGitHub", () => {
        it("should return an object containing the GitHub profile with which it was initialized", () => {
          
            const school = 'someSchool';
            const obj = new Intern('someName','someID','someEmail','someSchool');
            const getSchool = obj.getSchool();
        
              expect(getSchool).toEqual(school);
            
            })
      });

      describe("getRole", () => {
        it("should return an object containing the role from the original class", () => {
          
            const role = 'Intern';
            const obj = new Intern('someName','someID','someEmail','someSchool');
            const getRole = obj.getRole();
        
            expect(getRole).toEqual(role);
            
            })
      });


});