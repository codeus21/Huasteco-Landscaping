# Theme Customization Guide

## Overview
This website model now uses **CSS Custom Properties (Variables)** for all colors and styling. This makes it incredibly easy to customize the entire website's appearance by simply changing a few variables in one place!

## How to Customize Colors

All color variables are defined in `src/index.css` at the top of the file. Simply edit these values to change the entire website's color scheme.

### Current Theme (Red & Black)
```css
:root {
  /* Primary Brand Colors */
  --color-primary: #ff0000;           /* Main brand color (red) */
  --color-primary-dark: #cc0000;      /* Darker shade for hovers */
  --color-primary-light: #ff3333;     /* Lighter shade for accents */
  --color-primary-pale: #ffcccc;      /* Very light shade */
  
  /* Background Colors */
  --color-bg-primary: #000000;        /* Main background (black) */
  --color-bg-secondary: #333333;      /* Secondary background (dark gray) */
  --color-bg-tertiary: #111111;       /* Tertiary background */
  
  /* Text Colors */
  --color-text-primary: #ffffff;      /* Main text color */
  --color-text-secondary: #cccccc;    /* Secondary text */
  --color-text-tertiary: #999999;     /* Tertiary text (muted) */
}
```

---

## Alternative Color Schemes

### 🔵 Blue Professional Theme
Replace the primary colors in `src/index.css` with:
```css
:root {
  --color-primary: #0066ff;
  --color-primary-dark: #0052cc;
  --color-primary-light: #3385ff;
  --color-primary-pale: #cce0ff;
  /* Keep backgrounds and text colors the same */
}
```

### 🟢 Green Modern Theme
```css
:root {
  --color-primary: #00ff88;
  --color-primary-dark: #00cc6e;
  --color-primary-light: #33ffa3;
  --color-primary-pale: #ccffeb;
}
```

### 🟣 Purple Luxury Theme
```css
:root {
  --color-primary: #8b00ff;
  --color-primary-dark: #6f00cc;
  --color-primary-light: #a333ff;
  --color-primary-pale: #e6ccff;
}
```

### 🟠 Orange Energy Theme
```css
:root {
  --color-primary: #ff6600;
  --color-primary-dark: #cc5200;
  --color-primary-light: #ff8533;
  --color-primary-pale: #ffd9b3;
}
```

### ⚫ Light Mode Theme
For a complete light mode, change both primary and background colors:
```css
:root {
  /* Primary Colors */
  --color-primary: #0066ff;
  --color-primary-dark: #0052cc;
  --color-primary-light: #3385ff;
  --color-primary-pale: #99c2ff;
  
  /* Light Backgrounds */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f5f5f5;
  --color-bg-tertiary: #eeeeee;
  
  /* Dark Text for Light Mode */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;
  --color-text-muted: #cccccc;
  
  /* Adjust borders */
  --color-border-primary: #e0e0e0;
  --color-border-secondary: #cccccc;
}
```

---

## Quick Tips

### 1. **Test Colors Before Committing**
- Use browser DevTools to test colors in real-time
- Open Developer Tools (F12)
- Edit the `:root` variables in the Elements/Inspector tab
- See changes instantly!

### 2. **Use Color Generators**
Need help creating color palettes? Try:
- [Coolors.co](https://coolors.co/) - Generate color schemes
- [Adobe Color](https://color.adobe.com/) - Professional color wheels
- [Material Design Colors](https://materialui.co/colors/) - Pre-made palettes

### 3. **Keep Accessibility in Mind**
- Ensure sufficient contrast between text and backgrounds
- Test your color scheme with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Minimum contrast ratio should be 4.5:1 for normal text

### 4. **Customize Gradients Too**
The website also uses gradient variables:
```css
:root {
  --gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  --gradient-card: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(255, 0, 0, 0.05) 100%);
}
```

For a different color, just change the RGB values to match your primary color.

---

## Benefits of This Approach

✅ **One Place to Change Everything** - Edit colors in one file, affects entire site  
✅ **Easy Theme Switching** - Swap between light/dark modes effortlessly  
✅ **Client-Friendly** - Non-technical users can customize colors  
✅ **Consistent Design** - Colors stay consistent across all pages  
✅ **Future-Proof** - Easy to maintain and update  
✅ **Professional** - Industry best practice for modern web development  

---

## Where to Find the Variables

**File Location:** `Website-Model/src/index.css`

Look for the `:root` section at the very top of the file (lines 7-45).

---

## Need Help?

If you want to create a custom theme:
1. Choose your primary color (e.g., #ff6600)
2. Generate lighter version: lighten by 20-30% → #ff8533
3. Generate darker version: darken by 20-30% → #cc5200
4. Generate pale version: lighten by 60-70% → #ffd9b3
5. Replace the values in `index.css`

**Pro Tip:** Use [this color shade generator](https://noeldelgado.github.io/shadowlord/) to automatically create shades!

---

Happy theming! 🎨

