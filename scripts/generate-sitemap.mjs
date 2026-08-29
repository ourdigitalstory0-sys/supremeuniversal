import fs from 'fs';
import path from 'path';
import { portfolioProjects } from '../src/data/portfolioProjects.ts';
import { blogPosts } from '../src/data/blogPosts.ts';
import { pseoRoutes } from '../src/data/pseoRoutes.ts';

const DOMAIN = 'https://www.supreme-universal.in';
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap-core.xml');
const DATE = new Date().toLocaleDateString('sv-SE'); // 'sv-SE' gives 'YYYY-MM-DD'

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/pune-real-estate', priority: '0.95', changefreq: 'daily' },
  { path: '/supreme-rivana-punawale-price-list', priority: '0.9', changefreq: 'weekly' },
  { path: '/supreme-rivana-punawale-comparison', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
];

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&"']/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
    }
  });
}

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

  // Static Routes
  staticRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // Dynamic Portfolio Projects
  portfolioProjects.forEach(project => {
    xml += `
  <url>
    <loc>${DOMAIN}/projects/${project.id}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${project.image.startsWith('http') ? project.image : DOMAIN + project.image}</image:loc>
      <image:title>${escapeXml(project.name)} - Luxury Apartments in ${escapeXml(project.location)}</image:title>
      <image:caption>${escapeXml(project.seo.description)}</image:caption>
    </image:image>
  </url>`;
  });

  // Dynamic Blog Posts
  blogPosts.forEach(post => {
    xml += `
  <url>
    <loc>${DOMAIN}/blog/${post.id}</loc>
    <lastmod>${post.dateModified ? post.dateModified.split('T')[0] : DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${post.image.startsWith('http') ? post.image : DOMAIN + post.image}</image:loc>
      <image:title>${escapeXml(post.title)}</image:title>
    </image:image>
  </url>`;
  });

  // Programmatic SEO Routes
  pseoRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, xml.trim());
  console.log(`✅ Sitemap generated successfully at ${SITEMAP_PATH}`);
}

generateSitemap();
