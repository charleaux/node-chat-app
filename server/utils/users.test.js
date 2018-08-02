const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'React'
            },
            {
                id: '3',
                name: 'Julie',
                room: 'Node'
            }
        ]
        
    });
    
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Charles',
            room: 'The Office Fans'
        };
        users.addUser(user.id, user.name, user.room);

        expect(users.users).toMatchObject([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var origLength = users.users.length;
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(origLength - 1);
    });

    it('should not remove user', () => {
        var userId = '6';
        var origLength = users.users.length;
        var user = users.removeUser(userId);

        expect(user).toBe(undefined);
        expect(users.users.length).toBe(origLength);
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user).toEqual(users.users[0]);
    });

    it('should not find user', () => {
        var user = users.getUser('adf');
        expect(user).toBeFalsy();
    });

    it('should return names for node course', () => {
        var usersList = users.getUserList('Node');
        expect(usersList).toEqual(['Mike','Julie']);
    });

    it('should return names for react course', () => {
        var usersList = users.getUserList('React');
        expect(usersList).toEqual(['Jen']);
    });
});