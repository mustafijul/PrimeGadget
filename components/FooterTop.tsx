import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
interface ContactItemData {
  title: string;
  subtitle: string;
  icon: typeof MapPin | typeof Clock | typeof Mail | typeof Phone;
}

export default function FooterTop() {
    const contactItemsData: ContactItemData[] = [
  {
    title: "Location",
    subtitle: "123 Business Street, Suite 100, City, State 12345",
    icon: MapPin
  },
  {
    title: "Time",
    subtitle: "Monday - Friday: 9:00 AM - 6:00 PM",
    icon: Clock
  },
  {
    title: "Email",
    subtitle: "contact@example.com",
    icon: Mail
  },
  {
    title: "Call",
    subtitle: "+1 (555) 123-4567",
    icon: Phone
  }
]

 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white">
    {contactItemsData.map((item, index) => {
      const IconComponent = item.icon;
      return (
        <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0  p-3 rounded-full">
            <IconComponent className="w-5 h-5 text-shop_dark_green" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
          </div>
        </div>
      );
    })}
  </div>
);
}
// Primegadget Footer