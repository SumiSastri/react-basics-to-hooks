function example() {
  const user = useContext(CurrentUser);
  const books = useContext(Books);

  return (
    <header>
      Welcome back, {user.name}!
      You have {books.length} books in your collection.
    </header>
  );
}
