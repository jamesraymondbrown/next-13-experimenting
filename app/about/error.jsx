"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      This isn't loading: {error.message}
      <button onClick={() => reset()}></button>
    </div>
  );
}
