import expect from 'expect';
import userReducer from './userReducer';
import * as userActions from '../actions/userActions';

describe('User Reducer', () => {
  it('should add user when passed CREATE_USER_SUCCESS', () => {
    // arrange
    const initialState = [
        {
            id: 'rusty-shackleford',
            firstName: 'Rusty',
            lastName: 'Shackleford',
            email: 'rs@koth.com',
            pass: 'rs',
            isOwner: false,
            threads: [0],
            avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
            title: "Animal Caretaker",
            bio: "I will walk or sit any type of animal. EXCEPT fish. No fish. Fish are off-limits."
        },
        {
            id: 'hank-hill',
            firstName: 'Hank',
            lastName: 'Hill',
            email: 'hh@koth.com',
            pass: 'hh',
            isOwner: false,
            threads: [0, 1],
            avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
            title: "Animal Caretaker",
            bio: "I will walk or sit any type of animal. EXCEPT fish. No fish. Fish are off-limits."
        },
        {
            id: 'jeff-boomhauer',
            firstName: 'Jeff',
            lastName: 'Boomhauer',
            email: 'jb@koth.com',
            pass: 'jb',
            isOwner: false,
            threads: [],
            avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
            title: "Animal Caretaker",
            bio: "I will walk or sit any type of animal. EXCEPT fish. No fish. Fish are off-limits."
        },
        {
            id: 'fred-flintstone',
            firstName: 'Fred',
            lastName: 'Flintstone',
            email: 'ff@stone.com',
            pass: 'ff',
            isOwner: true,
            threads: [1]
        },
        {
            id: 'barney-rubble',
            firstName: 'Barney',
            lastName: 'Rubble',
            email: 'br@stone.com',
            pass: 'br',
            isOwner: true,
            threads: []
        },
        {
            id: 'bambam-flintstone',
            firstName: 'Bam Bam',
            lastName: 'Flintstone',
            email: 'bb@stone.com',
            pass: 'bb',
            isOwner: true,
            threads: []
        }
    ];

    const newUser = {
        id: 'new-guy',
        firstName: 'new',
        lastName: 'guy',
        email: 'new@guy.com',
        pass: 'ng',
        isOwner: true,
        threads: []
    };
    userActions.saveUser(newUser);
    const action = userActions.createUserSuccess(newUser);

    //act
    const newState = userReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(initialState.length + 1); //number of items should increase by one
    expect(newState[initialState.length].firstName).toEqual('new'); //last item should be the new item
    expect(newState[initialState.length].id).toEqual('new-guy');
    expect(newState[0].id).toEqual('rusty-shackleford'); //first item should be unchanged
  });
  it('should update user when passed UPDATE_USER_SUCCESS', () => {
    // arrange
    const initialState = [
        {
            id: 'rusty-shackleford',
            firstName: 'Rusty',
            lastName: 'Shackleford',
            email: 'rs@koth.com',
            pass: 'rs',
            isOwner: false,
            threads: [0],
            avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
            title: "Animal Caretaker",
            bio: "I will walk or sit any type of animal. EXCEPT fish. No fish. Fish are off-limits."
        },
        {
            id: 'hank-hill',
            firstName: 'Hank',
            lastName: 'Hill',
            email: 'hh@koth.com',
            pass: 'hh',
            isOwner: false,
            threads: [0, 1],
            avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
            title: "Animal Caretaker",
            bio: "I will walk or sit any type of animal. EXCEPT fish. No fish. Fish are off-limits."
        },
        {
            id: 'jeff-boomhauer',
            firstName: 'Jeff',
            lastName: 'Boomhauer',
            email: 'jb@koth.com',
            pass: 'jb',
            isOwner: false,
            threads: [],
            avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
            title: "Animal Caretaker",
            bio: "I will walk or sit any type of animal. EXCEPT fish. No fish. Fish are off-limits."
        },
        {
            id: 'fred-flintstone',
            firstName: 'Fred',
            lastName: 'Flintstone',
            email: 'ff@stone.com',
            pass: 'ff',
            isOwner: true,
            threads: [1]
        },
        {
            id: 'barney-rubble',
            firstName: 'Barney',
            lastName: 'Rubble',
            email: 'br@stone.com',
            pass: 'br',
            isOwner: true,
            threads: []
        },
        {
            id: 'bambam-flintstone',
            firstName: 'Bam Bam',
            lastName: 'Flintstone',
            email: 'bb@stone.com',
            pass: 'bb',
            isOwner: true,
            threads: []
        }
    ];
  
    let user1 = initialState[0];
    user1.title="Batman";
    userActions.updateUser(user1);
    const action = userActions.updateUserSuccess(user1);

    //act
    const newState = userReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(initialState.length + 1);
    expect(newState[0].id).toEqual('rusty-shackleford'); //changed item should still keep its old properties
    expect(newState[1].id).toEqual('hank-hill'); //last item should be the new item
    expect(newState[initialState.length].title).toEqual('Batman');
    expect(newState[2].id).toEqual('jeff-boomhauer'); //first item should be unchanged
  });
  /*
  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // assert
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });*/
});
