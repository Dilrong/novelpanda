"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function TranslateExample() {
  const [typedText, setTypedText] = useState("");
  const [sentences, setSentences] = useState([
    {
      text: "나는 육 년 짝사랑을 했다. 딱히 대단한 것이라고는 생각하지 않는다. 단지 나는 그 아이를 육 년 좋아했던 거고, 그 아이는 육 년 동안 나에게 아무런 관심이 없었던 거였다. 나는 육 년을 기다렸는데, 정작 걔는 플레이 버튼조차 누르지 않았던 거였다.",
      lang: "ko",
    },
    {
      text: "I had a six-year crush. I don't think it was a big deal. It's just that I liked him for six years, and he had no interest in me for six years. I waited six years, and he didn't even press the play button.",
      lang: "en",
    },
    {
      text: "私は6年間の片思いをした。別にすごいことだとは思わない。ただ、私はその子を六年間好きだったわけで、その子は六年間私に何の興味もなかったわけだ。私は六年間待ったのに、肝心の彼はプレイボタンすら押さなかったのだ。",
      lang: "jp",
    },
  ]);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [animationEnded, setAnimationEnded] = useState(false);

  const typeText = (
    text: string,
    index: number,
    callback: { (): void; (): void; (): void },
  ) => {
    setAnimationEnded(false);
    if (index < text.length) {
      setTypedText(text.slice(0, index + 1));
      setTimeout(() => {
        typeText(text, index + 1, callback);
      }, 50);
    } else {
      setTimeout(() => {
        callback();
      }, 1000);
    }
  };

  const showNextSentence = () => {
    if (sentences.length > 0) {
      const nextSentenceIndex = (currentLanguageIndex + 1) % sentences.length;
      setCurrentLanguageIndex(nextSentenceIndex);
      const nextSentence = sentences[nextSentenceIndex].text;
      typeText(nextSentence, 0, () => {
        setAnimationEnded(true);
      });
    }
  };

  useEffect(() => {
    if (sentences.length > 0) {
      typeText(sentences[currentLanguageIndex].text, 0, () => {
        setAnimationEnded(true);
      });
    }
  }, [currentLanguageIndex, sentences]);

  return (
    <div className="flex flex-col text-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        확인 먼저,
      </h3>
      <div className="flex flex-col gap-2 mt-6">
        <p
          className={`typing-animation ${
            animationEnded ? "animation-ended" : ""
          }`}
        >
          {typedText}
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        {animationEnded && (
          <Button variant="outline" onClick={showNextSentence}>
            바로 확인하기
          </Button>
        )}
      </div>
    </div>
  );
}

export default TranslateExample;
