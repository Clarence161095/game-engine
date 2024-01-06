const SRC_ROUTE = 'https://raw.githubusercontent.com/Clarence161095/pokemon_data/main/animated/gen5_24FPS/'

export default function Image({ id = 10, srcSource = SRC_ROUTE }) {
  return (
    <img src={`${srcSource}${id}.gif`} />
  )
}
