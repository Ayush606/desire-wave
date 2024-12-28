import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Products',
      href: '/about',
      links: [
        {
          text: 'Category1',
          href: getPermalink('/category'),
        },
        {
          text: 'Category2',
          href: getPermalink('/category'),
        },
        {
          text: 'Category3',
          href: getPermalink('/category'),
        },
        {
          text: 'Category4',
          href: getPermalink('/category'),
        },
      ],
    },
    {
      text: 'About US',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  // links:[{
  //   title: 'Company',
  //   links: [
  //     { text: 'About', href: getPermalink('/about') },
  //     { text: 'Contact', href: getPermalink('/contact') },
  //     { text: 'Careers', href: getPermalink('/careers') },
  //   ],
  // },
  // {
  //   title: 'Support',
  //   links: [
  //     { text: 'Help Center', href: getPermalink('/help') },
  //     { text: 'Safety Center', href: getPermalink('/safety') },
  //     { text: 'Community Guidelines', href: getPermalink('/community') },
  //   ],
  // },
  // {
  //   title: 'Legal',
  //   links: [
  //     { text: 'Cookies Policy', href: getPermalink('/cookies') },
  //     { text: 'Privacy Policy', href: getPermalink('/privacy') },
  //     { text: 'Terms of Service', href: getPermalink('/terms') },
  //   ],
  // }],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    {
      ariaLabel: 'X',
      icon: 'tabler:brand-whatsapp',
      href: 'https://wa.me/919410135939?text=Hi%20there! ',
      text: '',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/desirewave28',
      text: '',
    },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61570488867181', text: '' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/desire-wave', text: '' },
  ],
  footNote: `
    © 2024 Made by <a class="text-blue-600 underline dark:text-muted" href="tel:+917983371461">Ayush Kashyap</a> · All rights reserved.
  `,
};
