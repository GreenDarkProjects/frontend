import React from "react";

export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    variants?: "green" | "red"
}