function example() {
  return (
    <CurrentUserConsumer>
      {user =>
        <BookConsumer>
          {books =>
            <header>
              Welcome back, {user.name}!
              You have {books.length} books in your collection.
            </header>
          }
      </BookConsumer>
      }
    </CurrentUserConsumer>
  );
}

