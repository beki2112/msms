"use client";
import React, { useState, FormEvent, ChangeEvent, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';

interface FormValues {
  name: string;
  email: string;
}

const AddStudent = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => { // Explicitly type e
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(async (e: FormEvent) => { // Explicitly type e
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation (basic)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate an API call (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form Data:', formData);

      // Reset form on success and redirect
      setFormData({ name: '', email: '' });
      toast({
        variant: "default",
        title: "Success",
        description: "Student added successfully!",
      });
      router.push('/students');

    } catch (error: any) {
      const errorMessage = error.message || 'Failed to add student. Please try again.';
      setSubmitError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast, router]);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add Student</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name:
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className={cn(
                "mt-1 w-full",
                submitError && !formData.name.trim() && "border-red-500 focus:ring-red-500 focus:border-red-500",
              )}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email:
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter student email"
              className={cn(
                "mt-1 w-full",
                submitError && !formData.email.trim() && "border-red-500 focus:ring-red-500 focus:border-red-500",
                submitError && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email) && "border-red-500 focus:ring-red-500 focus:border-red-500"
              )}
              disabled={isSubmitting}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Student'}
          </Button>
          {submitError && (
            <p className="text-red-500 text-sm">{submitError}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
