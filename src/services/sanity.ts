// lib/sanity.ts
import { createClient } from '@sanity/client';

export type Carousel = {
  title: string;
  slides: Slides[];
};
export type Slides = {
  buttonLabel: string;
  content: string;
  heading: string;
};

export const sanityClient = createClient({
  projectId: 'd24xmt0x',
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: true,
});

export async function getCarouselData() {
  const carouselQuery = `*[_type == "carousel"][0] {
    title,
    slides[] {
      heading,
      content,
      buttonLabel
    }
  }`;

  const data = await sanityClient.fetch<Carousel>(carouselQuery);
  return data;
}