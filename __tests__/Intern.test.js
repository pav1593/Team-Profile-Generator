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
    
          expect(obj.name).toEqual(name);
        
        })
      });

      describe("getID", () => {
        it("should return an object containing an id equal to the id with which it was initialized", () => {
          
            const id = 'someID';
            const obj = new Intern('someName','someID','someEmail','someSchool');
        
              expect(obj.id).toEqual(id);
            
            })
      });

      describe("getEmail", () => {
        it("should return an object containing the email with which it was initialized", () => {
          
            const email = 'someEmail';
            const obj = new Intern('someName','someID','someEmail','someSchool');
        
              expect(obj.email).toEqual(email);
            
            })
      });

      describe("getGitHub", () => {
        it("should return an object containing the GitHub profile with which it was initialized", () => {
          
            const school = 'someSchool';
            const obj = new Intern('someName','someID','someEmail','someSchool');
        
              expect(obj.school).toEqual(school);
            
            })
      });

});