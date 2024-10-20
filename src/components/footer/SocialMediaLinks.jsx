import React from "react";

const SocialMediaLinks = () => (
  <div className="flex gap-2 mt-4">
    {["twitter", "facebook", "instagram", "github"].map((platform) => (
      <a href="#" key={platform}>
        <img
          src={`/assets/${platform}-logo.svg`}
          alt={platform.charAt(0).toUpperCase() + platform.slice(1)}
          className="w-8 h-8 rounded-full bg-dark-iconsBgColor p-2"
        />
      </a>
    ))}
  </div>
);

export default SocialMediaLinks;
