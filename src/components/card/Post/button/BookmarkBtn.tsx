'use client';

export default function BookmarkButton() {
  return (
    <button className="group">
      <svg
        aria-label="Save"
        className="group-hover:text-gray-500"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Save</title>
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
      </svg>
    </button>
  );
}
