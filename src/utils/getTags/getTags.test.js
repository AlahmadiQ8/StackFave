import getTags from './getTags';

const data = [
  {
    tags: ['javascript', 'reactjs', 'redux', 'redux-thunk', 'redux-saga'],
  },
  {
    tags: ['javascript', 'ajax', 'asynchronous'],
  },
  {
    tags: ['javascript', 'jquery', 'amd'],
  },
  {
    tags: ['javascript', 'dom', 'event-loop'],
  },
  {
    tags: [],
  },
  {},
];

describe('getTags', () => {
  it('returns tags', () => {
    expect(getTags(data)).toEqual([
      'javascript',
      'reactjs',
      'redux',
      'redux-thunk',
      'redux-saga',
      'ajax',
      'asynchronous',
      'jquery',
      'amd',
      'dom',
      'event-loop',
    ]);
  });
});
