import messageCardStyles from "./index.module.css";

export const MessageCard = () => {
  return (
    <div className={messageCardStyles.bgContainer}>
      <p className={messageCardStyles.message}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        recusandae, reiciendis nihil aliquid natus voluptate iste aliquam
        dolorum blanditiis ipsam minus cupiditate unde sed, harum qui alias!
        Nesciunt, accusamus corrupti?
      </p>
      <span className={messageCardStyles.timeStamp}>yesterday</span>
    </div>
  );
};
