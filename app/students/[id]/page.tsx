import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Student {
  id: number;
  name: string;
  email: string;
  courses: string[];
}

const initialStudents: Student[] = [
  { id: 1, name: 'Alice Smith', email: 'alice.smith@example.com', courses: ['Math', 'Science'] },
  { id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com', courses: ['History', 'English'] },
  { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', courses: ['Art', 'Music'] },
];

const StudentDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const studentId = parseInt(id as string, 10);
      if (isNaN(studentId)) {
        setError('Invalid student ID.');
        setLoading(false);
        return;
      }

      const fetchStudent = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          const foundStudent = initialStudents.find((s) => s.id === studentId);

          if (!foundStudent) {
            setError('Student not found.');
            setStudent(null); // Explicitly set student to null when not found
          } else {
            setStudent(foundStudent);
          }
        } catch (err: any) {
          setError(err.message || 'Failed to fetch student details.');
        } finally {
          setLoading(false);
        }
      };
      fetchStudent();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 flex justify-center items-center">
        <p>Loading student details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p className="text-gray-700">{error}</p>
        <Button variant="outline" onClick={() => router.push('/students')}>
          Back to Student List
        </Button>
      </div>
    );
  }

  if (!student) {
    return null;
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">{student.name}</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">Student Details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Email:</span>
            <span className="ml-2 text-gray-900 dark:text-gray-200">{student.email}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700 dark:text-gray-300">Courses:</span>
            {student.courses.length > 0 ? (
              <ul className="list-disc list-inside ml-4">
                {student.courses.map((course, index) => (
                  <li key={index} className="text-gray-900 dark:text-gray-200">{course}</li>
                ))}
              </ul>
            ) : (
              <span className="ml-2 text-gray-500 dark:text-gray-400">No courses enrolled</span>
            )}
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => router.push(`/students/edit/${student.id}`)}>
              Edit Student
            </Button>
            <Button variant="secondary" onClick={() => router.push('/students')}>
              Back to Student List
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDetails;
