const fetchSearch = async ({ queryKey }) => {
  const { location, animal, breed } = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!res) {
    throw new Error(`Pet search not okay ${animal} ,${location},${breed}`);
  }

  return res.json();
};

export default fetchSearch;
