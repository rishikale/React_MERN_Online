import React from "react";
import { DummyData } from "./DummyData";

function NestedMapping() {
  const [array, setArray] = React.useState(DummyData.subFunction);
  console.log("Dummy data :", DummyData);

  return (
    <div className="flex justify-start">
      <div className="text-xl font-semibold flex justify-center">
        Nested Mapping
      </div>
      <div className="my-5 ">
        <div className="my-4 text-lg font-bold">{DummyData.functionality}</div>
        <div>
          {array?.length > 0
            ? array.map((functionality, functionalityIndex) => {
                console.log("The functionality is :", functionality);
                return (
                  <div key={functionalityIndex}>
                    <div className=" pl-32 flex gap-2 justify-start text-lg font-semibold">
                      <div>
                        <input
                          type="checkbox"
                          name={`${functionality.functionality}${functionalityIndex}`}
                        />
                      </div>
                      <div>{functionality.functionality}</div>
                    </div>
                    <div className="my-2">
                      {functionality?.["subFunction"] &&
                      functionality.subFunction?.length > 0
                        ? functionality.subFunction.map(
                            (subFunctionality, subFunctionalityIndex) => {
                              return (
                                <div
                                  key={
                                    functionalityIndex + subFunctionalityIndex
                                  }
                                >
                                  <div className="ml-32 flex gap-2 text-lg font-semibold">
                                    <div>
                                      <input
                                        className="ml-24"
                                        type="checkbox"
                                      />
                                    </div>
                                    <div>{subFunctionality?.functionality}</div>
                                  </div>
                                  <div className="my-2 grid grid-cols-3">
                                    {subFunctionality?.["permissions"] &&
                                    subFunctionality?.permissions?.length > 0
                                      ? subFunctionality?.permissions.map(
                                          (permission, permissionIndex) => {
                                            return (
                                              <div
                                                className="flex gap-2 ml-44"
                                                key={permissionIndex}
                                              >
                                                <div>
                                                  <input
                                                    type="checkbox"
                                                    className="ml-24"
                                                  />
                                                </div>
                                                <div>
                                                  {permission?.permission}
                                                </div>
                                              </div>
                                            );
                                          }
                                        )
                                      : null}
                                  </div>
                                </div>
                              );
                            }
                          )
                        : null}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default NestedMapping;
