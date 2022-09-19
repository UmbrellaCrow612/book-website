export default {
  title: 'Book',
  name: 'book',
  type: 'document',
  fields: [
    {
      title: 'Cover photo',
      name: 'coverPhoto',
      type: 'image',
      fields: [
        {
          title: 'Alternative text',
          name: 'alternateText',
          type: 'string',
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Carousel photos',
      name: 'carouselPhotos',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              title: 'Alternative text',
              name: 'alternateText',
              type: 'string',
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Cover title',
      name: 'coverTitle',
      type: 'string',
      description: `This should be short and just the title of the book`,
    },
    {
      title: 'Longer title',
      name: 'longerTitle',
      type: 'string',
      description: `This should contain the title and if it is hard or paperback.`,
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: `This is how much the book costs`,
    },
    {
      title: 'Page count',
      name: 'pageCount',
      type: 'number',
      description: `This is how pages the book has`,
    },
    {
      title: 'Synopsis',
      name: 'synopsis',
      type: 'array',
      of: [{ type: 'block' }],
      description: `The books synopsis`,
    },
    {
      title: 'Author synopsis',
      name: 'authorSynopsis',
      type: 'array',
      of: [{ type: 'block' }],
      description: `Something about the author or his background`,
    },
    {
      title: 'Authors',
      name: 'authors',
      type: 'array',
      description: `This can be a single or multiple amount fo author's`,
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
      description: `This is either a video with the author or about the book`,
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
    },
    {
      title: 'Categorys',
      name: 'categorys',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      description: `This can be a single or multiple amount fo category's`,
    },
    {
      title: 'Book type',
      name: 'bookType',
      type: 'string',
      options: {
        list: [
          { title: 'Hardback', value: 'hardBack' },
          { title: 'Paperback', value: 'paperBack' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'coverTitle',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
/*
list of all the things book will have

Cover photo - Alt
Carousel photo's
cover title
longer title
price
pages
synopsis
video url
author's
published at
category
slug
*/
