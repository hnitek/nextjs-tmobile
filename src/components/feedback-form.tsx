'use client';

import { sendForm } from '@/lib/send-form';
import { useState } from 'react';

export interface FormData {
  name: string;
  email: string;
  feedback: string;
}

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    feedback: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitSuccess(false);

      await sendForm(formData)
        .then((response) => {
          setFormData({
            name: '',
            email: '',
            feedback: '',
          });
          setSubmitSuccess(true);
        })
        .catch(() => {})
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md py-8">
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus-visible:ring-1 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus-visible:ring-1 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="feedback" className="mb-2 block font-bold text-gray-700">
          Feedback
        </label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          rows={4}
          aria-required="true"
          aria-invalid={!!errors.feedback}
          aria-describedby={errors.feedback ? 'feedback-error' : undefined}
          className={`w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none focus-visible:ring-1 ${errors.feedback ? 'border-red-500' : 'border-gray-300'}`}></textarea>
        {errors.feedback && (
          <p id="feedback-error" className="mt-1 text-xs text-red-500">
            {errors.feedback}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="focus:shadow-outline w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:opacity-50">
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
      {submitSuccess && (
        <p id="success-message" className="mt-4 rounded-md bg-green-700 p-3 text-white" tabIndex={-1}>
          Thank you for your feedback!
        </p>
      )}
    </form>
  );
};

export default FeedbackForm;
