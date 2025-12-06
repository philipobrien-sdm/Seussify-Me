# Seussify Me

**Turn any plain tale into a whimsical, wiggly Dr. Seuss–style rhyme!**

Ever write a story and think,
*“Hmm… this could use a wink-wink and a Seuss-ish twist”?*

This project takes any normal block of text — a bedtime tale, a sci-fi adventure, a dull office memo — and transforms it into a bouncing, rhyming, nonsense-sprinkled Seuss-style poem using Google's Gemini API.

Now with **AI illustrations** and **Souvenir Saving**!

For an example of the apps work:
<img width="500" height="500" alt="seuss1" src="https://github.com/user-attachments/assets/e59357ea-7a7b-4023-9bb2-0ac8142c6ec6" />

_A traveler came from a far-off old land,
With a twinkle, a blink, and some dust in his hand.
He'd seen something STRANGE, so he started to say,
"Oh, the desert holds wonders, out far, far away!

"Two legs, grand and STURDY, like poles in the breeze,
Stood without any body, or arms, if you please!
Just stone-y old shin-bones, stuck fast in the grit,
With no head, no torso, not even a bit!

"And down in the sand, half-buried and glum,
Was a face, quite a grim one, that made my heart thrum!
A frown and a sneer, with a lip rather curled,
As if scoffing at EVERYONE else in the world!
That sculptor, he knew how to carve up a GRUMP!
He'd caught all the bluster right there on that lump!

"And a stone at its feet, gave a curious peep,
With some words that would make any old traveler leap!
It said: 'I am Ozymandias! Hear my GREAT BOAST!
The King of all Kings, and the MOST of the most!
Look 'round at my works, all you Wibblers and Wumps!
And despair, all you meeklings! You'll get horrid grumps!'

"But there was no ZIZZLE, no Zings, no Gazoop!
Just legs in the desert, and sand in a scoop!
No cities, no castles, no THING to be seen!
Just a vast, dusty flatness, all yellow and lean!
The sand stretched forever, so boundless and bare,
A monument to NOTHING, just dust in the air!"_


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
