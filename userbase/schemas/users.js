export default {
    name: 'users',
    title: 'USERS',
    type: 'document',
    fields: [
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'firstname',
        title: 'Firstname',
        type: 'string',
      },
      { 
        name: 'lastname',
        title: 'Lastname',
        type: 'string',
      },
      { 
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      { 
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      { 
        name: 'password',
        title: 'Password',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'investment',
        title: 'Investment',
        type: 'number',
      },
      { 
        name: 'phone',
        title: 'Phone',
        type: 'number',
      },
      { 
        name: 'pin',
        title: 'Pin',
        type: 'number',
      },
      { 
        name: 'service',
        title: 'Service',
        type: 'string',
      },
      { 
        name: 'region',
        title: 'Region',
        type: 'string',
      },
      { 
        name: 'demo',
        title: 'Demo',
        type: 'boolean',
      },
      { 
        name: 'earnings',
        title: 'Earnings',
        type: 'array',
        of: [{ type: 'number' }],
      },
      { 
        name: 'transactions',
        title: 'Transactions',
        type: 'array',
        of: [
          {
            title: 'transaction',
            type: 'object',
            fields: [
              {
                title: 'Sendername',
                name: 'sendername',
                type: 'string'
              } ,
              {
                title: 'Amount',
                name: 'amount',
                type: 'number'
              } ,
              {
                title: 'Type',
                name: 'type',
                type: 'string'
              } ,
              {
                title: 'Status',
                name: 'status',
                type: 'string'
              } ,
            ]
          }
        ]
      },
      { 
        name: 'notifications',
        title: 'Notifications',
        type: 'array',
        of: [
          {
            title: 'notification',
            type: 'object',
            fields: [
              {
                title: 'Title',
                name: 'title',
                type: 'string'
              } ,
              {
                title: 'Message',
                name: 'message',
                type: 'string'
              } ,
              {
                title: 'Read',
                name: 'read',
                type: 'boolean'
              } ,
              {
                title: 'Created',
                name: 'created',
                type: 'datetime',
                initialValue: (new Date()).toISOString()
              } ,
              { 
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: {
                  source: 'title',
                  maxLength: 90,
                }
              },
              
            ]
          }
        ]
      },
      { 
        name: 'accounts',
        title: 'Accounts',
        type: 'array',
        of: [
          {
            title: 'account',
            type: 'object',
            fields: [
              {
                title: 'Type',
                name: 'type',
                type: 'string'
              } ,
              {
                title: 'Balance',
                name: 'balance',
                type: 'string'
              } ,
              {
                title: 'Number',
                name: 'number',
                type: 'string'
              } ,
              
              { 
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: {
                  source: 'number',
                  maxLength: 90,
                }
              },
              
            ]
          }
        ]
      },
      { 
        name: 'witheld',
        title: 'Witheld',
        type: 'number',
      },
      
    ]
  }