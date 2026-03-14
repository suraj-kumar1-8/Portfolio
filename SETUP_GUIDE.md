# Portfolio Setup & Configuration Guide

## Quick Start

All the improvements have been successfully implemented! Here's what was added:

### ✅ Completed Implementations

1. **Skills Section** - Categorized by Frontend, Backend, Programming Languages, Databases, Cloud & AWS
   - Interactive clickable tabs
   - Animated progress bars
   - Hover effects with smooth transitions

2. **Projects Section** - Filterable showcase
   - Filter categories: All Projects, Full Stack, Frontend, AI
   - Smooth animations when switching filters
   - Project cards with tech stack badges

3. **Certifications Section** - Replaces Experience section
   - Modern certificate cards (6-7 certificates)
   - Modal popup for viewing certificates
   - Year badges and descriptions

4. **Achievements Section** - Modern achievement cards
   - LeetCode (200+ Problems)
   - HackerRank (5★ Rating)
   - HackVega Coding Contest (AIR 221)
   - Additional achievements with highlighted numbers

5. **Contact Section** - Two-column responsive layout
   - Left: Contact form with name, email, message
   - Right: Contact information cards with social links
   - Quick links section

6. **Email Functionality** - EmailJS Integration
   - Modern @emailjs/browser package installed
   - Form states: idle, sending, success, error
   - Animated status messages

## ⚙️ Configuration Required

### 1. EmailJS Setup

To enable email functionality:

**Step 1:** Go to [EmailJS Dashboard](https://dashboard.emailjs.com)

**Step 2:** Create an account and get your credentials:

- `PUBLIC_KEY`
- `SERVICE_ID`
- `TEMPLATE_ID`

**Step 3:** Update these values in [Contact.jsx](src/components/Contact.jsx):

```javascript
// Line ~45-54 - Replace these values:
await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your service ID
  "YOUR_TEMPLATE_ID", // Replace with your template ID
  {
    user_name: formData.user_name,
    user_email: formData.user_email,
    message: formData.message,
    to_email: "your-email@example.com", // Replace with your email
  },
  "YOUR_PUBLIC_KEY", // Replace with your public key
);
```

Also update the initialization (line ~43):

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

### 2. Update Contact Information

Edit [Contact.jsx](src/components/Contact.jsx) around line ~70-90 to update:

```javascript
const contactInfo = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@your-username",
    link: "https://github.com/your-username",
    color: "text-slate-300",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Your Name",
    link: "https://linkedin.com/in/your-profile",
    color: "text-blue-400",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "your-email@example.com",
    link: "mailto:your-email@example.com",
    color: "text-red-400",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 XXXXXXXXXX",
    link: "tel:+91XXXXXXXXXX",
    color: "text-green-400",
  },
];
```

### 3. Update Certifications

Edit [Certifications.jsx](src/components/Certifications.jsx) around line ~14-39 to add your actual certifications:

```javascript
const certifications = [
  {
    title: "Your Certification Title",
    organization: "Organization Name",
    year: "2024",
    description: "Brief description of what you learned",
    certificateUrl: "https://link-to-your-certificate.pdf", // Add actual link
  },
  // Add more certifications...
];
```

### 4. Customize Colors

The entire design uses a consistent color scheme. To change colors throughout:

- **Primary Colors**: Purple, Sky Blue, Emerald (gradient-based)
- Edit Tailwind classes in components:
  - `from-purple-600 to-sky-500` - Change to your brand colors
  - `text-sky-400` - Change accent color
  - `bg-gradient-to-r from-purple-500...` - Change gradient

### 5. Test Email Functionality

1. Fill out the contact form in your dev environment
2. Click "Send Message"
3. Check that:
   - Loading state shows "Sending…"
   - Success message appears after 2-3 seconds
   - Form resets after success

## 📱 Responsive Design

All sections are fully responsive:

- Mobile: Single column layouts
- Tablet: 2 columns
- Desktop: 3+ columns where applicable

## 🚀 Deployment on Vercel

When deploying to Vercel:

1. Set environment variables for sensitive data:

   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

2. Update Contact.jsx to use environment variables:
   ```javascript
   emailjs.send(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     {...},
     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   )
   ```

## 🎨 Features Overview

### Skills Section

- Click category tabs to filter skills
- Animated progress bars with percentage
- Smooth transitions between categories
- Responsive grid (1 column on mobile, 3 on desktop)

### Projects Section

- Filter buttons for different project types
- Smooth animation when switching filters
- Project cards show category badge
- Click cards to view case studies

### Certifications Section

- Modern glass-card design
- Modal popup when clicking "View Certificate"
- Year badges on each card
- Close button with smooth animations

### Achievements Section

- 6 achievement cards with icons
- Highlighted numbers (200+, 5★, AIR 221, etc.)
- Color-coded backgrounds
- Animated accent lines on hover

### Contact Section

- Two-column responsive layout
- Left: Clean contact form with validation
- Right: Social media links + quick links
- Animated form status messages

## 🔧 Customization Tips

1. **Modify Skill Proficiency**: Edit `skillsData` object in Skills.jsx
2. **Add More Projects**: Add objects to `projects` array in Projects.jsx, add corresponding category
3. **Update Certifications**: Edit `certifications` array in Certifications.jsx
4. **Change Achievement Numbers**: Modify `highlight` field in achievements array
5. **Adjust Animations**: Edit constants in [constants/animations.js](src/constants/animations.js)

## 📦 Package Dependencies

All required packages are already installed:

- `@emailjs/browser` - Modern EmailJS package
- `framer-motion` - Animations
- `react-icons` - Social icons
- `tailwindcss` - Styling

## 🧪 Testing Checklist

- [ ] Skills section filters working smoothly
- [ ] Projects filter showing correct categories
- [ ] Certifications modal opens/closes properly
- [ ] Contact form validates inputs
- [ ] EmailJS sends test email successfully
- [ ] All animations are smooth on mobile
- [ ] Social links open correctly
- [ ] No console errors in dev tools

## ❓ Troubleshooting

**EmailJS not sending:**

- Verify SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
- Check EmailJS dashboard for active service
- Ensure email template has required variables

**Animations not smooth:**

- Check browser performance (DevTools)
- Verify Framer Motion is correctly imported
- Clear browser cache and rebuild

**Styles not applying:**

- Run `npm run build` to rebuild Tailwind
- Clear cache: `npm run dev` with --force flag
- Check class names for typos

---

Your portfolio is now production-ready! Happy coding! 🚀
