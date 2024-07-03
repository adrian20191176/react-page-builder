import { ComponentType, useState } from "react";
import { Component } from "../modals/component";
import ComponentTreeItem from "./ComponentTreeItem";

enum ComponentTypes {
  Header = "Header",
  Company = "Company",
  Text = "Text",
  Footer = "Footer",
}

interface Props {
  component: Component[];
  onUpdateTree: (componentType: string, key: string, newValue: string) => void;
}
const ComponentTree = ({ component, onUpdateTree }: Props): JSX.Element => {
  const [activeComponent, setActiveComponent] = useState<ComponentTypes | null>(
    null
  );
  return (
    <ol>
      {component.map((x, y) => (
        <li key={y}>
          <ComponentTreeItem
            title={x.type}
            className={` ${y !== 0 ? "border-t-0" : " rounded-t-lg"} ${
              component.length - 1 === y && "rounded-b-lg"
            }`}
            isActive={activeComponent === x.type}
            onClick={() => setActiveComponent(x.type as ComponentTypes)}
          >
            <section>
              {Object.keys(x.values).map((m) => (
                <div>
                  <p>{m}</p>
                  <input
                    className="p-4 border-2 border-solid border-black"
                    defaultValue={x.values[m]}
                    onChange={(e) => onUpdateTree(x.type, m, e.target.value)}
                  />
                </div>
              ))}
            </section>
          </ComponentTreeItem>
          {/* <button
              className={`bg-gray-100 border-2 ${
                y !== 0 ? "border-t-0" : " rounded-t-lg"
              } ${component.length - 1 === y && "rounded-b-lg"} p-2 pl-6`}
              onClick={() => {
                setIsEdit((prev) => !prev);
              }}
            >
              {x.type}
            </button> */}
        </li>
      ))}
    </ol>
  );
};

export default ComponentTree;
