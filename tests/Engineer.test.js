const Engineer = require('../lib/Engineer');

describe('Employee', () => {
    it('New Employee github set', () => {
        const git = 'github';
        const newGit = new Employee('NewGuy', 1, 'newguy@gmail.com', git);
        expect(newGit.github).toBe(git);
    });

    it('getGithub works', () => {
        const gittest = 'github';
        const newGetgithub = new Employee('NewGuy', 1, 'newguy@gmail.com', git);
        expect(newGetgithub.getGithub()).toBe(gittest);
    });

    it('getRole works', () => {
        const returnv = 'Engineer';
        const newGetrole = new Employee('NewGuy', 1, 'newguy@gmail.com', 'github');
        expect(newGetrole.getRole()).toBe(returnv);
    });
})