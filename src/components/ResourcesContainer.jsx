import { useState } from "react";
import { Link } from "react-router-dom";

export function ResourceTab({ name, subtabs, invisibleMd, footer, className }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        footer
          ? "flex w-fit"
          : `flex flex-col flex-1 gap-6 ${invisibleMd && "md:hidden"}`
      } ${className}`}
    >
      <button
        className={`flex w-full md:hidden ${open && "text-emerald-600"}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>{name}</span>
        <span className="ml-auto ">{open ? "-" : "+"}</span>
      </button>
      <h2 className={` ${footer ? "hidden" : "hidden md:block"}`}>{name}</h2>
      <ul
        className={` ${
          footer
            ? "flex flex-row text-xs gap-4"
            : `text-base gap-4 md:flex md:flex-col md:text-sm xl:text-base ${
                open ? "flex flex-col" : "hidden"
              }`
        }`}
      >
        {subtabs.map((text, index) => {
          return (
            <button
              key={name + text + index}
              className={`text-left hover:text-emerald-600 ${
                !footer && "flex-1"
              }`}
            >
              {text}
            </button>
          );
        })}
      </ul>
      <hr className="md:hidden" />
    </div>
  );
}

export default function ResourcesContainer() {
  return (
    <div className="flex flex-col md:flex-row gap-4 flex-1 text-xl md:text-sm xl:text-lg">
      <ResourceTab
        name="Customer Service"
        subtabs={[
          "FAQ",
          "Shipping & Handling",
          "30-Day Guarantee",
          "Contact Us",
        ]}
      />
      <ResourceTab
        name="Resources"
        subtabs={[
          "Find Your Plant",
          "Plant Care Library",
          "Blog",
          "Free Online Courses",
        ]}
      />
      <ResourceTab
        name="My Sill"
        subtabs={[
          "My Account",
          "Workshops",
          "Track My Order",
          "Returns Portal",
        ]}
      />
      <ResourceTab
        name="Explore"
        subtabs={["Our Story", "Locations", "Careers", "Corporate Gifting"]}
      />
      <ResourceTab
        invisibleMd
        name="Policies"
        subtabs={[
          "Affiliate Program",
          "Terms of Use",
          "Privacy Policy",
          "Accessibility",
          "Do Not Sell My Info",
        ]}
      />
    </div>
  );
}
