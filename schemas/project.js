export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link',
        description: 'Link to the live website',
        type: 'string',
      },
      {
        name: 'repo',
        title: 'Repo',
        description: 'Link to the code repository',
        type: 'string',
      },
      {
        name: 'order',
        title: 'Order',
        description: 'Order in which project appears',
        type: 'string',
      },
      {
        name: 'badges',
        title: 'Badges',
        description: 'Badge codes are <add badge codes>',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  