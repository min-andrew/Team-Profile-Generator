const Manager = require('../lib/Manager');

describe('Employee', () => {
    it('New Employee office set', () => {
        const office = 2;
        const newOffice = new Employee('NewGuy', 1, 'newguy@gmail.com', office);
        expect(newOffice.officeNumber).toBe(office);
    });

    it('getOffice works', () => {
        const office = 2;
        const newOffice = new Employee('NewGuy', 1, 'newguy@gmail.com', office);
        expect(newOffice.officeNumber).toBe(office);
    });

    it('getRole works', () => {
        const returnv = 'Manager';
        const newGetrole = new Employee('NewGuy', 1, 'newguy@gmail.com', 2);
        expect(newGetrole.getRole()).toBe(returnv);
    });
})