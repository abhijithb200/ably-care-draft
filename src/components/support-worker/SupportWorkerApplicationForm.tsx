"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  postcode: string;
}

const SupportWorkerApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    postcode: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const submitData = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      
      if (resume) {
        submitData.append('resume', resume);
      }

      const response = await fetch('/api/career-submit', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Something went wrong. Please try again.');
      }

      setSuccess(true);
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        postcode: '',
      });
      setResume(null);
      
      const form = e.target as HTMLFormElement;
      const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-poppins text-gray-800">Apply to Join Our Team</CardTitle>
      </CardHeader>
      <CardContent>
        {success && (
          <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
            <AlertDescription>
              Your application has been submitted successfully. We'll be in touch soon!
            </AlertDescription>
          </Alert>
        )}
        
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number*</Label>
              <Input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="postcode">Postcode*</Label>
              <Input
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <Label htmlFor="resume">Upload Resume (PDF, DOC, DOCX)*</Label>
            <Input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
              className="cursor-pointer"
            />
            <p className="text-xs text-gray-500 mt-1">
              Max file size: 5MB
            </p>
          </div>
          
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-customAccent hover:bg-complementary transition-all duration-300 ease-in-out"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SupportWorkerApplicationForm;