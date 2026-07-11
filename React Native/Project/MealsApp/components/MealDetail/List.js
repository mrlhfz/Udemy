function List() {
  return (
    <>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
    </>
  )
}

export default List;