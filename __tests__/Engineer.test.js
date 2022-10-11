const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    
    describe("Initialization", () => {
      it("should return an object containing a name, id, email and github property when called with the 'new' keyword", () => {
        const obj = new Engineer();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("github" in obj).toEqual(true);
      })
    });

    describe("getName", () => {
        it("should return an object containing a name, equal to the name 'John' with which it was initialized", () => {
          
        const name = 'someName';
        const obj = new Engineer('someName','someID','someEmail','someGitHub');
        const getName = obj.getName();
    
        expect(getName).toEqual(name);
        
        })
      });

      describe("getID", () => {
        it("should return an object containing an id equal to the id with which it was initialized", () => {
          
            const id = 'someID';
            const obj = new Engineer('someName','someID','someEmail','someGitHub');
            const getId = obj.getID();
        
            expect(getId).toEqual(id);
            
            })
      });

      describe("getEmail", () => {
        it("should return an object containing the email with which it was initialized", () => {
          
            const email = 'someEmail';
            const obj = new Engineer('someName','someID','someEmail','someGitHub');
            const getEmail = obj.getEmail();
        
            expect(getEmail).toEqual(email);
            
            })
      });

      describe("getGitHub", () => {
        it("should return an object containing the GitHub profile with which it was initialized", () => {
          
            const github = 'someGitHub';
            const obj = new Engineer('someName','someID','someEmail','someGitHub');
            const getGithub = obj.getGitHub();

              expect(getGithub).toEqual(github);
            
            })
      });

      describe("getRole", () => {
        it("should return an object containing the role from the original class", () => {
          
            const role = 'Engineer';
            const obj = new Engineer('someName','someID','someEmail','someGitHub');
            const getRole = obj.getRole();
        
            expect(getRole).toEqual(role);
            
            })
      });

});

