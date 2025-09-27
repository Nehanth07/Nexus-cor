import React from "react";

export function Button({ children, className = "", variant, size, ...props }) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none";
  const variantClass =
    variant === "ghost"
      ? "bg-transparent hover:bg-slate-100 text-slate-700"
      : "bg-slate-800 text-white hover:bg-slate-700";
  const sizeClass = size === "icon" ? "p-2" : "px-6 py-3";

  return (
    <button className={`${base} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
