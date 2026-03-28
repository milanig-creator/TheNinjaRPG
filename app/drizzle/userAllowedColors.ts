// Pre-set palette of allowed user colors (excluding reserved staff/role colors)
// These colors are visually distinct, accessible, and avoid staff colors
export const ALLOWED_USER_COLORS = [
  // Exclude: #0ea5e9, #38bdf8 (sky blue), #6b7280, #9ca3af (silver/gray), #d97706, #fbbf24 (gold/amber), #eab308 (gold), #1d4ed8 (blue)
  '#2563eb', // Royal Blue
  '#14b8a6', // Teal
  '#22d3ee', // Cyan
  '#059669', // Emerald
  '#84cc16', // Lime
  '#facc15', // Yellow
  '#f97316', // Orange
  '#ea580c', // Deep Orange
  '#db2777', // Pink
  '#a21caf', // Purple
  '#7c3aed', // Violet
  '#6d28d9', // Indigo
  '#64748b', // Slate
  '#334155', // Dark Slate
  '#f3f4f6', // Light Gray
  '#d1d5db', // Gray
  '#111827', // Almost Black
  '#fff',    // White
];

// Utility: Given a hex color, return 'black' or 'white' for best contrast
export function getContrastTextColor(hex: string): 'black' | 'white' {
  // Remove # if present
  hex = hex.replace('#', '');
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? 'black' : 'white';
}
