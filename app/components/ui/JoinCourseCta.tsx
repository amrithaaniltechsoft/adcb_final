"use client";

import { useState } from "react";
import { Button } from "./Button";
import ConsultationModal from "./ConsultationModal";

interface JoinCourseCtaProps {
  initialCourse?: "MBBS" | "MD/MS" | "MDS";
  lockedCourse?: "MBBS" | "MD/MS" | "MDS";
  label?: string;
  variant?: "primary" | "white" | "outlineWhite" | "black" | "outlineBlack" | "ghost";
  size?: "md" | "lg";
  className?: string;
}

export default function JoinCourseCta({
  initialCourse = "MBBS",
  lockedCourse,
  label = "Join Course Now",
  variant = "primary",
  size = "md",
  className = "",
}: JoinCourseCtaProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant={variant} size={size} className={className}>
        {label}
      </Button>
      <ConsultationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        initialCourse={initialCourse}
        lockedCourse={lockedCourse}
      />
    </>
  );
}
