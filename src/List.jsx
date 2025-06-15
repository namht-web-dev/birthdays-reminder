import Person from "./Person";

const List = ({ people }) => {
  return (
    <section className="">
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};
export default List;
