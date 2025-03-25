import React from 'react';
import Link from 'next/link';

const students = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

export default function Students() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/students/add">Add Student</Link>
    </div>
  );
}