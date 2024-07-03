import { Component } from "../modals/component";

interface Props {
  components: Component[];
}

const HTMLPage = ({ components }: Props): JSX.Element => {
  return (
    <div
      className="bg-white shadow-3xl"
    >
      {components.map((element) => {
        switch (element.type) {
          case "Header":
            return (
              <div className="relative flex flex-col items-center justify-center">
                <p className="absolute text-7xl text-semibold text-white">
                  {element.values.text}
                </p>
                <img
                  className="h-96 w-full object-cover"
                  src={element.values.url}
                />
              </div>
            );
          case "Company":
            return (
              <div className="flex flex-row gap-4 px-52 py-12">
                <img src={element.values.url} />
                <div>
                  <p className="text-lg font-semibold text-">
                    {element.values.title}
                  </p>
                  <p className="text-gray-600">{element.values.description}</p>
                </div>
              </div>
            );
          case "Text":
            return (
              <div className="flex flex-row gap-4 px-52 ">
                <div>
                  <p className="text-lg font-semibold text-">
                    {element.values.title}
                  </p>
                  <p className="text-gray-600 text-justify">
                    {element.values.description}
                  </p>
                </div>
              </div>
            );
          case "Footer":
            return (
              <div>
                <img
                  className="h-40 pt-12 w-full object-cover"
                  src={element.values.url}
                />
              </div>
            );
          default:
            <></>;
        }
      })}
    </div>
  );
};

export default HTMLPage;

// <img
//   className="h-96 w-full object-cover"
//   src="https://ascenticwebcontent.azureedge.net/media/assets/51_DS_6207_4eb3c1f277.jpg"
// />
// <div className="flex flex-row gap-4 px-52 py-12">
//   <img src="https://ascentic.se/images/logo-dark.svg" />
//   <div>
//     <p className="text-lg font-semibold text-">Ascentic</p>
//     <p className="text-gray-600">ascentic.se</p>
//   </div>
// </div>
// <div className="flex flex-row gap-4 px-52 ">
//   <div>
//     <p className="text-lg font-semibold text-">
//       Ascentic is a great place to work
//     </p>
//     <p className="text-gray-600 text-justify">
//       Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
//       Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem
//       Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum
//       Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
//       Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem
//       IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//       Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
//       <br />
//       <br />
//       Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//       Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum
//       Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
//       Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//       Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
//       Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//       Lorem Ipsum
//     </p>
//   </div>
// </div>
// <div>
//   <img
//     className="h-40 w-full object-cover"
//     src="https://ascenticwebcontent.azureedge.net/media/assets/51_DS_6207_4eb3c1f277.jpg"
//   />
// </div>
