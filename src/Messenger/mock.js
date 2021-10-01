export const OWNER_PROFILE_ID = '4';

export const USERS = [
  {
    id: '1',
    name: 'Bob',
    avatarUrl: 'https://e7.pngegg.com/pngimages/159/401/png-clipart-discord-android-computer-icons-discord-video-game-smiley.png',
  },
  {
    id: '2',
    name: 'Pitter',
    avatarUrl: 'https://img.favpng.com/4/0/5/discord-avatar-twitch-youtube-png-favpng-HKg5vRpikZ45RANzEvm2H77Us.jpg',
  },
  {
    id: '3',
    name: 'Lee',
    avatarUrl: 'https://i.pinimg.com/originals/53/af/8e/53af8e52eb6cb583219d5d9ffbd545ff.jpg',
  },
]

export const MESSAGES = {
  [USERS[0].id]: [
    {
      id: '1',
      date: '2021-07-29T09:32:52.068Z',
      senderId: OWNER_PROFILE_ID,
      body: 'Hello'
    },
    {
      id: '2',
      date: '2021-07-29T09:32:52.021Z',
      senderId: USERS[0].id,
      body: 'Hello'
    },
    {
      id: '3',
      date: '2021-07-29T09:32:12.068Z',
      senderId: OWNER_PROFILE_ID,
      body: 'What are you doing now?'
    },
    {
      id: '4',
      date: '2021-07-29T09:32:13.068Z',
      senderId: USERS[0].id,
      body: 'Nothing'
    },
    {
      id: '5',
      date: '2021-07-29T09:32:13.068Z',
      senderId: USERS[0].id,
      body: 'Are you?'
    }
  ],
  [USERS[1].id]: [{
      id: '1',
      date: '2021-07-29T09:32:52.068Z',
      senderId: OWNER_PROFILE_ID,
      body: 'Hello Pitter'
    },
    {
      id: '2',
      date: '2021-07-29T09:32:52.021Z',
      senderId: USERS[1].id,
      body: 'Hello'
    },
    {
      id: '3',
      date: '2021-07-29T08:45:43.530Z',
      senderId: OWNER_PROFILE_ID,
      body: "Why you did'nt call me?"
    },
    {
      id: '4',
      date: '2021-07-29T09:32:12.068Z',
      senderId: USERS[1].id,
      body: 'Sorry man'
    },
    {
      id: '5',
      date: '2021-07-29T09:32:52.068Z',
      senderId: USERS[1].id,
      body: 'I forgot'
    }
  ],
  [USERS[2].id]: [{
      id: '1',
      date: '2021-07-29T09:32:52.068Z',
      senderId: OWNER_PROFILE_ID,
      body: 'Hello Pitter'
    },
    {
      id: '2',
      date: '2021-07-29T09:32:52.021Z',
      senderId: USERS[2].id,
      body: "I'm not Pitter, I'm Lee"
    },
    {
      id: '3',
      date: '2021-07-29T08:45:43.530Z',
      senderId: OWNER_PROFILE_ID,
      body: "Oh, sorry Lee!"
    },
  ]
}