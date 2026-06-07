// Test script

// Let's just write a standalone script to compile markdown using remark
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";

async function test() {
  const filePath = path.join(process.cwd(), "content", "artigos", "os-10-disparos-de-sniper-mais-impressionantes-e-distantes-da-história.md");
  const content = fs.readFileSync(filePath, "utf8");
  
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);
    
  const htmlStr = processedContent.toString();
  if (htmlStr.includes("<table")) {
    console.log("SUCCESS: Table found in HTML.");
  } else {
    console.log("FAILED: No table found.");
  }
}

test();
