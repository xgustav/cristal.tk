import cta from 'src/components/CallToAction/config'

export default {
  name: 'imageCallout',
  label: 'Image Callout',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
      required: false
    },
    {
        name: 'image',
        label: 'Image',
        widget: 'image',
        required: false
    },
      cta,
      {
          name: 'description',
          label: 'Left pane Description',
          widget: 'markdown',
          required: false
      },
      {
          name: 'description2',
          label: 'Right pane Description',
          widget: 'markdown',
          required: false
      }
  ]
}
