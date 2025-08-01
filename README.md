# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a sleek design with smooth animations, bilingual support (Vietnamese/English), and interactive navigation.

## 🌟 Features

### **Design & Layout**
- **Modern UI/UX**: Clean, professional design with gradient backgrounds and glass-morphism effects
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and hover effects for enhanced user experience
- **Video Background**: Dynamic video background in the hero section

### **Navigation & Interaction**
- **Multi-level Navigation**: Header navigation, sidebar navigation, and navigation dots
- **Smooth Scrolling**: Seamless scrolling between sections with active state highlighting
- **Hover Effects**: Interactive hover animations on navigation items and buttons
- **Active State Management**: Real-time highlighting of current section in navigation

### **Internationalization**
- **Bilingual Support**: Full Vietnamese/English language switching
- **Dynamic Content**: All text content updates when switching languages
- **Smooth Transitions**: Fade and blur effects during language transitions
- **Persistent State**: Language preference maintained during navigation

### **Content Sections**
- **Hero Section**: Introduction with video background and call-to-action buttons
- **Personal Information**: Detailed personal info with contact details
- **Skills Section**: Technical skills with animated progress bars
- **About Section**: Comprehensive about content with multiple subsections
- **Social Links**: Facebook and GitHub integration

### **Technical Features**
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Custom Properties**: Consistent theming with CSS variables
- **Intersection Observer**: Scroll-triggered animations
- **Backdrop Filter**: Glass-morphism effects for modern aesthetics

## 🚀 Getting Started

### **Prerequisites**
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - pure HTML, CSS, and JavaScript

### **Installation**

1. **Clone or Download**
   ```bash
   # If using git
   git clone [repository-url]
   
   # Or download the ZIP file and extract
   ```

2. **Open the Project**
   ```bash
   # Navigate to the project directory
   cd personal-portfolio
   
   # Open index.html in your browser
   # Or use a local server for better development experience
   ```

3. **Local Development Server** (Optional)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the Website**
   - Open your browser and go to `http://localhost:8000`
   - Or simply double-click `index.html` to open directly

## 📁 Project Structure

```
personal-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── avata.png           # Profile avatar image
├── backround.mp4       # Hero section background video
├── info.mp4            # Information section video
├── meme.gif            # Hero section GIF
└── README.md           # This file
```

## 🎨 Customization

### **Personal Information**
Edit the following files to customize your personal information:

1. **HTML Structure** (`index.html`)
   - Update personal info values in the `.info-value` elements
   - Modify social media links in the `.social-links` section

2. **Content Translation** (`script.js`)
   - Update the `translations` object with your personal information
   - Modify both Vietnamese (`vi`) and English (`en`) content

### **Styling**
Customize the appearance in `styles.css`:

- **Colors**: Update CSS custom properties for consistent theming
- **Fonts**: Modify font families and sizes
- **Animations**: Adjust transition durations and effects
- **Layout**: Modify grid and flexbox properties

### **Images and Media**
Replace the media files with your own:
- `avata.png` - Your profile picture
- `backround.mp4` - Hero section background video
- `info.mp4` - Information section video
- `meme.gif` - Hero section GIF

## 🔧 Technical Details

### **HTML Structure**
- Semantic HTML5 elements for better accessibility
- Proper meta tags for SEO and mobile optimization
- Font Awesome integration for icons

### **CSS Architecture**
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- Advanced animations and transitions

### **JavaScript Functionality**
- DOM manipulation for dynamic content
- Event listeners for user interactions
- Intersection Observer for scroll animations
- Language switching with smooth transitions

### **Browser Support**
- Modern browsers (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- CSS Grid and Flexbox support required
- JavaScript ES6+ features

## 🌐 Deployment

### **Static Hosting**
This website can be deployed on any static hosting service:

- **GitHub Pages**: Free hosting for public repositories
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast deployment with Git integration
- **Firebase Hosting**: Google's hosting solution

### **Deployment Steps**
1. Upload all files to your hosting service
2. Ensure all file paths are correct
3. Test the website functionality
4. Update any absolute URLs if needed

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Key Features Explained

### **Language Switching**
The website uses a centralized translation system:
- All text content is stored in the `translations` object
- Smooth fade and blur transitions during language changes
- Persistent language state across page interactions

### **Navigation System**
Three-level navigation system:
- **Header Navigation**: Main sections (Home, Personal Info, About)
- **Sidebar Navigation**: Vertical navigation with hover effects
- **Navigation Dots**: Visual indicators for current section

### **Animation System**
- **Scroll-triggered**: Elements animate when they come into view
- **Hover Effects**: Interactive feedback on user actions
- **Smooth Transitions**: Consistent timing for all animations

## 🤝 Contributing

This is a personal portfolio project, but if you find any issues or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Phan Công Luận**
- Student at University
- Information Technology Major
- Passionate about web development

## 🔗 Contact

- **Facebook**: [Phan Công Luận](https://www.facebook.com/luanpc78)
- **GitHub**: [luanpc-78](https://github.com/luanpc-78)

---

**Note**: This portfolio website is designed to showcase personal information and skills. Feel free to customize it according to your needs and preferences.
