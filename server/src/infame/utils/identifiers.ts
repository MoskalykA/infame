function haveIdentifier(identifier: string, identifiers: string[]) {
  identifiers.map((identifier: string) => {
    if (identifier.match(identifier)) {
      return true;
    }
  });

  return false;
}
