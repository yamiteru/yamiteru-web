import { cp, mkdir, readdir, readFile, rm, writeFile } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export const DIST = "./dist";
export const PUBLIC = "./public";

export const renderProps = (props?: Record<string, string>) => {
  if (props) {
    let result = "";

    for (const key in props) {
      result += `${key}="${props[key]}" `;
    }

    return result;
  }

  return "";
};

export const html = (head: string, body: string) =>
  `<!DOCTYPE html><html lang="en">${head}${body}</html>`;

export const head = (content: string) => `<head>${content}</head>`;

export const body = (content: string) => `<body>${content}</body>`;

export const title = (title: string) => `<title>${title}</title>`;

export const meta = (name: string, content: string) =>
  `<meta name="${name}" content="${content}">`;

export const link = (
  rel: string,
  href: string,
  props?: Record<string, string>,
) => `<link rel="${rel}" href="${href}"${renderProps(props)}>`;

export const articleDetail = (data: Article, content: string) =>
  html(
    head(
      [
        title(`Yamiteru - ${data.title}`),
        meta("description", data.description),
        link("stylesheet", "core.css"),
        link("stylesheet", "article-detail.css"),
        meta("viewport", "width=device-width, initial-scale=1.0"),
        link("shortcut icon", "favicon.ico", { type: "image/x-icon" }),
        link("apple-touch-icon", "apple-touch-icon.png", { sizes: "180x180" }),
        link("icon", "32x32.png", { type: "image/png", sizes: "32x32" }),
        link("icon", "16x16.png", { type: "image/png", sizes: "16x16" }),
        meta("theme-color", "#e5e5e5"),
      ].join(""),
    ),
    body([a("/", "← Back"), content].join("")),
  );

export const article = (content: string) => `<article>${content}</article>`;

export const a = (href: string, content: string) =>
  `<a href="${href}">${content}</a>`;

export const h2 = (content: string) => `<h2>${content}</h2>`;

export const p = (content: string) => `<p>${content}</p>`;

type Article = { name: string; title: string; description: string };

export const articlePreview = (data: Article) =>
  article(
    a(`${data.name}.html`, [h2(data.title), p(data.description)].join("")),
  );

export const articleList = (data: Article[]) =>
  html(
    head(
      [
        title("Yamiteru - Blog"),
        meta("description", "This is my blog."),
        link("stylesheet", "core.css"),
        link("stylesheet", "article-list.css"),
        meta("viewport", "width=device-width, initial-scale=1.0"),
        link("shortcut icon", "favicon.ico", { type: "image/x-icon" }),
        link("apple-touch-icon", "apple-touch-icon.png", { sizes: "180x180" }),
        link("icon", "32x32.png", { type: "image/png", sizes: "32x32" }),
        link("icon", "16x16.png", { type: "image/png", sizes: "16x16" }),
        meta("theme-color", "#e5e5e5"),
      ].join(""),
    ),
    body(data.map(articlePreview).join("")),
  );

export const renderMarkdownFiles = async (path: string) => {
  const files = await readdir(path);
  const articles: Article[] = [];

  try {
    await rm(DIST, { recursive: true, force: true });
  } catch {
    // I don't care
  }

  try {
    await mkdir(DIST);
  } catch {
    // I don't care
  }

  for (let i = 0; i < files.length; ++i) {
    const file = files[i];

    if (file.endsWith(".md")) {
      const name = file.replace(".md", "");
      const raw = await readFile(`${path}/${file}`, { encoding: "utf8" });
      const { content, data } = matter(raw);
      const html = await marked(content, {
        async: true,
        mangle: false,
        headerIds: false,
      });
      const article = {
        title: data.title,
        description: data.description,
        name,
      };

      articles.push(article);

      await writeFile(`${DIST}/${name}.html`, articleDetail(article, html));
    }
  }

  await writeFile(`${DIST}/index.html`, articleList(articles));
  await cp(PUBLIC, DIST, { recursive: true });
};

renderMarkdownFiles("./data");
