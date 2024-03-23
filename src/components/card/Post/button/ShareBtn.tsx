'use client';

export default function ShareButton() {
  return (
    <button onClick={() => {}}>
      <svg
        aria-label="Sharing the post"
        className="hover:text-gray-500"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Sharing the post</title>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
          x1="22"
          x2="9.218"
          y1="3"
          y2="10.083"
        ></line>
        <polygon
          fill="none"
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
      </svg>
    </button>
  );
}
