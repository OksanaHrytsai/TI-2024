"use client";
import { useRouter } from "next/navigation";

export default function BackScience() {
  const router = useRouter();

  const handleBackClick = async () => {
    try {
      router.push("/science");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <button type="button" onClick={handleBackClick}>
      &larr; До списку публікацій
    </button>
  );
}
