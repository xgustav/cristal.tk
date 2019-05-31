import actionBar from 'src/components/ActionBar/config'
import container from 'src/components/Container/config'

export default {
  name: 'authors',
  label: 'Author Section',
  widget: 'object',
  required: false,
  fields: [
    ...container.fields,
    {
      name: 'authors',
      label: 'Authors',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'image',
          label: 'image',
          widget: 'image'
        },
        {
          name: 'author',
          label: 'author',
          widget: 'string'
        },
        {
          name: 'company',
          label: 'company',
          widget: 'string'
        },
        {
          name: 'role',
          label: 'role',
          widget: 'string'
        }
      ]
    },
    actionBar
  ]
}
