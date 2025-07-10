"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			theme={"light"}
			className="toaster group"
			style={
				{
					"--normal-bg": "var(--color-background)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--color-blue-light)",
				} as React.CSSProperties
			}
			{...props}
		/>
	);
};

export { Toaster };
