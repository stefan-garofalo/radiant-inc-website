/**
 * @typedef {import("@prismicio/client").Content.ListSlice} ListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListSlice>} ListProps
 * @param {ListProps}
 */
const List = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for list (variation: {slice.variation}) Slices
    </section>
  );
};

export default List;
