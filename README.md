# Resino Box Jewelry Website

A modern, responsive e-commerce website for Resino Box, showcasing a collection of handcrafted jewelry including necklaces, bracelets, charms, and jewelry sets.

## Overview

This project is a static website for Resino Box, a jewelry retailer specializing in high-quality, anti-tarnish jewelry. The website features a clean, elegant design that showcases the product collections with responsive layouts optimized for all devices.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Product Categories**: Organized sections for necklaces, bracelets, charms, and jewelry sets
- **Interactive Elements**: 
  - Animated product displays
  - Sliding catalog of featured products
  - Hover effects and smooth transitions
- **Accessible Navigation**: User-friendly menu with clear product categorization
- **Contact Information**: Easy access to the brand's contact details and social media

## Technology Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome for icons
- Google Fonts (Alex Brush, Quicksand)

## File Structure

```
jewelry-website/
│
├── index.html               # Homepage with featured collections
├── products.html            # All product categories overview
├── necklaces.html           # Necklaces collection page
├── bracelet.html            # Bracelets collection page
├── charms.html              # Charms collection page
├── sets.html                # Jewelry sets collection page
│
├── styles/
│   └── style.css            # Main stylesheet for the entire website
│
├── scripts/
│   ├── main.js              # Core JavaScript for product display
│   └── helper.js            # Helper functions for UI interactions
│
├── images/
│   ├── logo.jpg             # Brand logo
│   ├── placeholder.jpg      # Placeholder image
│   ├── necklaces/           # Necklace product images
│   ├── bracelets/           # Bracelet product images
│   ├── charms/              # Charm product images
│   ├── sets/                # Jewelry sets images
│   └── rings/               # Future ring collection images
│
└── README.md                # Project documentation
```

## Design Features

- **Color Palette**: Elegant warm tones (gold, beige, brown) for a premium feel
- **Typography**: Combination of decorative script (Alex Brush) and clean sans-serif (Quicksand) fonts
- **Product Cards**: Consistent sizing with hover animations
- **Catalog Slider**: Auto-scrolling feature showcasing highlighted products
- **Responsive Components**: Adapts layout and sizing based on screen dimensions

## Setup and Usage

1. Clone the repository to your local machine
2. No build process required - open the HTML files directly in a browser
3. To make changes:
   - Edit HTML files for content structure
   - Modify CSS in styles/style.css for design changes
   - Update JavaScript in scripts/main.js for functionality

## Product Management

Product data is managed in the `main.js` file with organized arrays for each product category. To add new products:

1. Add product images to the appropriate folder in the images directory
2. Update the product arrays in scripts/main.js with new product information
3. The website will automatically display new products in their respective category pages

## Maintenance

- Update product images and details in the scripts/main.js file
- Add new collections by creating new HTML pages following the existing pattern and adding corresponding product data

## Contact

For inquiries about this website, contact Resino Box:
- Email: resinobox@gmail.com
- Instagram: [@resino.box](https://www.instagram.com/resino.box)