import { eat, bath } from "../Acme/Person/jane";
import { wash, cook } from "../Acme/Person/john";

export default function Person() {
  return (
    <>
      <h2>Person</h2>
      <h3>Jane</h3>
      <div>
        {eat()} {bath()}
      </div>
      <h3>John</h3>
      <div>
        {wash()} {cook()}
      </div>
    </>
  );
}
