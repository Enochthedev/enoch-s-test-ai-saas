"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "John",
    avatar: "J",
    title: "Developer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Jane",
    avatar: "J",
    title: "Designer",
    description: "I use this daily for generating pictures and it's great",
  },
  {
    name: "markus",
    avatar: "M",
    title: "artist",
    description: "yo the tunes from this site are fire",
  },
  //generate 2 more random ones about using the site to create videos, code and just talking in general
  {
    name: "Alice",
    avatar: "A",
    title: "Content Creator",
    description: "I use this app to create engaging and informative videos for my YouTube channel. It's so easy to use, and I love the fact that I can create high-quality videos without any prior video editing experience."
    },
    {
    name: "Bob",
    avatar: "B",
    title: "Software Developer",
    description: "I use this app to generate code snippets and debug my code. It's a huge time saver, and it helps me to write more efficient and bug-free code."
    }
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}