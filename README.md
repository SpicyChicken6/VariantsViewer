# LiuZD Lab dashboard mock

Files included:
- `index.html`
- `styles.css`
- `app.js`
- `data/*.json`
- `assets/*.svg`

Please use git system to track code change.

<!-- ## Todo:

1.Swap placeholders. Replace the SVGs in `assets/` with your real logo/image files and keep the same filenames, or update the paths in `index.html` and `data/phenotypes.json`.
2. -->

# Design guidelines

- Use font sets for text, turn it into parameter settings so all text fonts can be switched easily. Use different fonts for texts of different sections or components.
- Try to keep code clean. Remove unused code or try to reuse functions to reduce the redundant code.
- Always make sure the website can dynamically adapt to different viewing size.
- The final product will have to quickly search in data files of size larger than 1GB. Make sure there is a good python backend part that can process data loading and filtering efficiently.


# Test 

- Different sections of the webpage load different data files. Always test loading data to make sure everything works.
