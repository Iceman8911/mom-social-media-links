import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-4">
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div>

      <p class="font-bold text-2xl">@yellingCat</p>

      <p class="font-bold text-xl">Contact me with </p>
    </main>
  );
}
