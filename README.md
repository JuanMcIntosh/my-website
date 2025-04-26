# Personal Portfolio Website

A modern, responsive portfolio website showcasing creative work, blog posts, and projects. The design is clean, minimalist, and focuses on content presentation.

## Features

- Responsive design that works on all devices
- Clean and modern UI
- Project showcase grid with interactive cards
- Blog section for stories and experiences
- Smooth animations and transitions
- External links to social media profiles
- Optimized for performance

## Structure

```
.
├── src/
│   ├── index.html          # Main portfolio page
│   ├── styles.css          # Main styles
│   ├── script.js           # Interactive features
│   ├── blog/              # Blog section
│   │   └── index.html     # Blog landing page
│   ├── presets/           # Lightroom presets section
│   │   └── index.html     # Presets landing page
│   ├── wallpapers/        # Wallpapers section
│   │   └── index.html     # Wallpapers landing page
│   ├── ai-projects/       # AI projects section
│   │   └── index.html     # AI projects landing page
│   └── assets/           # Images and media
│       └── profile.jpeg  # Profile image
└── README.md
```

## Project Sections

1. **Main Portfolio**
   - Personal introduction
   - Project showcase
   - Links to all sections

2. **Blog**
   - Stories and experiences
   - Photography and cinematography insights
   - Travel documentation

3. **Social Media**
   - Instagram (@candid.jm)
   - YouTube channel
   - Other creative platforms

4. **Creative Work**
   - Lightroom Presets
   - Wallpapers
   - AI Projects

## Setup

1. Clone the repository
2. Add your profile image to `src/assets/profile.jpeg`
3. Customize the content in `index.html`
4. Modify styles in `styles.css` if needed
5. Add content to individual project sections

## Running the Project

You can run this project using any web server. For a quick setup, you can use Python's built-in server:

```bash
cd src
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

- Update the profile image in the `assets` folder
- Modify the bio text in `index.html`
- Add or remove project cards as needed
- Customize colors in the CSS variables (in `styles.css`)
- Add your own content to each section

## Browser Support

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Development

To add new sections or features:
1. Create a new directory in `src/` for the section
2. Add an `index.html` file in the new directory
3. Link to it from the main page
4. Style it consistently with the main design

## License

MIT License - feel free to use this for your own portfolio!
