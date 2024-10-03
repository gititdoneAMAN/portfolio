const SkillCard = ({ children }) => {
  return (
    <div className="size-20 md:size-40 p-2 rounded-3xl hover:bg-gray-100 bg-white">
      {children}
    </div>
  );
};

export default SkillCard;
