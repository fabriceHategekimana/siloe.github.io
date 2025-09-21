import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/siloe.github.io/build/blog',
    component: ComponentCreator('/siloe.github.io/build/blog', '26b'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/archive',
    component: ComponentCreator('/siloe.github.io/build/blog/archive', 'f6e'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/authors',
    component: ComponentCreator('/siloe.github.io/build/blog/authors', '53f'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/siloe.github.io/build/blog/authors/all-sebastien-lorber-articles', '01a'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/authors/yangshun',
    component: ComponentCreator('/siloe.github.io/build/blog/authors/yangshun', 'd4b'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/first-blog-post',
    component: ComponentCreator('/siloe.github.io/build/blog/first-blog-post', 'd8f'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/long-blog-post',
    component: ComponentCreator('/siloe.github.io/build/blog/long-blog-post', '92e'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/mdx-blog-post',
    component: ComponentCreator('/siloe.github.io/build/blog/mdx-blog-post', '60c'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/tags',
    component: ComponentCreator('/siloe.github.io/build/blog/tags', '0c3'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/tags/docusaurus',
    component: ComponentCreator('/siloe.github.io/build/blog/tags/docusaurus', 'd0f'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/tags/facebook',
    component: ComponentCreator('/siloe.github.io/build/blog/tags/facebook', 'dac'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/tags/hello',
    component: ComponentCreator('/siloe.github.io/build/blog/tags/hello', 'ace'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/tags/hola',
    component: ComponentCreator('/siloe.github.io/build/blog/tags/hola', '55f'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/blog/welcome',
    component: ComponentCreator('/siloe.github.io/build/blog/welcome', '11b'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/markdown-page',
    component: ComponentCreator('/siloe.github.io/build/markdown-page', '170'),
    exact: true
  },
  {
    path: '/siloe.github.io/build/docs',
    component: ComponentCreator('/siloe.github.io/build/docs', 'aaf'),
    routes: [
      {
        path: '/siloe.github.io/build/docs',
        component: ComponentCreator('/siloe.github.io/build/docs', '1ea'),
        routes: [
          {
            path: '/siloe.github.io/build/docs',
            component: ComponentCreator('/siloe.github.io/build/docs', '808'),
            routes: [
              {
                path: '/siloe.github.io/build/docs/chants/Dimanche_7_juillet_2024',
                component: ComponentCreator('/siloe.github.io/build/docs/chants/Dimanche_7_juillet_2024', 'a02'),
                exact: true,
                sidebar: "chantsSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/events/empty',
                component: ComponentCreator('/siloe.github.io/build/docs/events/empty', '86f'),
                exact: true,
                sidebar: "eventsSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/intro',
                component: ComponentCreator('/siloe.github.io/build/docs/intro', '8a1'),
                exact: true
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_14',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_14', '0d8'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_16_avril',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_16_avril', '40a'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_16_juillet_2021',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_16_juillet_2021', '9ec'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_2_juillet_2023',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_2_juillet_2023', '83f'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_21_mai_2022',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_21_mai_2022', 'd4a'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_23_juillet_2023',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_23_juillet_2023', '802'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_25_juin_2023',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_25_juin_2023', '8ca'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_27_aout_2023',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_27_aout_2023', '46f'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_7_mai_2023',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_7_mai_2023', '26e'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/dimanche_9_juillet_2023',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/dimanche_9_juillet_2023', 'afc'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/programmes/programme',
                component: ComponentCreator('/siloe.github.io/build/docs/programmes/programme', 'df9'),
                exact: true,
                sidebar: "programmesSidebars"
              },
              {
                path: '/siloe.github.io/build/docs/repetitions/Dimanche_1er_septembre_2024',
                component: ComponentCreator('/siloe.github.io/build/docs/repetitions/Dimanche_1er_septembre_2024', '528'),
                exact: true,
                sidebar: "repetitionsSidebars"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/siloe.github.io/build/',
    component: ComponentCreator('/siloe.github.io/build/', '817'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
