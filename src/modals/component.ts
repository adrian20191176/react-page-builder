export interface Component {
  type: string;
  values: Record<string, string>;
  version: number;
}

export const Skeleton: Component[] = [
  {
    type: "Header",
    values: {
      text: "Ascentic",
      url: "https://ascenticwebcontent.azureedge.net/media/assets/51_DS_6207_4eb3c1f277.jpg",
    },

    version: 1,
  },
  {
    type: "Company",
    values: {
      title: "Ascentic",
      url: "https://ascentic.se/images/logo-dark.svg",
      description: "Ascentic",
    },

    version: 1,
  },
  {
    type: "Text",
    values: {
      title: "Your Swe-Lankan Software Development Partner",
      description: `orem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                    Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                    Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum
                    Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem
                    IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem
                    Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
                    Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`,
    },

    version: 1,
  },
  {
    type: "Footer",
    values: {
      title: "Thank You!",
      url: "https://ascenticwebcontent.azureedge.net/media/assets/51_DS_6207_4eb3c1f277.jpg",
    },
    version: 1,
  },
];
