import React from 'react';
import { useStore } from 'reactflow';

export default ({ fromX, fromY, toX, toY }) => {
  const midX = fromX + (toX - fromX) * 0.5;
  const { connectionHandleId } = useStore();

  return (
    <g>
      <path
        fill="none"
        stroke='white'
        strokeWidth={2}
        className="animated"
        d={`M${fromX},${fromY} C${midX},${fromY} ${midX},${toY} ${toX},${toY}`}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#fff"
        r={3}
        stroke='white'
        strokeWidth={2}
      />
    </g>
  );
};