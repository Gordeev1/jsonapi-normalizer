import normalize from '../src'

import simpleCollection from '../test-collections/simpleCollection'
import belongsToCollection from '../test-collections/belongsToCollection'
import belongsToOwnTypeCollection from '../test-collections/belongsToOwnTypeCollection'

describe('normalize()', () => {
  it('normalizes a simple collection', () => {
    expect(
      normalize(simpleCollection)
    ).toEqual(
      {
        entities: {
          articles: {
            '1': {
              id: '1',
              title: 'title',
              body: 'body'
            }
          }
        }
      }
    )
  })

  it('normalizes a collection with a belongs-to relationship', () => {
    expect(
      normalize(belongsToCollection)
    ).toEqual(
      {
        entities: {
          articles: {
            '1': {
              id: '1',
              title: 'title',
              body: 'body',
              author: { type: 'users', id: '42' }
            }
          },
          users: {
            '42': {
              id: '42',
              name: 'John'
            }
          }
        }
      }
    )
  })

  it('normalizes a collection with references to objects of the same type', () => {
    expect(
      normalize(belongsToOwnTypeCollection)
    ).toEqual(
      {
        entities: {
          users: {
            '1': {
              id: '1',
              name: 'Steve',
              manager: { type: 'users', id: '42' }
            },
            '42': {
              id: '42',
              name: 'John'
            }
          }
        }
      }
    )
  })
})
