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
        type: 'string',
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
        name: 'plan',
        title: 'Plan',
        type: 'string',
      }
    ]
  }