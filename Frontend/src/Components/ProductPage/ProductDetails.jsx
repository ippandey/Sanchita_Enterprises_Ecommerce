// import React, { useState } from "react";

// const ProductDetailsTabs = () => {
//   const [activeTab, setActiveTab] = useState("description");

//   const tabs = [
//     { id: "description", label: "Description" },
//     { id: "material", label: "Material" },
//     { id: "moreInfo", label: "More Information" },
//   ];

//   const content = {
//     description: (
//       <div className="font-work">
//         <p className="font-semibold mb-2">
//           Industrial-Grade | Lab-Tested | Safe When Handled as Directed
//         </p>
//         <p>
//           Our chemicals are formulated using precision-engineered processes,
//           ensuring high purity, consistent results, and maximum efficiency in
//           textile applications. Whether used for dyeing, processing, or surface
//           treatments, each product is designed to meet rigorous industrial
//           standards.
//         </p>
//         <p className="mt-2">
//           With minimal residue and optimal bonding properties, our solutions
//           enhance fabric durability, texture, and appearance—making them ideal
//           for commercial textile operations. Safe for use when handled correctly
//           with protective measures.
//         </p>
//       </div>
//     ),
//     material: (
//       <div className="font-work">
//         <p className="font-semibold mb-2">Key Ingredients and Composition:</p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>
//             High-purity active compounds suited for textile-grade reactions
//           </li>
//           <li>
//             Stabilizers to maintain shelf life and performance consistency
//           </li>
//           <li>
//             pH-balanced bases for compatibility with a wide range of fabrics
//           </li>
//           <li>
//             Solvents and additives carefully chosen to ensure fabric integrity
//           </li>
//         </ul>
//         <p className="mt-2">
//           All materials are sourced from certified suppliers and undergo strict
//           quality control. Our formulas are tested for performance, safety, and
//           compliance with industrial norms.
//         </p>
//       </div>
//     ),
//     moreInfo: (
//       <div className="font-work">
//         <p className="font-semibold mb-2">Additional Information:</p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Certified cruelty-free processes and responsible sourcing</li>
//           <li>Certified cruelty-free processes and responsible sourcing</li>
//           <li>
//             Packaging designed using 100% recyclable and eco-friendly materials
//           </li>
//           <li>Formulated without harmful VOCs (Volatile Organic Compounds) </li>
//         </ul>
//         <p className="mt-2">
//           Our products are designed not only to perform but also to respect the
//           planet. Every formulation is made with environmental safety in mind.
//           We believe in delivering excellence without compromise.
//         </p>
//       </div>
//     ),
//   };

//   return (
//     <div className="p-10 font-work w-3/5 mb-10 border-b">
//       {/* Tabs */}
//       <div
//         className="flex border-b mb-8
//        "
//       >
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-5 py-4 font-medium ${
//               activeTab === tab.id
//                 ? "border-b-2 border-black text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="text-gray-700">{content[activeTab]}</div>
//     </div>
//   );
// };

// export default ProductDetailsTabs;

import React, { useState } from "react";

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "material", label: "Material" },
    { id: "moreInfo", label: "More Information" },
  ];

  const content = {
    description: (
      <div className="font-work">
        <p className="font-semibold mb-2">
          Industrial-Grade | Lab-Tested | Safe When Handled as Directed
        </p>
        <p>
          Our chemicals are formulated using precision-engineered processes,
          ensuring high purity, consistent results, and maximum efficiency in
          textile applications. Whether used for dyeing, processing, or surface
          treatments, each product is designed to meet rigorous industrial
          standards.
        </p>
        <p className="mt-2">
          With minimal residue and optimal bonding properties, our solutions
          enhance fabric durability, texture, and appearance—making them ideal
          for commercial textile operations. Safe for use when handled correctly
          with protective measures.
        </p>
      </div>
    ),
    material: (
      <div className="font-work">
        <p className="font-semibold mb-2">Key Ingredients and Composition:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            High-purity active compounds suited for textile-grade reactions
          </li>
          <li>
            Stabilizers to maintain shelf life and performance consistency
          </li>
          <li>
            pH-balanced bases for compatibility with a wide range of fabrics
          </li>
          <li>
            Solvents and additives carefully chosen to ensure fabric integrity
          </li>
        </ul>
        <p className="mt-2">
          All materials are sourced from certified suppliers and undergo strict
          quality control. Our formulas are tested for performance, safety, and
          compliance with industrial norms.
        </p>
      </div>
    ),
    moreInfo: (
      <div className="font-work">
        <p className="font-semibold mb-2">Additional Information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Certified cruelty-free processes and responsible sourcing</li>
          <li>Certified cruelty-free processes and responsible sourcing</li>
          <li>
            Packaging designed using 100% recyclable and eco-friendly materials
          </li>
          <li>Formulated without harmful VOCs (Volatile Organic Compounds) </li>
        </ul>
        <p className="mt-2">
          Our products are designed not only to perform but also to respect the
          planet. Every formulation is made with environmental safety in mind.
          We believe in delivering excellence without compromise.
        </p>
      </div>
    ),
  };

  return (
    <div className="p-10 font-work w-full sm:w-3/5 mb-10 border-b">
      {/* Tabs */}
      <div className="flex sm:flex-row flex-col border-b mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-4 font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-700">{content[activeTab]}</div>
    </div>
  );
};

export default ProductDetailsTabs;
