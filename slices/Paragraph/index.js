/**
 * @typedef {import("@prismicio/client").Content.ParagraphSlice} ParagraphSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ParagraphSlice>} ParagraphProps
 * @param {ParagraphProps}
 */
const Paragraph = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for paragraph (variation: {slice.variation}) Slices
    </section>
  )
}

export default Paragraph
