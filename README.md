# ClipForge 🎬
AI-powered viral clip detection, watermark removal, and video generation.
**100% FREE to run using Google Gemini API.**

---

## 🚀 Deploy to Vercel (FREE) in 5 Minutes

### Step 1 — Upload to GitHub
1. Go to **github.com** → sign in → click **New repository**
2. Name it `clipforge` → click **Create repository**
3. Drag and drop the entire clipforge folder to upload

### Step 2 — Deploy on Vercel
1. Go to **vercel.com** → sign up free with your GitHub account
2. Click **Add New Project** → select your `clipforge` repo
3. Click **Deploy** (don't change any settings)

### Step 3 — Add Your Gemini API Key
1. In Vercel → your project → **Settings → Environment Variables**
2. Add: `GEMINI_API_KEY` = your key from aistudio.google.com
3. Click **Save**

### Step 4 — Redeploy
Go to **Deployments** tab → click the 3 dots → **Redeploy**

✅ You're live at `your-project.vercel.app` — completely free!

---

## What's Free vs Paid

| Feature | Free? |
|---------|-------|
| Viral clip detection (real transcripts + AI) | ✅ FREE |
| AI video production plan | ✅ FREE |
| Watermark removal | Add Replicate key later |
| Actual video rendering | Add RunwayML key later |

---

## Run Locally

```bash
npm install
cp .env.local.example .env.local
# Add your GEMINI_API_KEY to .env.local
npm run dev
# Open http://localhost:3000
```
