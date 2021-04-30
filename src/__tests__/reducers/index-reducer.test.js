import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

  test('Should return default state if no action type is passed in', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterMenu: {},
      formVisibleOnPage: false
    });
  });

});