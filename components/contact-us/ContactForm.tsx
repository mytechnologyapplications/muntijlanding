"use client";
import { useState } from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0px_0px_23.8px_1px_#00000040] w-3/4 mx-auto">
      <h3 className="text-xl font-semibold">تواصل معنا</h3>
      <p className="mb-4">يمكنك الوصول إلينا في أي وقت</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              الاسم الأول
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary ps-2"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              الاسم الأخير
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary ps-2"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary ps-2"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            dir="rtl"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            كيف يمكننا مساعدتك ؟
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary ps-2"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full py-6"
        >
          إرسال
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
