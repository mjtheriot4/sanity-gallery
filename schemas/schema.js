// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "pitch",
      type: "document",
      title: "Pitch",
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'presentation',
          type: 'reference',
          to: [
            {type: 'presentation'}
          ]
        },
        {
          name: 'video',
          type: 'reference',
          to: [
            { type: 'video' }
          ]
        }
      ]
    },
    {
      name: "presentation",
      type: "document",
      title: "Presentation",
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'upload1',
          type: 'file',
          title: 'Upload 1',
        },
        {
          name: 'upload2',
          type: 'file',
          title: 'Upload 2'
        }
      ]
    },
    {
      name: "video",
      type: "document",
      title: "video",
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'videoLink',
          type: 'url',
          title: 'Video Link',
        }
      ]
    },
    {
      name: "language",
      type: "document",
      title: "Language",
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'homepageContent',
          type: 'string',
          title: 'Home Page Content',
        },
      ]
    }
  ])
})
