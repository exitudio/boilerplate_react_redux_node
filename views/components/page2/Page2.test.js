import * as actions from './actions'
import reducer from './reducer'

describe('Page2', () => {
  const expectedAction = {
    type: actions.CHANGE_ITEM,
    payload: actions.ITEM_1
  }

  it('should create an action to change item', () => {
    expect(actions.changeItemAction(actions.ITEM_1)).toEqual(expectedAction)
  })

  it('should return intitial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should return change item action state', () => {
    expect(
      reducer({}, actions.changeItemAction(actions.ITEM_1))
    ).toEqual({
      currentItem: actions.ITEM_1
    })
  })
})