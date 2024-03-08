
export default function FiltersComponent({ className }: { className?: string }) {
  return (
    <>
      {/* TODO: We are constructing our own select element/library - the normal html select is generally hard to style or work with */}
      <span>Filter By: </span>
      <select name='interest' className={className}>
        <option value="">Interest</option>
      </select>
      <select name='skill-set' className={className}>
        <option value="">Skill Set</option>
      </select>
    </>
  );
}
