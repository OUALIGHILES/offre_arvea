"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ArveaLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "white" | "primary"
  showText?: boolean
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12", 
  lg: "h-16 w-16",
  xl: "h-20 w-20"
}

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl", 
  xl: "text-3xl"
}

export function ArveaLogo({ 
  className, 
  size = "md", 
  variant = "default",
  showText = true 
}: ArveaLogoProps) {
  const logoSvg = (
    <svg
      viewBox="0 0 200 60"
      className={cn(sizeClasses[size], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ARVEA Text Logo */}
      <g fill={variant === "white" ? "#FFFFFF" : "#1F2937"}>
        {/* Letter A with inverted V crossbar */}
        <path d="M10 45 L15 30 L20 30 L25 45 L22 45 L20.5 40 L14.5 40 L13 45 Z M15 35 L20 35 L19 32 L16 32 Z" />
        
        {/* Letter R */}
        <path d="M30 30 L30 45 L35 45 L35 40 L38 45 L41 45 L38 40 L40 40 L40 35 L38 35 L35 30 Z M35 35 L35 38 L38 38 L38 35 Z" />
        
        {/* Letter V */}
        <path d="M45 30 L48 30 L52 40 L56 30 L59 30 L54 45 L51 45 Z" />
        
        {/* Letter E */}
        <path d="M65 30 L65 45 L70 45 L70 40 L68 40 L68 35 L70 35 L70 32 L68 32 L68 30 Z" />
        
        {/* Letter A with inverted V crossbar */}
        <path d="M75 45 L80 30 L85 30 L90 45 L87 45 L85.5 40 L79.5 40 L78 45 Z M80 35 L85 35 L84 32 L81 32 Z" />
        
        {/* Registered trademark symbol */}
        <circle cx="95" cy="32" r="3" fill="none" stroke={variant === "white" ? "#FFFFFF" : "#1F2937"} strokeWidth="1" />
        <text x="95" y="35" textAnchor="middle" fontSize="4" fill={variant === "white" ? "#FFFFFF" : "#1F2937"} fontFamily="serif">®</text>
      </g>
    </svg>
  )

  if (!showText) {
    return logoSvg
  }

  return (
    <div className="flex items-center space-x-3">
      {logoSvg}
      <span 
        className={cn(
          "font-bold tracking-wider uppercase",
          textSizeClasses[size],
          variant === "white" ? "text-white" : "text-gray-800"
        )}
      >
        ARVEA
      </span>
    </div>
  )
}

// Logo simple pour le favicon
export function ArveaLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 20"
      className={cn("h-8 w-16", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#1F2937">
        {/* Letter A with inverted V crossbar */}
        <path d="M2 15 L3.5 10 L4.5 10 L6 15 L5 15 L4.5 13 L3 13 L2.5 15 Z M3.5 11 L4 11 L3.8 12 L3.2 12 Z" />
        
        {/* Letter R */}
        <path d="M7 5 L7 15 L8.5 15 L8.5 10.5 L10 15 L11.5 15 L10 10.5 L10 5 Z M8.5 8 L8.5 9.5 L10 9.5 L10 8 Z" />
        
        {/* Letter V */}
        <path d="M13 5 L14 5 L15.5 10 L17 5 L18 5 L16 15 L15 15 Z" />
        
        {/* Letter E */}
        <path d="M19 5 L19 15 L20.5 15 L20.5 10 L20 10 L20 8.5 L20.5 8.5 L20.5 6.5 L20 6.5 L20 5 Z" />
        
        {/* Letter A with inverted V crossbar */}
        <path d="M22 15 L23.5 10 L24.5 10 L26 15 L25 15 L24.5 13 L23 13 L22.5 15 Z M23.5 11 L24 11 L23.8 12 L23.2 12 Z" />
      </g>
    </svg>
  )
}
