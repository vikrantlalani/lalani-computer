const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');

function getCanonicalPath(filePath) {
  let relativePath = path.relative(srcAppDir, filePath);
  // Remove 'page.tsx' or 'layout.tsx'
  relativePath = relativePath.replace(/\\/g, '/');
  relativePath = relativePath.replace(/\/?(page\.tsx|layout\.tsx)$/, '');
  if (relativePath === '') return '/';
  return '/' + relativePath;
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'page.tsx' || file === 'layout.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if it already has alternates
      if (content.includes('alternates: {')) {
        continue;
      }
      
      const canonicalPath = getCanonicalPath(fullPath);
      let modified = false;

      // Replace metadata with type
      if (content.includes('export const metadata: Metadata = {')) {
        content = content.replace(
          'export const metadata: Metadata = {',
          `export const metadata: Metadata = {\n  alternates: { canonical: '${canonicalPath}' },`
        );
        modified = true;
      } 
      // Replace metadata without type
      else if (content.includes('export const metadata = {')) {
        content = content.replace(
          'export const metadata = {',
          `export const metadata = {\n  alternates: { canonical: '${canonicalPath}' },`
        );
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${canonicalPath} in ${fullPath}`);
      }
    }
  }
}

processDirectory(srcAppDir);
console.log('Finished updating metadata alternates.');
