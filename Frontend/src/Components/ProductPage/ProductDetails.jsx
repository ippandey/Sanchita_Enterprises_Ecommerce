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
          Dermatologist-Tested | Clinically-Tested | Sensitive Skin-Friendly
        </p>
        <p>
          This dreamy milk is no ordinary{" "}
          <a href="#" className="text-blue-500 underline">
            toner
          </a>
          . It does more than hydrate and replenish—this toner restores skin’s
          natural{" "}
          <a href="#" className="text-blue-500 underline">
            pH balance
          </a>
          , removes post-cleanse hard water residue, and lifts those last
          remaining traces of the day’s makeup.
        </p>
        <p className="mt-2">
          The gentle formula is filled with humectants that draw in moisture and
          nourishing amino acids, vitamins, and minerals—perfect for sensitive
          skin. This hydrating toner's milky texture leaves you feeling
          velvety-soft (thanks to algae extract, bamboo extract, and coconut
          water) and residue-free.
        </p>
        <p className="mt-2">
          Skin’s happiest when its pH falls between 5.0-6.0. Baby Cheeks’ pH is
          5.0-6.0 (we speak pH in a range because a formula’s pH can change
          slightly over time).
        </p>
      </div>
    ),
    material: (
      <div className="font-work">
        <p className="font-semibold mb-2">Key Materials:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bamboo extract for hydration and soothing</li>
          <li>Algae extract for its moisturizing properties</li>
          <li>Coconut water for natural nourishment</li>
        </ul>
        <p className="mt-2">
          All materials are sustainably sourced and dermatologically tested to
          ensure safety for sensitive skin.
        </p>
      </div>
    ),
    moreInfo: (
      <div className="font-work">
        <p className="font-semibold mb-2">Additional Information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Certified cruelty-free and vegan</li>
          <li>Free from parabens, sulfates, and artificial fragrances</li>
          <li>Packaging made from 100% recyclable materials</li>
        </ul>
        <p className="mt-2">
          This product is developed with the environment in mind, ensuring
          minimal ecological impact without compromising quality.
        </p>
      </div>
    ),
  };

  return (
    <div className="p-10 font-work w-3/5 mb-10 border-b">
      {/* Tabs */}
      <div
        className="flex border-b mb-8 
       "
      >
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
