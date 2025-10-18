# JonBeckWeb

A simple website hosted on GitHub Pages.

## 🌐 Access the Website

Once deployed, your website will be accessible at:
```
https://rayngnpc.github.io/JonBeckWeb/
```

## 📁 Folder Structure

```
JonBeckWeb/
├── html/               # Your website files
│   ├── index.html      # Main HTML file
│   └── style.css       # Stylesheet
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
└── README.md           # This file
```

## 🚀 How to Deploy

The website is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment workflow:

1. Checks out the repository
2. Uploads the `html` folder as a GitHub Pages artifact
3. Deploys it to GitHub Pages

## 📝 How to Update Your Website

1. Edit the files in the `html/` folder:
   - `index.html` - Your main HTML content
   - `style.css` - Your styles
   - Add more HTML, CSS, JavaScript, or image files as needed

2. Commit and push your changes:
   ```bash
   git add html/
   git commit -m "Update website content"
   git push
   ```

3. GitHub Actions will automatically deploy your changes to GitHub Pages

## ⚙️ Setup GitHub Pages

To enable GitHub Pages for this repository:

1. Go to your repository settings: `https://github.com/rayngnpc/JonBeckWeb/settings/pages`
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. The workflow will automatically deploy your site when you push to `main`

## 🎨 Customization

Feel free to customize the HTML and CSS files in the `html/` folder to create your own unique website. You can:

- Modify the content in `index.html`
- Update styles in `style.css`
- Add new pages, images, or scripts
- Add JavaScript for interactivity

## 📄 License

This project is open source and available under the MIT License.