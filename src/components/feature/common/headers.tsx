import Link from "next/link";
import Logo from "@/components/feature/common/logo";
import { Button } from "@/components/ui/button";

function Headers() {
  return (
    <header>
      <nav className="border-gray-200 px-4 py-2.5 shadow">
        <div className="flex justify-between">
          <Logo />
          <div>
            <Link href="#estimate">
              <Button>견적내기</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
