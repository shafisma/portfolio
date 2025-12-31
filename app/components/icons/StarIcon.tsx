interface IconProps {
  className?: string;
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .587l3.668 7.431 8.332 1.21-6.023 5.872 1.42 8.283L12 19.695l-7.397 3.888 1.42-8.283-6.023-5.872 8.332-1.21L12 .587z" />
    </svg>
  );
}
