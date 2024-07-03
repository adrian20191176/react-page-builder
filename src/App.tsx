import { useState } from "react";
import ComponentTree from "./components/ComponentTree";
import HTMLPage from "./components/HTMLPage";
import { Skeleton } from "./modals/component";

function App() {
  const [componentList, setComponentList] = useState(Skeleton);

  function updateSkeleton(
    componentType: string,
    key: string,
    newValue: string
  ) {
    const updatedSkeleton = componentList.map((component) => {
      if (component.type === componentType) {
        return {
          ...component,
          values: {
            ...component.values,
            [key]: newValue,
          },
        };
      }
      return component;
    });
    setComponentList(updatedSkeleton);
  }

  return (
    <>
      <div className="z-10 absolute flex flex-row justify-between w-full bg-white text-3xl p-4 border-solid border-b-2 border-blue-200">
        <p>Create a new proposal</p>
        <button className="text-base border-2 p-2 rounded-xl border-yellow-200" onClick={() => console.log(componentList)}>Publis</button>
      </div>
      <div className="flex flex-row h-screen">
        <div className="pt-24 px-6 bg-white w-[600px]">
          <div className="border-solid border-2 p-4 rounded-3xl">
            <div className="text-normal mb-2">Customise your page</div>
            <div className="text-sm text-gray-600 mb-2">
              You can add, edit, delete, elements and re arrange sections in
              your page for this product
            </div>
            <ComponentTree
              component={componentList}
              onUpdateTree={updateSkeleton}
            />
          </div>
        </div>
        <div className="pt-32 p-20 w-full h-screen overflow-auto">
          {/* <Sample /> */}
          <HTMLPage components={componentList} />
        </div>
      </div>
    </>
  );
}

export default App;
