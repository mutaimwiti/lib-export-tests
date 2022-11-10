import { piston } from "../Acme/Car/engine";

export default function Car() {
  return (
    <>
      <h2>Car</h2>
      <p>
        <b>Piston:</b> {piston()}
      </p>
    </>
  );
}
