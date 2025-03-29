
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startupIdea: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show toast notification
    toast({
      title: "Form Submitted",
      description: "We'll be in touch with you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      startupIdea: '',
      message: ''
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg mb-2 font-bebas">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="brutalist-input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-lg mb-2 font-bebas">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="brutalist-input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="startupIdea" className="block text-lg mb-2 font-bebas">STARTUP IDEA</label>
          <input
            type="text"
            id="startupIdea"
            name="startupIdea"
            value={formData.startupIdea}
            onChange={handleChange}
            className="brutalist-input"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-lg mb-2 font-bebas">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="brutalist-input"
            required
          />
        </div>
        
        <button type="submit" className="brutalist-btn w-full">
          SUBMIT APPLICATION
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
