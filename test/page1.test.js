// nock to mock the HTTP requests
// a mock store using redux-mock-store
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../views/components/page1/actions'
import nock from 'nock'
import host from './libs/hostAxiosNock'
import { expect } from 'chai' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('Page1 async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('creates GET_ITEM_SUCCESS when get item has been done', () => {
        let response = {
            items: [
                {
                    name: 'item1',
                    status: 'active'
                }
            ]
        }


        nock(host)
            .get('/services/getitem')
            .reply(200, response)

        const expectedActions = [
            { type: actions.GET_ITEM_REQUEST },
            { type: actions.GET_ITEM_SUCCESS, payload:response }
        ]
        const store = mockStore({})

        return store.dispatch(actions.getItemInStoreAction('storeName'))
            .then(() => {
                // return of async actions
                expect(store.getActions()).to.deep.equal(expectedActions)
            })
    })



    it('creates GET_ITEM_FAIL when get item 404', () => {
        nock(host)
            .get('/wrongurl')
            .reply(200, {})

        const expectedActions = [
            { type: actions.GET_ITEM_REQUEST },
            { type: actions.GET_ITEM_FAIL }
        ]
        const store = mockStore({})

        return store.dispatch(actions.getItemInStoreAction('storeName'))
            .then(() => {
                // return of async actions
                let reduxActions = store.getActions()
                expect(reduxActions[0].type).to.deep.equal(expectedActions[0].type)
                expect(reduxActions[1].type).to.deep.equal(expectedActions[1].type)
            })
    })
})