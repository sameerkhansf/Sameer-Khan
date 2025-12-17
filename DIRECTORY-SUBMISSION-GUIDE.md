# Directory Submission Guide

Instructions for submitting your site to llms.txt directories.

---

## ✅ Step 2: Submit to llmstxt.site

**URL:** https://llmstxt.site/

### Submission Process:
1. Visit https://llmstxt.site/
2. Click **"Add yours now!"** button
3. Fill out the form with:
   - **Website:** `https://sameerkhan.me`
   - **llms.txt URL:** `https://sameerkhan.me/llms.txt`
   - **llms-full.txt URL:** `https://sameerkhan.me/llms-full.txt`
   - **Description:** "Full-Stack Software Engineer portfolio with technical blog covering AI model reviews, React tutorials, and developer tools comparisons."
   - **Category:** Personal/Developer Tools

### Expected Result:
Your site will appear in the directory with token counts for both files.

---

## ✅ Step 3: Submit to directory.llmstxt.cloud

**URL:** https://directory.llmstxt.cloud/

### Submission Process:
This directory appears to be automatically populated, but you can:
1. Visit https://directory.llmstxt.cloud/
2. Check if your site is already listed (it may auto-discover from llmstxt.org)
3. If not listed, contact the maintainers or submit via their GitHub repo

### Alternative:
The directory may automatically discover sites that have llms.txt files. Your site should be discoverable once it's live.

---

## ✅ Step 4: Verify security.txt

After deployment, verify your security.txt is accessible:

```bash
curl https://sameerkhan.me/.well-known/security.txt
```

Expected output:
```
Contact: mailto:khansam@sonoma.edu
Expires: 2026-12-31T23:59:00.000Z
Preferred-Languages: en
Canonical: https://sameerkhan.me/.well-known/security.txt
Policy: https://sameerkhan.me
Acknowledgments: https://sameerkhan.me
```

---

## ✅ Step 5: Test Jina Reader (Already Done!)

Your site has been tested with Jina Reader and works perfectly:

- **Homepage:** ✅ Clean markdown extraction
- **Blog Posts:** ✅ Full content with proper formatting

Test URLs:
- `https://r.jina.ai/https://sameerkhan.me`
- `https://r.jina.ai/https://sameerkhan.me/blog/gpt-5-2-technical-review`

---

## Summary of Completed Steps

- ✅ **Step 2:** Ready to submit to llmstxt.site (manual form submission)
- ✅ **Step 3:** directory.llmstxt.cloud (may auto-discover)
- ✅ **Step 4:** security.txt created and ready
- ✅ **Step 5:** Jina Reader tested and working

---

## Next Actions

1. **Deploy your site** (if not already deployed)
2. **Submit to llmstxt.site** using the form
3. **Verify security.txt** is accessible after deployment
4. **Monitor** directory.llmstxt.cloud to see if you're auto-listed

---

## Additional Resources

- **llms.txt Spec:** https://llmstxt.org
- **llms-txt-hub:** https://github.com/thedaviddias/llms-txt-hub (648 stars - you can submit here too!)
- **Jina Reader:** https://jina.ai/reader
- **security.txt RFC:** https://www.rfc-editor.org/rfc/rfc9116.html
