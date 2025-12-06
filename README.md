# Seussify Me

**Turn any plain tale into a whimsical, wiggly Dr. Seuss–style rhyme!**

Ever write a story and think,
*“Hmm… this could use a wink-wink and a Seuss-ish twist”?*

This project takes any normal block of text — a bedtime tale, a sci-fi adventure, a dull office memo — and transforms it into a bouncing, rhyming, nonsense-sprinkled Seuss-style poem using Google's Gemini API.

Now with **AI illustrations** and **Souvenir Saving**!

For an example of the apps work, see https://github.com/philipobrien-sdm/Seussify-Me/blob/main/the-trunka-lunk-king-and-his-zizzle-zazzle-dream-.html

Just feed in:
> *Your story goes here…*

And out pops something like:
> **The Brindlewood Blinks and the Star-Snatching Snick!**
> *At the EDGE of a FORest, so QUIET and DEEP…*

Pure Seuss-energy.
Zero effort.

## ✨ Features

*   **🪄 Seussify any story:** prose → rhyme, rhythm, whimsy, invented creatures.
*   **🎨 AI Illustrations:** Automatically generates a whimsical, hand-drawn style picture to match your poem using `gemini-2.5-flash-image`.
*   **💾 Save a Souvenir:** Download your masterpiece (poem + picture) as a beautiful, standalone HTML file to keep forever.
*   **👀 Boring Original Toggle:** Compare the new rhyme with your original text using the "Boring Original Version" ribbon.
*   **⚡ Fast & Smart:** Uses Google Gemini 2.5 Flash for text and images.
*   **📦 Modern Stack:** React, TypeScript, Tailwind CSS.

## 🚀 Getting Started

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/yourname/seussify-me
    cd seussify-me
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run locally:**
    ```bash
    npm start
    ```

## 📚 How it Works

1.  **Input:** You give it a normal story.
2.  **Poetry Magic:** The app sends it to `gemini-2.5-flash` to rewrite it with Seuss-esque rhyme, meter, and invented vocabulary.
3.  **Artistic Flair:** It then asks `gemini-2.5-flash-image` to draw a "whimsical, vintage storybook" illustration based on the new title.
4.  **Output:** You get a complete storybook page!

Think of it like:
> You provide the tale,
> We provide the bounce,
> We paint you a picture,
> ounce by ounce!

## 📄 Example

**Input:**
> “A boy noticed lanterns disappearing from town each night. He followed the trail into the forest…”

**Output:**
> *“Through Whisper-Whistle thickets and Grumble-Root trails…”*
> *(Accompanied by a picture of a fuzzy creature holding a glowing lantern)*

## 🎉 Why?

Because sometimes the world needs fewer serious problems
and more Grickle-Snicks, Zizzle-Stars, and Whisper-Whistle Woods.
