"use client";
import { cn } from "@/lib/utils";
import { DndContext, DragEndEvent, useDraggable } from "@dnd-kit/core";
import { createSnapModifier, restrictToWindowEdges } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const gridSize = 100;
function Draggable({
  position,
}: {
  position: { x: number; y: number; scaleX: number; scaleY: number };
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: "draggable",
    });
  console.log(isDragging);
  console.log(CSS.Translate.toString(transform));
  const transformedStyle = CSS.Translate.toString(transform);

  const style = {
    transform: transformedStyle,
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: isDragging ? 0.8 : 1,
    touchAction: "none",
  };

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex items-center justify-center transition-[opacity,width,height] cursor-grab duration-200 ease-in-out"
      )}
      style={{
        position: "absolute",

        width: isDragging ? 110 : 100,
        height: isDragging ? 110 : 100,
        // width: 100,
        // height: 100,
        backgroundColor: "#4A90E2",
        color: "white",
        ...style,
      }}
      {...attributes}
      {...listeners}
    >
      Drag me!
    </div>
  );
}

export default function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
  });
  const onDragEnd = (event: DragEndEvent) => {
    const { delta } = event;
    const x = Math.round((position.x + delta.x) / gridSize) * gridSize;
    const y = Math.round((position.y + delta.y) / gridSize) * gridSize;
    setPosition({
      x,
      y,
      scaleX: position.scaleX,
      scaleY: position.scaleY,
    });
  };

  return (
    <DndContext
      onDragEnd={onDragEnd}
      modifiers={[restrictToWindowEdges]}
      key={gridSize}
    >
      <div>
        <Draggable position={position} />
      </div>
    </DndContext>
  );
}
