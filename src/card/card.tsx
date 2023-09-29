import React, { ReactNode } from "react";

export interface CardProps {
  img?: { src: string; alt: string };
  title?: string;
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <section data-card>
      <header>Header</header>
      {children}
    </section>
  );
};
