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
        cta,
        {
            name: 'left',
            label: 'Left pane Description',
            widget: 'markdown',
            required: false
        },
        {
            name: 'right',
            label: 'Right pane Description',
            widget: 'markdown',
            required: false
        }
    ]
}
