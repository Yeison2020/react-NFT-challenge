import React from "react";
import main_image from "../assets/image-equilibrium.jpg";
import avatar from "../assets/image-avatar.png";
const Screen = () => {
  return (
    <div className="screen__card">
      <img src={main_image} alt="Nft card image" className="image-nft" />
      <h4 className="big_text family_styles">Equilibrium #3429</h4>
      <p className="p_text">
        Our Equilibrium collection promotes balance and calm
      </p>
      <div className="price_tags">
        <p className="cyan_color">0.041 ETH</p>
        <p className="lighter_white">3 days left</p>
      </div>
      <hr className="line_styles" />
      <div className="create_by">
        <img src={avatar} className="avatar_size" />
        <p className="text_name">Creation of Yeison Casado</p>
      </div>
    </div>
  );
};

export default Screen;
