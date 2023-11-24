import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

function Container(props: ContainerProps) {
  const { children } = props;
  return (
    <html lang="en">
      <div className="flex h-screen flex-col">{children}</div>
    </html>
  );
}

export default Container;
