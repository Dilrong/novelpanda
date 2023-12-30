import EstimateForm from "@/components/feature/home/estimate-form";
import Timer from "@/components/feature/home/timer";

export default function Home() {
  return (
    <>
      <section className="p-4">
        <div className="flex flex-col text-center mt-8">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Novel Panda
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-2">
            해외 웹소설가의 꿈을 꾸는 당신에게 해외 진출 기회를 잡을 수 있도록
            도와드립니다.
          </p>
        </div>
      </section>
      <section id="estimate" className="p-4">
        <EstimateForm />
      </section>
      <section>
        <div className="flex flex-col text-center mt-16">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            오픈 특가
          </h3>
          <Timer />
        </div>
      </section>
      <section className="p-4">
        <div className="flex flex-col text-center mt-16">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            불만족시 100% 환불
          </h3>
          <p className="mt-4">
            의뢰하신 웹소설의 번역 퀄리티가 만족스럽지 않다면 100% <b>환불</b>
            해드립니다.
          </p>
        </div>
      </section>
      <section className="p-4">
        <div className="flex flex-col text-center mt-16">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            믿고 맡기세요
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <div className="text-xl bg-primary text-primary-foreground hover:bg-primary/90 p-8 rounded">
              <b>50명</b>의 번역가
            </div>
            <div className="text-xl bg-primary text-primary-foreground hover:bg-primary/90 p-8 rounded">
              번역 만족도 <b>98%</b>
            </div>
            <div className="text-xl bg-primary text-primary-foreground hover:bg-primary/90 p-8 rounded">
              재의뢰율 <b>80%</b>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
