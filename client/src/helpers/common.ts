const common = {
  app: {
    name: 'Collabo Community',
    subcommunities: { // probably use id to identify & check for these things better later?
      one: {
        name: 'Code Collabo',
        pages: {
          home: {
            name: 'Overview',
          },
          two: {
            name: 'Projects'
          },
        },
      },
    },
  },
};

export const { app } = common;
export const { subcommunities } = app;
export const { one: first_subcommunity } = subcommunities;
export const { pages: first_subcommunity_pages } = first_subcommunity;
export const { home: first_subcommunity_home, two: first_subcommunity_2nd_page } = first_subcommunity_pages;