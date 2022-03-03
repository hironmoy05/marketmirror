import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {apiRequest} from './api';
import {GET_PROFILE, TIMER} from '../constants/urls';
import moment from 'moment';

let lastId = 0;

export const slice = createSlice({
  name: 'bug',
  initialState: {
    userId: '',
    userStore: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    // actions => action handlers
    bugReceived: (bug, action) => {
      bug.userStore.push(action.payload);
      bug.lastFetch = Date.now();
    },

    bugAssignToUser: (bug, action) => {
      const {bugId, userId} = action.payload;
      const index = bug.userStore.findIndex(bug => bug.id === bugId);
      bug.userStore[index].userId = userId;
    },

    bugAdded: (bug, action) => {
      bug.userStore.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bug, action) => {
      const index = bug.userStore.findIndex(
        bug => bug.id === action.payload.id,
      );
      bug.userStore[index].resolved = true;
    },
    getUserId: (bug, action) => {
      bug.userId += action.payload;
    },
    removeUserId: (bug, action) => {
      bug.userId = '';
    },
    projectAdded: (bug, action) => {
      bug.userStore.push({
        id: ++lastId,
        name: action.payload.name,
        isTrue: false,
      });
    },
    projectResolved: (bug, action) => {
      const index = bug.userStore.findIndex(
        pro => pro.id === action.payload.id,
      );
      bug.userStore[index].isTrue = true;
    },
  },
});

export const {
  bugAdded,
  bugResolved,
  bugAssignToUser,
  getUserId,
  removeUserId,
  projectAdded,
  projectResolved,
  bugReceived,
} = slice.actions;
export default slice.reducer;

// Action Creators
export const loadBugs = userUid => (dispatch, getState) => {
  const url = GET_PROFILE;
  const {lastFetch} = getState().entities.bugs;

  // console.log('from reducer to check:',lastFetch);

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < TIMER) return;

  const body = 'user_id=' + userUid;

  dispatch(
    apiRequest({
      url,
      method: 'Post',
      data: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      onSuccess: bugReceived.type,
    }),
  );
};

// Selector
// Memoization
// bugs => get unresolved bugs from the cache
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bug => bug.userStore.filter(bug => !bug.resolved),
);

export const getBugByUser = userId =>
  createSelector(
    state => state.entities.bugs,
    bug => bug.userStore.filter(bug => bug.userId === userId),
  );

export const getUserIdFromStore = createSelector(
  state => state.entities.bugs,
  bug => bug.userId,
);

export const getUnresolvedProject = createSelector(
  state => state.entities.bugs,
  bug => bug.userStore.filter(bug => !bug.isTrue),
);

export const getUserInfo = createSelector(
  state => state.entities.bugs,
  bug => bug.userStore.map(user => user),
);

// Action Creators
// export const userAdded = createAction('userAdded');
// export const userRemoved = createAction('userRemoved');
// export const userResolved = createAction('userResolved');

// Reducer
// let lastId = 0;

// export default createReducer([], {
//     // key: value
//     // actions: function (event => event handler)
//     userAdded: (user, action) => {
//         user.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false,
//         });
//     },
//     userRemoved: (user, action) => {
//         user.filter(user => user.id !== action.payload.id)
//     },
//     userResolved: (user, action) => {
//         const index = user.findIndex(user => user.id === action.payload.id);
//         user[index].resolved = true;
//     }
// })

// export default function reducer (state = [], action) {
//     if (action.type === userAdded.type)
//         return [
//             ...state,
//             {
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false,
//             }
//         ];
//         else if (action.type === userRemoved.type)
//             return state.filter(user => user.id !== action.payload.id)
//         else if (action.type === userResolved.type)
//             return state.map(user => user.id !== action.payload.id ? user : {...user, resolved: true})

//     return state;
// }
