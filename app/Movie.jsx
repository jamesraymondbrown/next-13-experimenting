import Link from "next/link";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(poster_path);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <img
          src={imagePath + poster_path}
          alt={`poster${id}`}
          width="800"
          height="800"
        />
      </Link>
    </div>
  );
}
