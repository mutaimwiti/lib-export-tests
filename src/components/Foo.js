import Foo from "../Acme/Foo";

const foo = new Foo();

export default function Car() {
  return (
    <>
      <h2>Foo</h2>
      <p>
        {foo.someMap.x} {foo.someMap.y}
      </p>
    </>
  );
}
