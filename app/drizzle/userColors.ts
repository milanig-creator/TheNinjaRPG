// Reserved hex colors for staff/roles (from Tailwind classes in Post.tsx)
export const RESERVED_NAME_COLORS = [
  '#f87171', // bg-red-400 (OWNER, CODING-ADMIN, MODERATOR-ADMIN)
  '#fda4af', // bg-rose-300 (EVENT-ADMIN)
  '#a78bfa', // bg-purple-400 (CONTENT-ADMIN, CONTENT)
  '#10b981', // bg-emerald-700 (HEAD_MODERATOR)
  '#22c55e', // bg-green-500 (MODERATOR, JR_MODERATOR)
  '#f59e42', // bg-orange-500 (EVENT)
  '#f9a8d4', // bg-pink-300 (CODER)
  // Federal Support Colors
  '#0ea5e9', // sky-500 (Normal Support Blue)
  '#38bdf8', // sky-300 (Normal Support Blue gradient)
  '#6b7280', // gray-500 (Silver Support)
  '#9ca3af', // gray-400 (Silver Support gradient)
  '#d97706', // amber-600 (Gold Support)
  '#fbbf24', // amber-400 (Gold Support gradient)
];

// Export a function to check if a color is reserved
export function isReservedNameColor(hex: string) {
  return RESERVED_NAME_COLORS.map(c => c.toLowerCase()).includes(hex.toLowerCase());
}
