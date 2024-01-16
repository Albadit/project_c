import React from 'react';

export const ProgressCircle = ({ progress }: any) => {
  const radius = 100;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Adjust the rotation of the circle to start at 12 o'clock
  const rotation = -90; // Rotate 90 degrees counter-clockwise

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="rgb(141, 12, 51)"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(${rotation} ${radius} ${radius})`} // Apply rotation here
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-3xl font-semibold text-font1"
      >
        {progress}%
      </text>
    </svg>
  )
}
