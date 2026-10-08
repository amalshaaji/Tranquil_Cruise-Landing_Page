export type Review = {
  /** The review text, exactly as the guest wrote it. */
  text: string;
  /** Name as shown on Google. */
  author: string;
  /** Shown with the Local Guide badge when set. */
  localGuide?: boolean;
  /** Reviewer activity as Google shows it, e.g. "12 reviews · 3 photos". */
  stats?: string;
  /** When it was posted, e.g. "4 months ago". */
  when?: string;
  /** The owner's public reply on Google, if any. */
  reply?: { text: string; when?: string };
  /** Stars out of 5. Defaults to 5. */
  rating?: number;
  /** Link to the reviewer's Google profile (shown on live reviews). */
  authorUrl?: string;
};

/**
 * Hand-pasted Google reviews, used when live reviews aren't available (no API key, or Google
 * is unreachable). With GOOGLE_PLACES_API_KEY set, live reviews replace these. Copy them from the
 * listing (maps.app.goo.gl/TtpGGRda5CuSssNRA), keeping the wording exactly as written. Each entry
 * becomes one card; the page shows the first few and offers the rest behind "Show more".
 * Reviewer stats, dates and owner replies are as shown when pasted. Ratings weren't included in the paste, so they default to 5 (the listing's average is 5.0).
 */
export const reviews: Review[] = [
  { author: "Badhusha Nizar", text: "Had a wonderful experience,nice hospitality ,awsome service also" },
  { author: "Jagadish goud", text: "Had a great experience and people are so friendly and supportive" },
  { author: "mulook vp", localGuide: true, stats: "5 reviews \u00b7 14 photos", when: "4 months ago", text: "Awesome ride with Mr.Suhail Bro...he explained each and everything and rides inside villages. Almost 2 hrs...nice site seeing and wonderful backwaters...", reply: { when: "4 months ago", text: "Thank you ❤️" } },
  { author: "Karishma K", localGuide: true, stats: "391 reviews \u00b7 48 photos", when: "6 months ago", text: "Amazing experience with boat driver Sohail on Shikara :) he was on time, very friendly and helped to take photos. Very friendly young man." },
  { author: "Anandhu Anilkumar", stats: "1 review \u00b7 2 photos", when: "a year ago", text: "Our recent boat trip was a memorable and refreshing experience. The journey offered beautiful views of the water, a calm atmosphere, and a chance to unwind from daily routines. …" },
  { author: "Hasfi SaliH", stats: "3 reviews \u00b7 4 photos", when: "7 months ago", text: "Awesome shikara ride got from tranguil cruise\nThe shikara guy made my 3 hours goood😍" },
  { author: "Art Passion", localGuide: true, stats: "3 reviews \u00b7 24 photos", when: "a year ago", text: "We had a truly memorable experience with the boat ride. The atmosphere was calm and refreshing, perfect for unwinding and enjoying the beauty of nature. The surroundings were scenic, and the whole journey felt like a breath of fresh air. …" },
  { author: "Karuppusamy Masiyappan", localGuide: true, stats: "12 reviews \u00b7 16 photos", when: "8 months ago", text: "The experience was very good. Very comfortable and cozy. Anna was very friendly. We are new to this place but this anna helped us so much." },
  { author: "Muhammed Shafeek", stats: "2 reviews \u00b7 1 photo", when: "5 months ago", text: "One of the most memorable experience and chilling and calm vibe across the lake. Bro is very friendly" },
  { author: "Raveesh Sood", stats: "9 reviews", when: "a year ago", text: "In your trip you find very few business owners who are genuinely good and Shuhaid was one of them. Had a good time and a smooth ride. He has a speaker on the boat you can use for your own music." },
  { author: "prem kumar dasari", stats: "3 reviews \u00b7 1 photo", when: "7 months ago", text: "Most memorable experience! It was a beautiful ride!" },
  { author: "Ashish Jayashankar", stats: "2 reviews", when: "2 months ago", text: "Excellent cruise and very knowledgeable people. Definitely recommend everyone to try it out" },
  { author: "Maradiya Rushin", stats: "8 reviews", when: "8 months ago", text: "Superb experience in shikara boat highly recommended and specially sunset or sunrise ride and also superb photography and information given by Mr. sohil 👌🏻👍🏻🤘🏻" },
  { author: "Pavana Smruthi", stats: "1 review", when: "4 months ago", text: "Is good experience day Shikari boat good nature good guide his name Sohail we catching fish it's a good experience is a nice place visit here" },
  { author: "kingsley peter", localGuide: true, stats: "57 reviews \u00b7 158 photos", when: "8 months ago", text: "Had nice ride into the deep island of allapuzha" },
  { author: "SS MDMBA", localGuide: true, stats: "12 reviews \u00b7 3 photos", when: "9 months ago", text: "Detail On Tranquil Cruise was a highlight of my time in Alleppey. Captain Suhail and first mate Hasfi were fantastic, warm, professional, and attentive. They gave me a beautiful, relaxing tour through the backwaters, with great local …" },
  { author: "Ruthvik K", stats: "11 reviews", when: "5 months ago", text: "Enjoyed the Shikari ride and was totally worth the penny , the boat was family friendly and special mention to Suhail to taking us to all the places with a big smile", reply: { when: "5 months ago", text: "Thankyou ruthvik for your support 🤍" } },
  { author: "merry mercy Mohanty", stats: "3 reviews", when: "6 months ago", text: "Had an amazing experience of the calm ride with stunning view. The service was great. They are very kind and helping. They arranged our transport to the railway station as well." },
  { author: "Shanmuga Sundaram", localGuide: true, stats: "10 reviews \u00b7 12 photos", when: "4 months ago", text: "Wonderful journey. Everyone must try. Suhail guided so well engaging us with lots of information", reply: { when: "3 months ago", text: "Thank you so much for your wonderful review! We are thrilled to hear that you and your loved ones had a great time exploring the Alappuzha backwaters with Tranquil Cruise. Creating beautiful memories for our guests is what we strive for. Looking forward to welcoming you all back soon! ⛵✨" } },
  { author: "amol bongirwar", stats: "5 reviews", when: "4 months ago", text: "Nice shikara ride for family trip. Many thanks to suhil for nice arrangements" },
  { author: "Aaron Frischeisen", stats: "7 reviews \u00b7 1 photo", when: "4 months ago", text: "The morning ride was so lovely.\nThank you for everything, I really enjoyed!", reply: { when: "4 months ago", text: "🤍" } },
  { author: "suma sailaja", stats: "1 review", when: "5 months ago", text: "Ride was very good which covers whole back waters and village view. Thanks Sajad" },
  { author: "Sunil Varamurty", localGuide: true, stats: "41 reviews \u00b7 1 photo", when: "9 months ago", text: "We had an amazing Shikara boat ride. Rafi was a fantastic host, making the experience even more enjoyable by sharing detailed and interesting insights about the backwaters along the way" },
  { author: "Franz Munster", stats: "1 review", when: "9 months ago", text: "My husband and I went on the back water tour with a wonderful guide. He spoke very good English, and pointed out kingfishers and bats to us. He knew so much about the lives of those who lived there. He also knew when to be silent so that we …" },
  { author: "sethu kumar", stats: "6 reviews", when: "4 months ago", text: "We had a good experience here. He showed us all the places in boat and very friendly." },
  { author: "Jan Kees van 't Veen", localGuide: true, stats: "105 reviews \u00b7 64 photos", when: "9 months ago", text: "Loved it! A relaxing boat trip through the backwaters where the big boats can't come. Idyllic 😍\nOur 'captain' Shuhaib was a genuine nice guy, enthusiastic and full of joy. I can recommend Tranquil Cruise 100% 🙌" },
  { author: "Alagi photography", stats: "1 review", when: "3 months ago", text: "Excellent experience for this team, super ride & thank u boys🥰" },
  { author: "Prabu Thangarasu", stats: "3 reviews", when: "8 months ago", text: "We spent the day with boating amazing views and feeling like nature . Floating around area we have enjoyed . We had eat sea food . Its amazing" },
  { author: "Andrew Evans", stats: "4 reviews", when: "9 months ago", text: "An excellent, informative guide who guided us through a variety of waterways in a noticeably quiet engined boat. He was very fluent in English. Charming and highly recommended" },
  { author: "Aro", localGuide: true, stats: "6 reviews \u00b7 7 photos", when: "5 months ago", text: "Evening tea is best as usual in kainakary..\nGood boat well maintained" },
  { author: "Sneha Iyer", localGuide: true, stats: "19 reviews \u00b7 1 photo", when: "a year ago", text: "Mr. Sohail took us on a beautiful boat ride. He shared interesting information about the place and guided us through the small canals. He is a wonderful person to talk to and made the experience truly memorable. Thank you so much" },
  { author: "Swapnil Singh", stats: "4 reviews", when: "a year ago", text: "Had a great experience with Mr. Shuhaib on boat. A great host, with wonderful hospitality. I would definitely refer him and his team to anyone who is interested in having a beautiful boating experience in Alleppey." },
  { author: "Nagen Dx", stats: "7 reviews \u00b7 1 photo", when: "2 months ago", text: "Great experience. Recomended. Friendly staff" },
  { author: "Marri Jayakrishna", localGuide: true, stats: "9 reviews \u00b7 7 photos", when: "2 months ago", text: "Personally I had best experience and must try when you visit Alleppey" },
  { author: "Suhail Shafeek", stats: "2 reviews \u00b7 9 photos", when: "5 months ago", text: "Good one" },
  { author: "Jabastin Jabas", localGuide: true, stats: "7 reviews \u00b7 2 photos", when: "4 months ago", text: "Super service …… Really happy with boating service thank you", reply: { when: "4 months ago", text: "Thank you 🤍" } },
  { author: "Janardhan Kommera", stats: "2 reviews \u00b7 1 photo", when: "7 months ago", text: "Nice boat ride and nice locations to view in boating and very friendly boating crew" },
  { author: "Sebastin Selva", stats: "4 reviews", when: "5 months ago", text: "Very Nice And Good Experience The Driver Is Very Good Person", reply: { when: "5 months ago", text: "Thank you selva 🤍" } },
  { author: "Rajat Shukla", localGuide: true, stats: "26 reviews", when: "7 months ago", text: "It was amazing travelling and cruising with suhil , they guys were superb.. highly recommended" },
  { author: "dev sharma", stats: "4 reviews", when: "9 months ago", text: "that was great boat ride we opt for shikara one and the driver was very friendly and cooprative" },
  { author: "velavan vel", stats: "3 reviews", when: "8 months ago", text: "Super food, fabulous place, guidiness of board driver very very good" },
  { author: "Fabrice Auderset", localGuide: true, stats: "35 reviews \u00b7 4 photos", when: "7 months ago", text: "Nice tour, loved it! Good driver and guide 👍" },
];
