"use client";

import { useState } from "react";
import "@/app/styles/sidebar.css";

export default function Sidebar({
  categories,
  onFilterChange,
  visible,
  customizable,
  selectedFilters,
}) {
  const [expandedSections, setExpandedSections] = useState({
    customizable: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (filterType, value) => {
    onFilterChange({ ...selectedFilters, [filterType]: value });
  };

  const handleCustomizable = (checked) => {
    onFilterChange({ ...selectedFilters, customizable: checked });
  };

  if (!visible) return null;

  const filterSections = [
    { id: "customizable", label: "CUSTOMIZABLE", type: "checkbox" },
    { id: "idealFor", label: "IDEAL FOR", type: "select" },
    { id: "occasion", label: "OCCASION", type: "select" },
    { id: "work", label: "WORK", type: "select" },
    { id: "fabric", label: "FABRIC", type: "select" },
    { id: "segment", label: "SEGMENT", type: "select" },
    { id: "suitableFor", label: "SUITABLE FOR", type: "select" },
    { id: "rawMaterials", label: "RAW MATERIALS", type: "select" },
    { id: "pattern", label: "PATTERN", type: "select" },
  ];

  return (
    <aside className="sidebar">
      {filterSections.map((section) => (
        <div className="filter-section" key={section.id}>
          <div
            className="filter-title"
            onClick={() => toggleSection(section.id)}
          >
            {section.label}
            <span>{expandedSections[section.id] ? "−" : "+"}</span>
          </div>

          {expandedSections[section.id] && (
            <div className="filter-content active">
              {section.type === "checkbox" ? (
                <div className="filter-item">
                  <input
                    type="checkbox"
                    id={section.id}
                    checked={selectedFilters.customizable || false}
                    onChange={(e) => handleCustomizable(e.target.checked)}
                  />
                  <label htmlFor={section.id}>Only Customizable</label>
                </div>
              ) : (
                <select
                  className="filter-select"
                  value={selectedFilters[section.id] || ""}
                  onChange={(e) =>
                    handleCategoryChange(section.id, e.target.value)
                  }
                >
                  <option value="">All</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
