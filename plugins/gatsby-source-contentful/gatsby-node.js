const contentful = require('contentful')
const crypto = require('crypto')

exports.sourceNodes = async ({ actions }, { space, accessToken }) => {
  const { createNode } = actions

  const client = contentful.createClient({ space, accessToken })
  const entries = await client.getEntries()
  
  entries.items.forEach(item => {
    createNode({
      id: `contentful.${item.sys.contentType.sys.id}.${item.sys.id}`,
      parent: null,
      children: [],
      internal: {
        type: 'ContentfulEntry',
        contentDigest: crypto.createHash('md5').update(JSON.stringify(item)).digest('hex'),
      },

      slug: item.fields.slug,
      entry_type: item.sys.contentType.sys.id,
      created: item.sys.createdAt,

      field_name: item.fields.name,
      field_body: item.fields.body,

      field_teaser_image: item.fields.teaserImage.fields.file,
      field_featured_image: item.fields.featuredImage.fields.file,
    })
  })
}