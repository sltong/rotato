function RangeSlider({ ...props }) {
  return (
      <div class="flex flex-col">
      <div class="relative pt-1 max-w-lg">
      <label for="customRange1" class="form-label">Example range</label>
      <input
    type="range"
    class="form-range w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
    id="customRange1"
      />
      </div>
      </div>
  )
}
