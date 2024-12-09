import { getPermalink, getAsset } from './utils/permalinks';

// export const headerData = {
//   links: [
//     {
//       text: 'Home',
//       href: getPermalink('/')
//     },
//     {
//       text: 'Products',
//       href: '/about',
//       links: [
//         {
//           text: 'Category1',
//           href: getPermalink('/category'),
//         },
//         {
//           text: 'Category2',
//           href: getPermalink('/category'),
//         },
//         {
//           text: 'Category3',
//           href: getPermalink('/category'),
//         },
//         {
//           text: 'Category4',
//           href: getPermalink('/category'),
//         },
//       ],
//     },
//     {
//       text: 'About US',
//       href: getPermalink('/about')
//     },
//     {
//       text: 'Contact Us',
//       href: getPermalink('/contact')
//     },
//   ],
// };

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    © 2024 Made by <a class="text-blue-600 underline dark:text-muted" href="https://codexcash.com/"> CodeXCash.com</a> · All rights reserved.
  `,
};
