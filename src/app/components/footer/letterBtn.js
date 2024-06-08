"use client";
import { useRouter } from "next/navigation";
const LetterBtn = () => {
  const router = useRouter();

  const handleButtonClick = (letter) => {
    router.push(`/searcha-z?letter=${letter}`);
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      buttons.push(
        <button
          key={letter}
          className="alphabet-button text-xl px-3 py-1 border rounded-md bg-green text-white focus:bg-white focus:text-green"
          onClick={() => handleButtonClick(letter)}
        >
          {letter}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="button-container text-white space-x-3">
      {renderButtons()}
    </div>
  );
};

export default LetterBtn;
